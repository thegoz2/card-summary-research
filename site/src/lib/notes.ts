import type { CollectionEntry } from 'astro:content';
import { slugify } from './slug.mjs';

export type Note = CollectionEntry<'notes'>;

// The original vault filename (Astro slugifies `id`, so derive from filePath).
export function rawName(note: Note): string {
  const fp = (note as unknown as { filePath?: string }).filePath;
  if (fp) return (fp.split(/[\\/]/).pop() || fp).replace(/\.md$/i, '');
  return note.id;
}

export function noteTitle(note: Note): string {
  return (note.data.title as string) || rawName(note);
}

export function noteSlug(note: Note): string {
  return slugify(rawName(note));
}

export function noteTags(note: Note): string[] {
  return (note.data.tags as string[] | undefined) ?? [];
}

export interface Category {
  key: string;
  label: string;
  icon: string;
  order: number;
}

const CATEGORIES: Category[] = [
  { key: 'hub', label: 'ศูนย์กลาง', icon: '🏠', order: 0 },
  { key: 'strategy', label: 'กลยุทธ์ทำกำไร', icon: '📈', order: 1 },
  { key: 'market', label: 'ตลาด & แนวโน้ม', icon: '🌏', order: 2 },
  { key: 'cost', label: 'ต้นทุน & ราคา', icon: '💸', order: 3 },
  { key: 'tools', label: 'เครื่องมือ & ติดตาม', icon: '🛠️', order: 4 },
  { key: 'reference', label: 'อ้างอิง & คู่มือ', icon: '📚', order: 5 },
  { key: 'other', label: 'อื่นๆ', icon: '📄', order: 6 },
];

const BY_KEY = Object.fromEntries(CATEGORIES.map((c) => [c.key, c]));

export function allCategories(): Category[] {
  return CATEGORIES;
}

export function categoryOf(note: Note): Category {
  const tags = noteTags(note).map((t) => t.toLowerCase());
  const title = noteTitle(note);
  const has = (...xs: string[]) => xs.some((x) => tags.includes(x));
  const inTitle = (...xs: string[]) => xs.some((x) => title.includes(x));

  if (has('index', 'moc', 'hub') || inTitle('ภาพรวม', 'Decision Guide', 'Glossary', 'อภิธานศัพท์'))
    return BY_KEY.hub;
  if (has('tracking', 'dashboard', 'monitor', 'monthly') || inTitle('Tracking Sheet'))
    return BY_KEY.tools;
  if (has('strategy', 'playbook') || inTitle('กลยุทธ์', 'Playbook', 'แผนปฏิบัติ'))
    return BY_KEY.strategy;
  if (
    has('market', 'market-data', 'global-market', 'cross-country', 'forecast', 'bubble', 'timeline', 'demand') ||
    inTitle('ตลาด', 'ไทม์ไลน์', 'พยากรณ์', 'ฟองสบู่', 'อิทธิพล', 'ทำไม', 'ลูกค้า', 'ลงทุน')
  )
    return BY_KEY.market;
  if (
    has('price', 'cost', 'logistics', 'tax', 'import', 'export', 'shipping') ||
    inTitle('ค่า', 'ภาษี', 'ราคา', 'นำเข้า', 'ส่งออก', 'ต้นทุน', 'หิ้ว', 'อากร', 'ส่งเกรด', 'เกรด')
  )
    return BY_KEY.cost;
  if (
    has('reference', 'set-list', 'glossary', 'guide', 'boosters') ||
    inTitle('รายชื่อชุด', 'ชุดไหน', 'วิธีพรี', 'ปลอม', 'เก็บรักษา', 'Pull Rate')
  )
    return BY_KEY.reference;
  return BY_KEY.other;
}

// A short plain-text preview from the note body for index cards.
export function excerpt(body = '', max = 160): string {
  const lines = body.split('\n');
  const picked: string[] = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('#')) continue; // headings
    if (line.startsWith('>')) continue; // callouts / quotes
    if (line.startsWith('|') || /^[-:|\s]+$/.test(line)) continue; // tables
    if (line.startsWith('---')) continue;
    if (line.startsWith('![')) continue; // images
    if (line.startsWith('←') || line.startsWith('**สัญลักษณ์')) continue;
    picked.push(line);
    if (picked.join(' ').length > max) break;
  }
  let text = picked.join(' ');
  text = text
    .replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2') // wikilinks -> alias
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // md links -> text
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text;
}

// Slugs that a note links OUT to (parsed from its [[wikilinks]]).
export function outgoingSlugs(note: Note): Set<string> {
  const set = new Set<string>();
  for (const m of (note.body ?? '').matchAll(/\[\[([^\]]+?)\]\]/g)) {
    const inner = m[1].replace(/\\\|/g, '|');
    const target = (inner.split('|')[0] || '').split('#')[0].trim();
    if (target) set.add(slugify(target));
  }
  return set;
}

// Notes that link TO the given note.
export function backlinks(note: Note, all: Note[]): Note[] {
  const target = noteSlug(note);
  return all.filter((n) => n.id !== note.id && outgoingSlugs(n).has(target));
}
