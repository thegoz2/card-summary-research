// Prefix internal links with Astro's configured base so the site works both at
// root (local dev / Cloudflare) and under a subpath (GitHub Pages project site).
const BASE = import.meta.env.BASE_URL || '/';

export function url(path: string): string {
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE; // '' or '/card-summary-research'
  const p = path.startsWith('/') ? path : '/' + path;
  return (b + p) || '/';
}

// Strip the base prefix from a pathname (for active-nav comparisons).
export function relPath(pathname: string): string {
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  if (b && pathname.startsWith(b)) return pathname.slice(b.length) || '/';
  return pathname || '/';
}
