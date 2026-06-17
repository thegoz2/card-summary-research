// Deterministic slug used BOTH for note routes and wikilink hrefs,
// so [[Note Title]] resolves to /notes/<same-slug>.
export function slugify(name) {
  return String(name)
    .normalize('NFC')
    .split('#')[0] // drop heading anchors
    .trim()
    .replaceAll('—', '-')
    .replaceAll('–', '-')
    .replace(/[\\/]+/g, '-')
    .replace(/[()[\]{}"'`?!,.:;|]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}
