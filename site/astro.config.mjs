import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import remarkCallout from './src/lib/remark-callout.mjs';
import remarkWikilink from './src/lib/remark-wikilink.mjs';
import rehypeTableWrap from './src/lib/rehype-table-wrap.mjs';
import { slugify } from './src/lib/slug.mjs';

// Build the set of known note slugs from the vault so wikilinks to
// non-existent notes can be styled differently.
const vaultDir = fileURLToPath(new URL('../Research', import.meta.url));
const knownSlugs = new Set(
  readdirSync(vaultDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => slugify(f.replace(/\.md$/, '')))
);

// base = '/' locally, '/card-summary-research' on GitHub Pages (set BASE_PATH in CI)
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://thegoz2.github.io',
  base,
  vite: { plugins: [tailwind()] },
  markdown: {
    gfm: true,
    remarkPlugins: [remarkCallout, [remarkWikilink, { knownSlugs, base }]],
    rehypePlugins: [rehypeTableWrap],
  },
});
