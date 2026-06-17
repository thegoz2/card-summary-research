// Curated numeric data for the dashboard, seeded from the vault notes
// (ตลาด OP TCG ต่างประเทศ / ไทย — verified มิ.ย. 2026, Tracking Sheet).
// Update these when the underlying notes change, or ask Claude to re-sync.

export const META = {
  asOf: '2026-06-17',
  rates: '1 USD = 35 ฿ · 100 JPY = 23 ฿ · 1 SGD = 26 ฿',
  sourceNotes: [
    'ตลาด OP TCG ต่างประเทศ — เทียบรายภูมิภาค (มิ.ย. 2026)',
    'ตลาด OP TCG ไทย — ข้อมูลจริง (verified มิ.ย. 2026)',
    'Tracking Sheet — สัญญาณเตือนฟองสบู่ OP TCG (รายเดือน)',
  ],
};

// ---- 1) Booster box price by market (THB) -------------------------------
// Markets kept consistent across sets for a clean grouped bar chart.
export const BOX_MARKETS = [
  { key: 'sasom', label: 'SASOM ไทย (P2P)', color: '#dc2626' },
  { key: 'retailTH', label: 'ร้านรีเทลไทย', color: '#f59e0b' },
  { key: 'jpSec', label: 'JP ตลาดรอง', color: '#3b82f6' },
  { key: 'usSec', label: 'US secondary', color: '#10b981' },
] as const;

export const BOX_PRICES: {
  set: string;
  note: string;
  sasom: number | null;
  retailTH: number | null;
  jpSec: number | null;
  usSec: number | null;
}[] = [
  { set: 'OP-13', note: 'Anniversary · blue-chip', sasom: 5980, retailTH: null, jpSec: 7682, usSec: 25375 },
  { set: 'OP-15', note: "Kami's Island", sasom: 3299, retailTH: null, jpSec: 4255, usSec: 4200 },
  { set: 'OP-16', note: 'ชุดล่าสุด', sasom: 4300, retailTH: 7500, jpSec: 4692, usSec: 8225 },
];

// ---- 2) TCGKing index (14 พ.ค. 2026), baseline = 100 --------------------
export const TCGKING = [
  { key: 'Leader Alt-Art', value: 130.7 },
  { key: 'Sealed Box', value: 129.4 },
  { key: 'All Products', value: 110.7 },
  { key: 'Special Rare', value: 91.8 },
  { key: 'Treasure Rare', value: 80.6 },
];

// ---- 3) Manga Rare singles — RAW vs GRADED (THB, ราคาชุมชน card2price) ----
export const SINGLES = [
  { card: 'Luffy EB02-061 SEC', raw: 77657, graded: 132577 },
  { card: 'Ace OP13-119 SP', raw: 76798, graded: 294595 },
  { card: 'Luffy OP13-118 SEC', raw: 581061, graded: 1523768 },
];

// ---- 4) Bubble warning dashboard — 8 indicators -------------------------
export type Signal = 'green' | 'yellow' | 'red';
export const BUBBLE: { id: number; name: string; status: Signal; detail: string }[] = [
  { id: 1, name: 'ดัชนี Sealed Box (TCGKing)', status: 'green', detail: '129.4 — ยืนเหนือ 120' },
  { id: 2, name: 'ดัชนี Leader Alt-Art', status: 'green', detail: '130.7 — ยืนเหนือ 120' },
  { id: 3, name: 'Manga Rare ตัวดัง PSA10', status: 'yellow', detail: 'ยังไม่จด eBay sold จริง — สร้างฐานข้อมูล' },
  { id: 4, name: 'Pattern ราคา sealed ชุดใหม่', status: 'yellow', detail: 'OP-15 over-supply / OP-16 ต้องเฝ้า' },
  { id: 5, name: 'ข่าว Bandai reprint / PRB', status: 'yellow', detail: 'PRB เคยกด Luffy 061 — เฝ้า PRB-03' },
  { id: 6, name: 'สัญญาณ speculator (คดีจุ่ม/ดราม่า)', status: 'yellow', detail: 'เคสจุ่มโกง 160,000 ฿ (เม.ย. 2026)' },
  { id: 7, name: 'ข่าว IP One Piece', status: 'green', detail: 'Final Saga ดำเนินต่อ ไม่มีวันจบ' },
  { id: 8, name: 'Competitive scene', status: 'green', detail: 'คนไทยแชมป์โลก 2025-26, Flagship ต่อเนื่อง' },
];

// ---- 5) Set release timeline (EN) --------------------------------------
export const TIMELINE = [
  { code: 'OP-01', name: 'Romance Dawn', date: 'ธ.ค. 2022' },
  { code: 'OP-05', name: 'Awakening of the New Era', date: '2023–24' },
  { code: 'OP-09', name: 'Emperors in the New World', date: '2025' },
  { code: 'OP-12', name: 'Legacy of the Master', date: 'ส.ค. 2025' },
  { code: 'OP-13', name: 'Carrying on His Will', date: 'พ.ย. 2025' },
  { code: 'OP-14', name: "The Azure Sea's Seven", date: 'ม.ค. 2026' },
  { code: 'OP-15', name: "Adventure on Kami's Island", date: 'เม.ย. 2026' },
  { code: 'OP-16', name: 'The Time of Battle', date: 'มิ.ย. 2026' },
  { code: 'OP-17', name: "The World's Strongest Warriors", date: 'ส.ค. 2026 ⭐' },
];
