import { slugify } from './slug.mjs';

// Turns Obsidian [[Target]] and [[Target|Alias]] into real links.
// Targets that don't match a known note get a class so we can grey them out.
export default function remarkWikilink({ knownSlugs } = {}) {
  return (tree) => transform(tree);

  function transform(node) {
    if (!node || !node.children) return;
    const out = [];
    for (const child of node.children) {
      if (child.type === 'text' && child.value.includes('[[')) {
        out.push(...split(child.value));
      } else if (child.type === 'inlineCode' || child.type === 'code') {
        out.push(child); // never rewrite inside code
      } else {
        transform(child);
        out.push(child);
      }
    }
    node.children = out;
  }

  function split(value) {
    const nodes = [];
    const re = /\[\[([^\]]+?)\]\]/g;
    let last = 0;
    let m;
    while ((m = re.exec(value)) !== null) {
      if (m.index > last) nodes.push({ type: 'text', value: value.slice(last, m.index) });
      const inner = m[1].replace(/\\\|/g, '|');
      const pipe = inner.indexOf('|');
      const target = (pipe === -1 ? inner : inner.slice(0, pipe)).trim();
      const alias = (pipe === -1 ? inner : inner.slice(pipe + 1)).trim();
      const slug = slugify(target);
      const exists = !knownSlugs || knownSlugs.has(slug);
      nodes.push({
        type: 'link',
        url: '/notes/' + slug + '/',
        data: {
          hProperties: {
            className: exists ? ['wikilink'] : ['wikilink', 'wikilink-missing'],
          },
        },
        children: [{ type: 'text', value: alias }],
      });
      last = re.lastIndex;
    }
    if (last < value.length) nodes.push({ type: 'text', value: value.slice(last) });
    return nodes;
  }
}
