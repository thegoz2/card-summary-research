// Parses the "📈 Log สรุป" monthly table from the Tracking Sheet note so the
// time-series chart updates automatically when you fill rows in Obsidian.
export interface LogRow {
  month: string;
  sealed: number | null;
  leader: number | null;
  tr: number | null;
}

export function parseLogTable(body: string): LogRow[] {
  // Find the actual heading "## … Log สรุป", not the first mention in the how-to text.
  const heading = body.match(/^#{1,6}.*Log สรุป.*$/m);
  if (!heading) return [];
  const idx = body.indexOf(heading[0]);
  const lines = body.slice(idx).split(/\r?\n/);

  const tableLines: string[] = [];
  let inTable = false;
  for (const line of lines.slice(1)) {
    if (line.trim().startsWith('|')) {
      inTable = true;
      tableLines.push(line.trim());
    } else if (inTable) break;
  }
  // [0] = header, [1] = separator, [2..] = data
  const dataLines = tableLines.slice(2);

  const num = (s: string): number | null => {
    const v = parseFloat((s || '').replace(/,/g, '').replace(/[^0-9.]/g, ''));
    return Number.isFinite(v) ? v : null;
  };

  const rows: LogRow[] = [];
  for (const line of dataLines) {
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.length < 4) continue;
    const sealed = num(cells[1]);
    const leader = num(cells[2]);
    const tr = num(cells[3]);
    if (sealed === null && leader === null && tr === null) continue; // unfilled month
    const month = cells[0].replace(/\*\*/g, '').replace(/[⚠️⭐]/g, '').replace(/\(.*?\)/g, '').trim();
    rows.push({ month, sealed, leader, tr });
  }
  return rows;
}
