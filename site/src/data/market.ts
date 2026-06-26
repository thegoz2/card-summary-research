// Curated numeric data for the dashboard, seeded from the vault notes
// (adversarially verified — confidence markers preserved: ✅ verified / ⚠️ partial / ❌ refuted).
// Update when the underlying notes change, or ask Claude to re-sync.
// Fact re-check 2026-06-27: PRB EB02-061 floor ~$10–13, OP-16 Admirals = Super Alt-Art (ไม่ใช่ Manga Rare),
//   OP-17 ชื่อ/วันยังไม่ official, จุ่ม penalty (organizer ม.12 = 3 ด.–3 ปี), Charizard arc, Pokémon mkt size→⚠️,
//   Value tier ปิด 2 มิ.ย. 2026. ค่าเกรดคงตามหน้าทางการในโน้ต ($17/$20/$149/$299). Market price snapshots ยังเป็น มิ.ย. 2026.
export const META = {
  asOf: '2026-06-27',
  rates: '1 USD = 35 ฿ · 100 JPY = 23 ฿ · 1 SGD = 26 ฿ · 1 HKD = 4.5 ฿ · 1 MYR = 7.5 ฿',
  speculatorShare: 75, // % of market that is speculative (was ~25% 2-3 yrs ago)
  bubbleSignals: { present: 10, total: 14 },
  phaseNow: 'Distribution → จุดตัดสิน',
};

// ============================================================
// 1) MARKET CYCLE PHASE
// ============================================================
export const CYCLE = [
  { phase: 'Early Growth', period: '2022', active: false },
  { phase: 'Expansion', period: '2023–24', active: false },
  { phase: 'Euphoria', period: 'ปลาย 2025', active: false },
  { phase: 'Distribution', period: 'ต้น 2026', active: true },
  { phase: 'จุดตัดสิน (OP-17)', period: 'ก.ย. 2026', active: false },
];

// ============================================================
// 2) TCGKing INDEX — YTD % (base 100 = 1 ม.ค. 2026, ณ 14 พ.ค. 2026)
// ⚠️ ดัชนีผู้ขายรายเดียว ไม่มี methodology เปิด
// ============================================================
export const TCGKING = [
  { key: 'Leader Alt-Art', value: 130.7, ytd: 30.7 },
  { key: 'Sealed Box', value: 129.4, ytd: 29.4 },
  { key: 'All Products', value: 110.7, ytd: 10.7 },
  { key: 'Special Rare', value: 91.8, ytd: -8.2 },
  { key: 'Treasure Rare', value: 80.6, ytd: -19.4 },
];

// ============================================================
// 3) BUBBLE WARNING — 8 monthly indicators (ใช้ใน Tracking Sheet)
// ============================================================
export type Signal = 'green' | 'yellow' | 'red';
export const BUBBLE: { id: number; name: string; status: Signal; detail: string }[] = [
  { id: 1, name: 'ดัชนี Sealed Box (TCGKing)', status: 'green', detail: '129.4 — ยืนเหนือ 120' },
  { id: 2, name: 'ดัชนี Leader Alt-Art', status: 'green', detail: '130.7 — ยืนเหนือ 120' },
  { id: 3, name: 'Manga Rare ตัวดัง PSA10', status: 'yellow', detail: 'ยังไม่จด eBay sold จริง — สร้างฐานข้อมูล' },
  { id: 4, name: 'Pattern ราคา sealed ชุดใหม่', status: 'yellow', detail: 'OP-15 chase −30–40% / OP-16 ต้องเฝ้า' },
  { id: 5, name: 'ข่าว Bandai reprint / PRB', status: 'yellow', detail: 'PRB-02 (ต.ค. 2025) กด Luffy EB02-061 จาก >$100 → ~$10–13' },
  { id: 6, name: 'สัญญาณ speculator (คดีจุ่ม/ดราม่า)', status: 'yellow', detail: 'ดราม่าจุ่ม/กล่องสุ่ม (เคส 160k ฿ เม.ย. 2026 ⚠️ ยังไม่ยืนยันแหล่ง)' },
  { id: 7, name: 'ข่าว IP One Piece', status: 'green', detail: 'Final Saga ดำเนินต่อ ยังไม่มีวันจบทางการ' },
  { id: 8, name: 'Competitive scene', status: 'green', detail: 'คนไทยแชมป์โลก 2025-26, Flagship ต่อเนื่อง' },
];

// ============================================================
// 4) 3 SCENARIOS (Bull / Base / Bear) — ⚠️ ความน่าจะเป็นเป็นการประเมิน ไม่ใช่ตัวเลขจริง
// ============================================================
export const SCENARIOS = [
  {
    key: 'bull', tone: 'green', emoji: '🟢', name: 'A — Soft Landing (โตต่อแบบนุ่ม)',
    prob: 'ต่ำ–กลาง', outcome: 'ปรับฐานเป็นระเบียบ blue-chip ขึ้น ไม่แตก',
    detail: 'ชุดใหม่ H2 2026 ย่อ 15–25% → 2027 แยกขั้วถาวร → 2028 ตลาดเล็กลงแต่คุณภาพสูง',
    trigger: 'Bandai คุม supply + FOMO ก่อน Final Saga จบ + competitive แข็ง',
  },
  {
    key: 'base', tone: 'yellow', emoji: '🟡', name: 'B — ปรับฐานต่อเนื่อง + แยกขั้วถาวร',
    prob: 'สูงสุด', outcome: 'ไม่แตกครั้งเดียว ค่อยๆ กร่อน tier 2–3 ลง blue-chip ยืน',
    detail: 'OP-16 chase −20–40% ใน 4–8 สัปดาห์ → OP-17 ทดสอบ demand → สิ้นปีตลาดรวม −20–30%',
    trigger: 'chase ชุดใหม่ร่วง 30–50% ตาม pattern + คู่แข่งดึงงบ + reprint wave',
  },
  {
    key: 'bear', tone: 'red', emoji: '🔴', name: 'C — ฟองสบู่แตกแรง',
    prob: 'ต่ำ (อย่ามองข้าม)', outcome: 'ราคาร่วง 50–70% ทั้งกระดานใน 6–12 เดือน',
    detail: 'เทียบ Pokémon 2021: Charizard PSA10 −55% · ต้องเกิดหลายปัจจัยพร้อมกัน',
    trigger: 'reprint หนัก + One Piece ส่งสัญญาณจบ + macro shock + speculator (75%) ขายพร้อมกัน',
  },
];

// ============================================================
// 5) FORECAST 2026–2028 — ช่วง % คาดการณ์ (floating bar [min,max])
// ============================================================
export const FORECAST = [
  { period: 'H2 2026 (ชุดใหม่)', range: [-25, -15] },
  { period: 'มิ.ย.–ส.ค. (OP-16 chase)', range: [-40, -20] },
  { period: 'สิ้นปี 2026 (ตลาดรวม)', range: [-30, -20] },
];

// ============================================================
// 6) BOOSTER BOX PRICE by market (THB)
// ============================================================
export const BOX_MARKETS = [
  { key: 'sasom', label: 'SASOM ไทย (P2P)', color: '#dc2626' },
  { key: 'retailTH', label: 'ร้านรีเทลไทย', color: '#f59e0b' },
  { key: 'jpSec', label: 'JP ตลาดรอง', color: '#3b82f6' },
  { key: 'usSec', label: 'US secondary', color: '#10b981' },
] as const;

export const BOX_PRICES: {
  set: string; note: string;
  sasom: number | null; retailTH: number | null; jpSec: number | null; usSec: number | null;
}[] = [
  { set: 'OP-13', note: 'Anniversary · blue-chip', sasom: 5980, retailTH: null, jpSec: 7682, usSec: 25375 },
  { set: 'OP-15', note: "Kami's Island", sasom: 3299, retailTH: null, jpSec: 4255, usSec: 4200 },
  { set: 'OP-16', note: 'ชุดล่าสุด', sasom: 4300, retailTH: 7500, jpSec: 4692, usSec: 8225 },
];

// ============================================================
// 7) CARRY ("หิ้ว") landed price per OP-16 box by country (THB)
// เทียบกับ SASOM 4,300 / ร้านรีเทล 7,500
// ============================================================
export const CARRY = [
  { country: '🇯🇵 ญี่ปุ่น (หลัง tax-free)', baht: 3500, conf: '✅', verdict: 'คุ้มสุดถ้า ≤¥18,000' },
  { country: '🇸🇬 สิงคโปร์ (หลัง GST refund)', baht: 3350, conf: '✅', verdict: 'คุ้ม (ถ้ามีของ)' },
  { country: '🇭🇰 ฮ่องกง (ไม่มีภาษี)', baht: 4275, conf: '✅', verdict: '≈ SASOM' },
  { country: '🇹🇭 SASOM (อ้างอิง)', baht: 4300, conf: '✅', verdict: 'ฐานเทียบ' },
  { country: '🇹🇭 ร้านรีเทลไทย', baht: 7500, conf: '✅', verdict: '+75% เหนือ SASOM' },
  { country: '🇲🇾 มาเลเซีย (EN)', baht: 9743, conf: '⚠️', verdict: 'ไม่คุ้มเลย' },
];
export const CARRY_REF = { sasom: 4300, retail: 7500 };

// ============================================================
// 8) OP-17 PRE-ORDER price by source (THB) — เกณฑ์: fair EN 4,300–5,000
// ============================================================
export const OP17 = {
  fairBand: [4300, 5000],
  asiaBand: [6000, 7000],
  overpriced: 7500,
  prices: [
    { src: 'Miniature Market (US, EN)', baht: 4300, conf: '✅' },
    { src: 'MSRP ทางการ EN', baht: 4300, conf: '✅' },
    { src: 'Nodu Toys (PH, EN)', baht: 4400, conf: '⚠️' },
    { src: 'Zatu (UK, EN)', baht: 4850, conf: '⚠️' },
    { src: 'TCG Corner (English-for-Asia)', baht: 6750, conf: '⚠️' },
  ],
};

// ============================================================
// 9) SINGLES — RAW vs GRADED (THB, ราคาชุมชน card2price)
// ============================================================
export const SINGLES = [
  { card: 'Luffy EB02-061 SEC', raw: 77657, graded: 132577 },
  { card: 'Ace OP13-119 SP', raw: 76798, graded: 294595 },
  { card: 'Luffy OP13-118 SEC', raw: 581061, graded: 1523768 },
];

// Verified chase card (เฉพาะตัวที่ยืนยันได้)
export const CHASE = [
  { card: 'Manga Luffy OP05-119 PSA10', price: '~$5,600–9,000', conf: '✅', note: 'sold ล่าสุด ~$5,600–7,000 · ⚠️ population สูง ผันผวน' },
  { card: 'Luffy OP13-118 Manga PSA10 (Goldin)', price: '~$22,570 (sold 26 ก.พ. 2026)', conf: '✅', note: 'ราคาประมูลจริง' },
  { card: 'Shanks OP01-120 Manga (graded)', price: '$3,640–6,800', conf: '✅', note: 'เล่นไม่ได้ = พรีเมียมนักสะสมล้วน' },
];

// ============================================================
// 10) GRADING FEE TIERS (USD per card) — PSA vs CGC
// ตัวเลขจากหน้าทางการ (เข้าถึง มิ.ย. 2026) · PSA ขึ้นราคา ก.พ. 2026 (+~$5/ใบ), Value tier ปิดรับ 2 มิ.ย. 2026 (backlog)
//    CGC มี fee increase Mar 2026 — Bulk $17 (ไม่ต้องสมาชิก) · flat TCG tier $20/ใบ ไม่จำกัดมูลค่า
// ============================================================
export const GRADING = [
  { tier: 'CGC Bulk', usd: 17, co: 'CGC' },
  { tier: 'CGC TCG (flat)', usd: 20, co: 'CGC' },
  { tier: 'PSA Value', usd: 24.99, co: 'PSA' },
  { tier: 'CGC Standard', usd: 55, co: 'CGC' },
  { tier: 'PSA Regular', usd: 79.99, co: 'PSA' },
  { tier: 'CGC Express', usd: 100, co: 'CGC' },
  { tier: 'PSA Express', usd: 149, co: 'PSA' },
  { tier: 'PSA Super Express', usd: 299, co: 'PSA' },
];

// Thai agent CardKub (THB/card, all-in รวมส่งไป-กลับ)
export const CARDKUB = [
  { tier: 'Regular', baht: 3800, days: '~60 วันทำการ' },
  { tier: 'Express', baht: 6400, days: '~25 วัน' },
  { tier: 'Super Express', baht: 13000, days: '~25 วัน' },
  { tier: 'Walk Through', baht: 25000, days: '~25 วัน' },
];

// ============================================================
// 11) DHL shipping cost by weight & route (THB, list 2025, ไม่รวม fuel + VAT)
// ============================================================
export const DHL = {
  weights: ['0.5 kg', '1 kg', '2 kg'],
  routes: [
    { label: 'ไทย → ฮ่องกง', color: '#3b82f6', baht: [2334, 2620, 3188] },
    { label: 'ไทย → สหรัฐฯ', color: '#dc2626', baht: [5719, 6465, 7949] },
  ],
};

// ============================================================
// 12) SELLING PLATFORM fees (all-in %) — domestic vs export
// ============================================================
export const FEES = [
  { platform: 'TikTok Shop (TH)', pct: 3.2, scope: 'ในประเทศ' },
  { platform: 'Lazada (TH)', pct: 3.2, scope: 'ในประเทศ' },
  { platform: 'SASOM (ฝากขาย)', pct: 7.5, scope: 'ในประเทศ' },
  { platform: 'Shopee (TH)', pct: 9.0, scope: 'ในประเทศ' },
  { platform: 'Cardmarket (EU)', pct: 7.5, scope: 'ส่งออก' },
  { platform: 'Whatnot (US)', pct: 8.0, scope: 'ส่งออก' },
  { platform: 'Mercari JP', pct: 10.0, scope: 'ส่งออก' },
  { platform: 'eBay (ของถูก)', pct: 14.5, scope: 'ส่งออก' },
];

// ============================================================
// 13) IMPORT-TO-RESELL landed margin (OP-16 scenarios, % vs ขายในไทย)
// ⚠️ อัตราอากรประเมิน 10–20% (❌ ยังไม่ยืนยัน)
// ============================================================
export const LANDED = [
  { scenario: 'JP MSRP ยกเคส 12 กล่อง (DHL)', margin: 72, conf: '⚠️ MSRP หายาก' },
  { scenario: 'EN (Maxsoft) → ขายรีเทล', margin: 40, conf: '⚠️ ต้องมีนิติบุคคล' },
  { scenario: 'JP ตลาดรอง 12 กล่อง (DHL)', margin: -25, conf: '❌ ขาดทุน' },
  { scenario: 'JP ตลาดรอง 1 กล่อง (proxy)', margin: -32, conf: '❌ ขาดทุน' },
  { scenario: 'OP-13 blue-chip ตลาดรอง', margin: -40, conf: '❌ ขาดทุน' },
  { scenario: 'OP-15 JP ตลาดรอง 1 กล่อง', margin: -43, conf: '❌ ขาดทุน' },
];

// ============================================================
// 14) PULL RATE by rarity (1 ใน N ซอง, log scale) — ⚠️ ตัวเลขชุมชน Bandai ไม่ประกาศ
// ============================================================
export const PULL = [
  { rarity: 'Rare (R)', oneIn: 1, note: 'การันตี ≥1/ซอง' },
  { rarity: 'Super Rare (SR)', oneIn: 2.5, note: '1 ใน 2–3 ซอง' },
  { rarity: 'Secret Rare (SEC)', oneIn: 24, note: '~1/กล่อง' },
  { rarity: 'Special (SP/DON)', oneIn: 216, note: '1 ใน 6–12 กล่อง' },
  { rarity: 'Manga Rare (MR)', oneIn: 1000, note: '1 ใน 500–1,500 ซอง ⭐' },
];

// คุ้มไหม: เปิดหา MR เอง vs ซื้อ single
export const MR_COST = {
  openToPull: [95000, 280000], // ฿ ค่าเปิดซองคาดหวังได้ MR 1 ใบ
  buySingle: 16000, // ฿ ซื้อ Manga Shanks ~$500 ตรงๆ
};

// ============================================================
// 15) STRATEGY comparison (3 กลยุทธ์หลัก)
// ============================================================
export const STRATEGIES = [
  {
    name: 'Carton / Sealed', emoji: '📦', profit: 'กลาง–สูง', risk: 'กลาง', beginner: '✅ เหมาะสุด',
    rule: 'เลือกชุดแรก/chase แข็ง, กระจายชุด, อย่าซื้อตอนพีค',
    evidence: 'OP-01 ~5–15× · OP-02 ~2.4× · OP-03 ~2.2×',
  },
  {
    name: 'ส่งเกรด PSA', emoji: '🏆', profit: 'มีเงื่อนไข', risk: 'กลาง–สูง', beginner: '⚠️ ทำเสริม',
    rule: 'กฎ 3–4×: ส่งเฉพาะใบที่คาด PSA10 ≥ 3–4× ของต้นทุนเกรดรวม',
    evidence: 'PSA10 ขาย ~2–6× ของ raw · เกรด 9 ต่ำกว่า 10 ~30–60%',
  },
  {
    name: 'จุ่ม (Lucky Dip)', emoji: '🎰', profit: 'มาร์จิ้นร้าน', risk: '🔴 สูงสุด (กฎหมาย)', beginner: '❌ ไม่แนะนำ',
    rule: 'พ.ร.บ.พนัน 2478 ต้องมีใบอนุญาต (บัญชี ก / เสี่ยงโชค) — ปรึกษาทนายก่อน',
    evidence: 'ผู้จัดไม่มีใบอนุญาต = จำคุก 3 ด.–3 ปี + ปรับ 500–5,000 ฿ (ม.12) · ผู้เล่น ≤1 ปี / ปรับ ≤1,000 ฿ (ม.9)',
  },
];

// ============================================================
// 16) SPECULATION types — ช่วงผลตอบแทน (% floating bar)
// ============================================================
export const SPEC_TYPES = [
  { type: 'Short Flip (วัน–2 สัปดาห์)', range: [-30, 50], capital: '3–15k' },
  { type: 'Mid Swing (1–4 เดือน)', range: [15, 60], capital: '15–80k' },
];
export const LONG_HOLD = { label: 'Long Hold (6 ด.–3 ปี)', note: 'blue-chip OP-01 ~5–15× · OP-13 box $157→$519', capital: '20–200k+' };

// 3-bucket risk allocation (opinion)
export const BUCKETS = [
  { name: 'Core Hold (blue-chip)', pct: 55, color: '#16a34a' },
  { name: 'Swing / Tactical', pct: 30, color: '#f59e0b' },
  { name: 'Cash (รอจังหวะ)', pct: 15, color: '#3b82f6' },
];

// ============================================================
// 17) INVESTMENT comparison — OP TCG vs สินทรัพย์อื่น (เชิงคุณภาพ)
// ⚠️ อิงข้อมูล Pokémon/MTG ไม่มีตัวเลขเฉพาะ OP TCG
// ============================================================
export const INVEST = [
  { dim: 'ผลตอบแทนยั่งยืน', tcg: 'ไม่แน่นอน (boom/bust)', stock: '~10%/ปี', gold: 'ตามเงินเฟ้อ', crypto: 'ผันผวนสูง' },
  { dim: 'ความผันผวน', tcg: 'สูงมาก (~31%/ปี)', stock: 'กลาง', gold: 'ต่ำ–กลาง', crypto: 'สูงมาก' },
  { dim: 'สภาพคล่อง', tcg: 'ต่ำ (หาคนซื้อช้า)', stock: 'สูงมาก', gold: 'สูง', crypto: 'สูง' },
  { dim: 'ค่าธรรมเนียมขาย', tcg: 'สูง 13–22%', stock: '~0%', gold: 'ต่ำ', crypto: '<1%' },
  { dim: 'กระแสเงินสด', tcg: '❌ ไม่มี', stock: '✅ ปันผล', gold: '❌', crypto: '❌' },
];
export const INVEST_RETURNS = {
  boom: 'Pokémon +3,821% (2004→2025) · การ์ดเฉลี่ย +46%/ปี ช่วงบูม',
  bust: 'พอร์ต Pokémon −4.72%/ปี (2021–23) · Charizard 1st-ed PSA10 พีค ~$420k (2021) → ย่อ ~$180–300k (2023) ราว −40–55% (ก่อนทำสถิติใหม่ $550k ปลายปี 2025)',
  rule: 'นักวางแผนการเงินแนะนำ: ของสะสม ≤5% ของพอร์ต (สูงสุด 10%) ใช้เงินเย็นเท่านั้น',
};

// ============================================================
// 18) OP-13 price run-up (USD) — pump & fade
// ============================================================
export const OP13_RUN = [
  { t: 'ต้น พ.ย. 25', usd: 157 },
  { t: '30 พ.ย. 25', usd: 231 },
  { t: '31 ธ.ค. 25', usd: 280 },
  { t: 'ม.ค. 26', usd: 519 },
  { t: 'พีค ~ก.พ.', usd: 700 },
  { t: 'พ.ค. 26', usd: 470 },
];

// ============================================================
// 19) BUDGET tiers
// ============================================================
export const BUDGET = [
  {
    tier: '< 20,000 ฿', goal: 'เรียนรู้', emoji: '🌱',
    todo: ['booster box เดี่ยว 1–2 กล่อง (chase แข็ง) เก็บ sealed', 'เปิดบางส่วนหัดดูสภาพ + ขาย single', 'ลองเกรด 1–2 ใบ (CardKub Regular 3,800 ฿) ตามกฎ 3–4×'],
    avoid: 'ซื้อ carton เต็มลัง / เปิดบูธจุ่ม / ทุ่มชุดเดียว',
  },
  {
    tier: '20,000–100,000 ฿', goal: 'สร้างพอร์ต sealed', emoji: '📈',
    todo: ['carton/case ชุดต้นๆ หรือ chase แข็ง กระจาย 2–3 ชุด', 'เปิดบางส่วนทำ single + เกรดใบที่คุ้ม', 'group submission ผ่าน CardKub แชร์ค่าส่ง'],
    avoid: 'แช่เงินชุดเดียว / ซื้อตอนดัชนีพีค / บูธจุ่มไม่มีใบอนุญาต',
  },
  {
    tier: '> 100,000 ฿', goal: 'พอร์ตหลายกลยุทธ์', emoji: '💼',
    todo: ['พอร์ต sealed หลายชุด + คลังการ์ด graded ใบแพง', 'ส่งเกรดเป็นล็อตผ่าน PSA/CGC ฮ่องกง (เลี่ยงศุลกากร US)', 'เลือก service ตามใบ (PSA = สภาพคล่อง / CGC flat $20 unlimited)'],
    avoid: 'จุ่ม/ไลฟ์ไม่มีใบอนุญาต / all-in ตอนตลาดพีค',
  },
];

// ============================================================
// 20) SET release timeline (EN)
// ============================================================
export const TIMELINE = [
  { code: 'OP-01', name: 'Romance Dawn', date: 'ธ.ค. 2022' },
  { code: 'OP-05', name: 'Awakening of the New Era', date: '2023–24' },
  { code: 'OP-09', name: 'Emperors in the New World', date: '2025' },
  { code: 'OP-12', name: 'Legacy of the Master', date: 'ส.ค. 2025' },
  { code: 'OP-13', name: 'Carrying on His Will', date: 'พ.ย. 2025' },
  { code: 'OP-14', name: "The Azure Sea's Seven", date: 'ม.ค. 2026' },
  { code: 'OP-15', name: "Adventure on Kami's Island", date: 'เม.ย. 2026' },
  { code: 'OP-16', name: 'The Time of Battle', date: 'มิ.ย. 2026' },
  { code: 'OP-17', name: "The World's Strongest Warriors (ชื่อคาด)", date: 'ส.ค. 2026 (คาด) ⭐' },
];

// ============================================================
// 21) OTHER CARD MARKETS — OP TCG vs Pokémon / MTG / Sports / Lorcana
// ⚠️ ตัวเลขตลาดรวมประเมินยาก อ่านเป็น "ช่วง"
// ============================================================
export const MARKET_SIZE = [
  { game: 'Sports (รวม)', usd: 9.21, conf: '⚠️' },
  { game: 'Pokémon', usd: 2.9, conf: '⚠️' },
  { game: 'Bandai card (รวม OP)', usd: 1.99, conf: '⚠️' },
  { game: 'MTG', usd: 1.72, conf: '✅' },
  { game: 'OP TCG (เดี่ยว)', usd: 0.17, conf: '⚠️' },
];

export const TOP_CARD = [
  { market: 'Pokémon · Pikachu Illustrator', usd: 16490000 },
  { market: 'Baseball · Mantle 1952', usd: 12600000 },
  { market: 'MTG · Black Lotus Alpha', usd: 3000000 },
  { market: 'Soccer · Messi 2004-05', usd: 1500000 },
  { market: 'OP TCG · Luffy OP13-118', usd: 24100 },
  { market: 'Lorcana', usd: 1000 },
];

export const MARKET_AGE = [
  { game: 'Baseball', years: 70 },
  { game: 'Soccer', years: 60 },
  { game: 'MTG', years: 32 },
  { game: 'Pokémon', years: 30 },
  { game: 'OP TCG', years: 4 },
  { game: 'Lorcana', years: 3 },
];

export const MARKET_COMPARE = [
  { game: '🟡 Pokémon', supply: '❌ ไม่มี', ipEnds: '❌ อมตะ', cycle: 'ปรับฐาน', crash: '2020-21: +350% → −77%' },
  { game: '🔵 MTG', supply: '✅ Reserved List', ipEnds: '❌ อมตะ', cycle: 'บูม +60%', crash: 'Chronicles: $50 → $2' },
  { game: '⚾ Baseball', supply: '✅ vintage', ipEnds: '❌ กีฬาจริง', cycle: 'ฟื้นช้า', crash: '2021: +300-1500% → −50-80%' },
  { game: '⚽ Soccer', supply: '✅ vintage', ipEnds: '❌ กีฬาจริง', cycle: 'โต (World Cup)', crash: 'ตาม sports 2021' },
  { game: '🏰 Lorcana', supply: '❌ ไม่มี', ipEnds: '❌ Disney', cycle: 'normalizing', crash: 'speculator ถอน 2025' },
  { game: '🏴‍☠️ OP TCG', supply: '❌ ไม่มี', ipEnds: '🔴 จะจบ', cycle: 'Distribution', crash: 'กำลังทดสอบ (ยังไม่ครบ 1 รอบ)' },
];

// ความน่าลงทุนสำหรับคนไทย (OPINION ไม่ใช่คำแนะนำการเงิน)
export const INVEST_RANK = [
  { market: 'OP TCG blue-chip (sealed OP-01, MR PSA10)', stars: 3, why: 'เข้าถึงได้ + scene ไทยแข็ง · แต่ไม่มี Reserved List, IP จะจบ' },
  { market: 'Soccer cards (Messi/Mbappe PSA)', stars: 3, why: 'IP จริง + World Cup 2026 catalyst · liquidity ไทยต่ำ' },
  { market: 'Pokémon vintage', stars: 2, why: 'IP อมตะ แต่ทุนสูงเกินงบส่วนใหญ่' },
  { market: 'MTG Reserved List', stars: 2, why: 'ค้ำราคาดี แต่ liquidity ไทยต่ำมาก' },
  { market: 'Lorcana / Baseball vintage', stars: 1, why: 'ตลาดไทยเกือบไม่มี / ไม่คุ้น' },
  { market: 'OP TCG flip TR/SP ชุดใหม่', stars: 1, why: 'เสี่ยงสูงมาก −30-50% ใน 4-8 สัปดาห์' },
];

// แนวทางกระจายพอร์ตข้ามตลาด (OPINION)
export const CROSS_PORTFOLIO = [
  { name: 'Core OP TCG (blue-chip)', pct: 45, color: '#dc2626' },
  { name: 'Cash (รอผล OP-17)', pct: 35, color: '#3b82f6' },
  { name: 'Soccer PSA10 (World Cup)', pct: 15, color: '#16a34a' },
  { name: 'อื่นๆ', pct: 5, color: '#94a3b8' },
];

export const sourceNotes = [
  'บทวิเคราะห์ฟองสบู่ OP TCG (กลางปี 2026)',
  'ตลาด OP TCG ต่างประเทศ — เทียบรายภูมิภาค (มิ.ย. 2026)',
  'ราคาหิ้ว OP TCG รายประเทศ + ความคุ้มค่า (มิ.ย. 2026)',
  'ค่าเกรด PSA-CGC และ ภาษีนำเข้า Carton - OP TCG',
  'Pull Rate อัตราดรอป OP TCG',
  'Playbook เก็งกำไร OP TCG (มิ.ย. 2026)',
  'เทียบตลาดการ์ดอื่น vs OP TCG',
];
