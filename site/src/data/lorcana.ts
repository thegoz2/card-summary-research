// Curated numeric data for the Disney Lorcana dashboard, seeded from the vault
// notes (adversarially verified — markers preserved: ✅ verified / ⚠️ partial / ❌ refuted).
// Core thesis: Ravensburger = ANTI-scarcity (no Reserved List) → sealed is a weak
// store of value; only scarcity-capped chase (Enchanted/Iconic/promo) holds value.

export const META = {
  asOf: '2026-06-24',
  fx: '1 USD = 33 ฿ · 1 EUR = 36 ฿ · 1 GBP = 42 ฿',
  rankNow: '#5–6',
  rankNote: 'ร่วงจาก #3 (2023-24) — หลัง MTG/Pokémon/One Piece/Yu-Gi-Oh!',
  bearishSignals: 5,
  totalSignals: 8,
  marketState: 'แยกขั้ว (chase/Iconic ขึ้น · sealed/bulk ลง)',
};

// 1) MARKET ARC (phase strip)
export const PHASE = [
  { phase: 'Launch', period: 'ส.ค. 2023', active: false },
  { phase: 'Hype', period: '2023–24', active: false },
  { phase: 'Plateau', period: 'ปลาย 2024', active: false },
  { phase: 'Decline จริง', period: '2025', active: false },
  { phase: 'Normalized + collector boom', period: '2026', active: true },
];

// 2) TCG RANK trajectory (lower = better)
export const RANK = [
  { t: '2023–24', rank: 3 },
  { t: 'ต้น 2025', rank: 5 },
  { t: 'Q4 2025', rank: 6 },
];

// 3) 8 WARNING SIGNALS (Jun 2026 read)
export type Signal = 'green' | 'yellow' | 'red';
export const SIGNALS: { id: number; name: string; status: Signal; detail: string }[] = [
  { id: 1, name: 'TCGplayer "Dropping" report โผล่', status: 'yellow', detail: 'ยังมีแต่ "Climbing" (survivorship bias) — วันที่ Dropping มา = เลี้ยว' },
  { id: 2, name: 'ยอดขายรายปี', status: 'red', detail: 'ตกปี 2025 "normalized at high level" + นักเก็งกำไรถอน' },
  { id: 3, name: 'อันดับ TCG รายไตรมาส', status: 'red', detail: '#3 → #5 → #6 (ต่ำกว่า One Piece + Gundam)' },
  { id: 4, name: 'คู่แข่งแย่ง wallet', status: 'red', detail: 'Gundam (ก.ค. 2025) เปิดเหนือ Lorcana · OP/Pokémon โต' },
  { id: 5, name: 'ปริมาณการเกรด (GemRate)', status: 'yellow', detail: '⚪ data gap — spike ใกล้พีค = distribution (ต้องจับเอง)' },
  { id: 6, name: 'reprint / set cadence', status: 'red', detail: '4 ชุด/ปี · เคส Pokémon: ข่าว reprint อย่างเดียว = −21%' },
  { id: 7, name: 'พื้นที่ shelf + ผู้เข้าแข่ง', status: 'red', detail: '2025 ร้านลดพื้นที่ + turnout ลด ⚠️' },
  { id: 8, name: 'sentiment ทั้ง hobby', status: 'yellow', detail: 'ส่วนใหญ่ "correction ไม่ใช่ crash" · แต่ Lorcana ทั้งหมด modern ไม่มี vintage floor' },
];

// 4) 3 SCENARIOS (2026→2028) — ⚠️ ความน่าจะเป็นเป็นการประเมิน
export const SCENARIOS = [
  {
    key: 'bull', tone: 'green', emoji: '🟢', name: 'Bull (โตกลับ)', prob: 25,
    chase: '+30–80%', outcome: 'กลับ top-4 · บริษัทโตกลับ',
    trigger: 'เกมดิจิทัลทางการ + หนัง (Moana/Stitch) + Pixar สำเร็จ → ดึงนักสะสมใหม่',
  },
  {
    key: 'base', tone: 'yellow', emoji: '🟡', name: 'Base (most likely)', prob: 50,
    chase: '+10–30%', outcome: 'ทรงระดับสูง · อันดับ #5–6 · sealed อ่อน',
    trigger: 'Pixar พยุงไว้ · ตลาดแยกขั้วต่อ · ไม่มีเกมดิจิทัล',
  },
  {
    key: 'bear', tone: 'red', emoji: '🔴', name: 'Bear (ฟองสบู่ Iconic แตก)', prob: 25,
    chase: '−30–60%', outcome: 'sealed หลุด MSRP · อันดับร่วงต่อ',
    trigger: 'overprint+reprint กดต่อ + speculator ถอนซ้ำ + Iconic froth แตก (Buzz pop เล็ก)',
  },
];

// 5) FORECAST chase % range per scenario (floating bar)
export const FORECAST = [
  { period: '🟢 Bull (~25%)', range: [30, 80] },
  { period: '🟡 Base (~50%)', range: [10, 30] },
  { period: '🔴 Bear (~25%)', range: [-60, -30] },
];

// 6) FIRST CHAPTER sealed box price arc (USD) — the market-arc visual
export const BOX_ARC = [
  { t: 'MSRP (ก.ย. 2023)', usd: 144 },
  { t: 'พีค (ปลาย 2023)', usd: 402 },
  { t: 'หลัง reprint (ธ.ค. 2023)', usd: 155 },
  { t: 'ปัจจุบัน (2026)', usd: 375 },
];

// 7) Cheapest accessible box by region (in-print, $/box)
export const REGION_BOX = [
  { region: '🇪🇺 EU ex-VAT (B2B)', usd: 94, note: 'ถูกสุด in-print' },
  { region: '🇬🇧 UK discounter', usd: 95, note: 'Chaos Cards' },
  { region: '🇺🇸 US case เก่า (4)', usd: 100, note: 'Troll&Toad/Game Nerdz' },
  { region: '🇹🇭 ไทย local', usd: 140, note: '฿4,200–4,900' },
  { region: '🇺🇸 US ชุดใหม่ street', usd: 165, note: 'เหนือ MSRP' },
];

// 8) US street price — % below MSRP ($143.99) by set
export const SET_DISCOUNT = [
  { set: 'Reign of Jafar', pct: 30 },
  { set: 'Azurite Sea', pct: 23 },
  { set: "Ursula's Return", pct: 23 },
  { set: "Archazia's Island", pct: 20 },
  { set: 'Whispers in the Well', pct: 16 },
];

// 9) Chase singles — RAW vs GRADED (USD, sold comp ไม่ใช่ ask)
export const SINGLES = [
  { card: 'Buzz Jungle Ranger (Iconic)', raw: 3037, graded: 8100, conf: '⚠️ ฟองสบู่' },
  { card: 'Mickey Brave Little Prince (Iconic)', raw: 2084, graded: 8100, conf: '✅ floor ระดับสูง' },
  { card: 'Stitch Rock Star (Ench)', raw: 1250, graded: 1850, conf: '✅ undervalued' },
  { card: 'Pocahontas Peacekeeper (Iconic)', raw: 948, graded: 4250, conf: '✅' },
  { card: 'Elsa Spirit of Winter (Ench)', raw: 670, graded: 4450, conf: '✅ anchor นิ่งสุด' },
  { card: 'Mickey Steamboat Pilot (Ench)', raw: 261, graded: 1418, conf: '✅' },
];

// 10) BUY / SELL targets (USD raw NM unless noted) — bucket A–C
export const WATCH = [
  { card: 'Stitch Rock Star', cur: 1250, buy: 1125, sell: 2500, bucket: 'A 🟢' },
  { card: 'Mickey Steamboat Pilot', cur: 261, buy: 240, sell: 400, bucket: 'A 🟢' },
  { card: 'Minnie Sweetheart Princess', cur: 1200, buy: 1050, sell: 1600, bucket: 'A 🟢' },
  { card: 'Hades Looking for a Deal', cur: 728, buy: 600, sell: 950, bucket: 'A 🟢' },
  { card: 'Elsa Spirit of Winter', cur: 670, buy: 500, sell: 900, bucket: 'B 🔵' },
  { card: 'Buzz Jungle Ranger', cur: 3037, buy: 1750, sell: 3000, bucket: 'C 🟡 รอย่อ' },
  { card: 'Moana Curious Explorer', cur: 940, buy: 700, sell: 1000, bucket: 'C 🟡 รอย่อ' },
  { card: 'Pocahontas Peacekeeper', cur: 948, buy: 575, sell: 950, bucket: 'C 🟡 รอย่อ' },
];

// 11) RARITY ladder — 1 in N packs (log) ⚠️ ตัวเลขชุมชน Ravensburger ไม่ประกาศ
export const RARITY = [
  { tier: 'Super Rare', oneIn: 2, note: '~50%/ซอง' },
  { tier: 'Legendary', oneIn: 5, note: '~6/กล่อง' },
  { tier: 'Epic (Fabled+)', oneIn: 16, note: '~1–2/กล่อง' },
  { tier: 'Enchanted', oneIn: 96, note: '~1/เคส (chase เดิม)' },
  { tier: 'Iconic (Fabled+)', oneIn: 1500, note: '2/ชุด · ~1/เคสหรือหายากกว่า 🔝' },
];

// 12) Enchanted %/pack by set (real box-opening studies)
export const PULL_SET = [
  { set: 'First Chapter', pct: 1.56 },
  { set: 'Fabled', pct: 2.03 },
  { set: 'Reign of Jafar', pct: 1.22 },
];

// 13) GRADING fee tiers (USD/card) — PSA Value tiers ปิด มิ.ย. 2026 (backlog)
export const GRADING = [
  { tier: 'CGC Bulk', usd: 17, co: 'CGC' },
  { tier: 'CGC Economy', usd: 20, co: 'CGC' },
  { tier: 'CGC Standard', usd: 55, co: 'CGC' },
  { tier: 'PSA Regular', usd: 79.99, co: 'PSA' },
  { tier: 'CGC Express', usd: 100, co: 'CGC' },
  { tier: 'PSA Express', usd: 149, co: 'PSA' },
  { tier: 'PSA Super Express', usd: 299, co: 'PSA' },
];
export const GRADING_NOTE = 'CGC = ตัวเลือกหลักของ Lorcana (ถูก + เกรด Lorcana เยอะสุด) · PSA10 ขายแพงกว่า CGC10 ~10–30%';

// 14) CardKub (PSA proxy, THB/card) — Lorcana ต้อง ship เอง CGC ฮ่องกง
export const CARDKUB = [
  { tier: 'Regular', baht: 3800 },
  { tier: 'Express', baht: 6400 },
  { tier: 'Super Express', baht: 13000 },
  { tier: 'Walk Through', baht: 25000 },
];

// 15) Thai landed cost per box (THB) vs local ~4,200–4,900
export const LANDED = [
  { scenario: 'TH ร้าน / Saka Saka', baht: 4550, ok: true },
  { scenario: 'นำเข้า EU bulk (case)', baht: 5250, ok: false },
  { scenario: 'นำเข้า US ชุดเก่า (case)', baht: 4950, ok: false },
  { scenario: 'นำเข้า SG', baht: 5450, ok: false },
  { scenario: 'นำเข้า US ชุดใหม่ (1 กล่อง)', baht: 6170, ok: false },
];
export const LANDED_REF = 4550;

// 16) Selling platform fees (all-in %) — domestic vs export
export const FEES = [
  { platform: 'FB กลุ่มไทย', pct: 0, scope: 'ในประเทศ' },
  { platform: 'TikTok / Lazada (TH)', pct: 3.2, scope: 'ในประเทศ' },
  { platform: 'Cardmarket (EU)', pct: 5, scope: 'ส่งออก' },
  { platform: 'CardTrader', pct: 7.5, scope: 'ส่งออก' },
  { platform: 'Shopee (TH)', pct: 8, scope: 'ในประเทศ' },
  { platform: 'eBay (ส่งออกหลัก)', pct: 18.4, scope: 'ส่งออก' },
];

// 17) Portfolio allocation (>100k THB) — OPINION
export const PORTFOLIO = [
  { name: 'Core hold (Enchanted/Iconic graded)', pct: 45, color: '#7c3aed' },
  { name: 'Cash (รอ valley/catalyst)', pct: 35, color: '#3b82f6' },
  { name: 'Diversify (เช่น OP TCG)', pct: 20, color: '#94a3b8' },
];

// 18) Speculation types
export const STRATEGIES = [
  { type: '⛔ ไม่ควรเก็ง', what: 'sealed reprint, bulk, rare ธรรมดา, chase วันเปิด', ret: 'กลับ ≤ MSRP', rule: 'ซื้อไว้เล่น/เปิดเท่านั้น' },
  { type: '⚡ Flip (วัน–สัปดาห์)', what: 'promo prerelease, chase ที่ถืออยู่', ret: 'ขายเข้า hype', rule: 'ขาย 0–3 สัปดาห์ ห้ามซื้อตาม' },
  { type: '🔄 Swing (สัปดาห์–เดือน)', what: 'single ยัง Infinity-relevant', ret: 'จับ valley wk 3–6', rule: 'ซื้อตอนย่อ ไม่ใช่วันเปิด' },
  { type: '💎 Hold (2–5 ปี)', what: 'Enchanted/Iconic ชุดต้น, promo/D23, graded, Wave One sealed', ret: 'scarcity-backed', rule: 'ซื้อของดี เกรด รอ' },
];
export const ROI_HURDLE = 'เกณฑ์คุ้ม: กำไรสุทธิ ≥ 12–15% (หลัง fee+FX+ส่ง) — ระวัง "liquidity mirage"';

// 19) Budget tiers
export const BUDGET = [
  { tier: '< 20,000 ฿', emoji: '🌱', todo: ['เปิด booster box 1 กล่องเรียนรู้ pull', 'ซื้อ Enchanted ชุดต้น 1 ใบ (เช่น Elsa Spirit of Winter)', 'หัดดูสภาพการ์ด'], avoid: 'เกรด ($30–120/ใบ), ซื้อยกเคส, ไล่ Iconic หลักหมื่นบาท' },
  { tier: '20,000–100,000 ฿', emoji: '📈', todo: ['hold-tier 60–70% (Enchanted ชุด 1 + Iconic ซื้อตอน valley)', 'เกรดเฉพาะใบที่ผ่านเกณฑ์ + group submission', 'swing ตอน valley / flip เฉพาะที่ถืออยู่'], avoid: 'ถือการ์ดเล่นข้าม rotation, ซื้อ launch spike' },
  { tier: '> 100,000 ฿', emoji: '💼', todo: ['Core graded 40–50% + Cash 30–40%', 'กระจายออก Lorcana 10–20% (เทียบ OP)', 'batch grade ลดต้นทุน/ใบ'], avoid: 'all-in ใบเดียว, เชื่อราคา ask, ไม่ track สัญญาณ' },
];

// 20) Why people lose
export const WHY_LOSE = [
  { mode: 'ซื้อ sealed หวังขึ้นแบบ Pokémon', num: 'กลับ ≤ MSRP' },
  { mode: 'ซื้อ chase วันเปิด', num: 'ซื้อ spike → ร่วง −30 ถึง −50%' },
  { mode: 'ถือการ์ด meta ข้าม rotation', num: 'ดีมานด์แข่งหาย' },
  { mode: 'เชื่อราคา ask / บล็อก affiliate', num: 'ราคาต่าง 2–4× ต่อแหล่ง → จ่ายแพง' },
  { mode: 'ลืมคิด fee+FX+ส่ง', num: '"liquidity mirage" กำไรกระดาษหาย' },
];

// 21) Rotation timeline (Core Constructed; Infinity ไม่หมุน)
export const ROTATION = [
  { round: 'รอบ 1', date: 'ก.ย. 2025 (Fabled)', out: 'Sets 1–4 ออก' },
  { round: 'รอบ 2', date: 'ก.ค. 2026 (Attack of the Vine)', out: 'Sets 5–8 ออก ⭐' },
  { round: 'รอบ 3', date: '~กลาง 2027', out: 'Sets 9–12 ออก' },
];

// 22) External catalysts timeline
export const CATALYSTS = [
  { date: 'พ.ค. 2026', event: 'Wilds Unknown (Pixar เข้า)', type: 'set' },
  { date: '10 ก.ค. 2026', event: 'หนัง Moana live-action', type: 'film' },
  { date: 'ก.ค. 2026', event: 'Attack of the Vine + rotation', type: 'set' },
  { date: '14–16 ส.ค. 2026', event: 'D23 (Lorcana Challenge)', type: 'event' },
  { date: 'ต.ค. 2026', event: 'Hyperia City (Coco)', type: 'set' },
  { date: 'Q1–Q2 2027', event: 'Onward / Lilo & Stitch (teased)', type: 'set' },
];

// 23) Lorcana vs One Piece — head-to-head (winner = OPINION)
export const VERSUS = [
  { dim: 'อายุ IP', lorcana: 'Disney/Pixar ไม่มีวันจบ', op: 'Final Saga ใกล้จบ', win: '🏰 Lorcana' },
  { dim: 'คุม supply', lorcana: 'หลวมโดยตั้งใจ (ไม่มี Reserved List)', op: 'ขาดเรื้อรัง = scarcity จริง', win: '🏴‍☠️ One Piece' },
  { dim: 'เก็ง sealed', lorcana: 'จงใจ overprint', op: 'sealed +50–300%', win: '🏴‍☠️ One Piece' },
  { dim: 'ขนาดตลาด', lorcana: 'ส่วนของ €744M (ลด 2025)', op: '~$768M FY24 (+30%)', win: '🏴‍☠️ One Piece' },
  { dim: 'liquidity/grading', lorcana: 'CGC นำ · ดี (ตะวันตก)', op: 'PSA 200,000+ ใบ ลึกทั่วโลก', win: '🏴‍☠️ One Piece' },
  { dim: 'ฐานแฟน', lorcana: 'กว้างสุด (ครอบครัว/Disney/ผู้หญิง)', op: 'อนิเมะ/ผู้เล่น เข้มข้นแต่แคบกว่า', win: '🏰 Lorcana' },
  { dim: 'จุดเข้า', lorcana: 'sealed ถูก/ง่ายกว่า', op: 'ชุดต้นแพง/หายาก', win: '🏰 Lorcana' },
  { dim: 'ตลาดไทย', lorcana: 'เพิ่งทางการ ก.ย. 2025 (Saka Saka) เล็ก', op: 'รากลึก ~60+ ร้าน', win: '🏴‍☠️ One Piece' },
];

// 24) Scarcity-capped vs elastic
export const SCARCITY = {
  capped: ['Enchanted (ไม่เคย reprint เป็น Enchanted)', 'Iconic (2/ชุด ไม่ reprint)', 'promo อีเวนต์/D23 + champion 1/1', 'First Chapter Wave One sealed (พิมพ์แรก)'],
  elastic: ['การ์ด base ธรรมดา', 'Epic (reprint ได้)', 'sealed box ชุด in-print', 'staple ที่ถูก reprint'],
};

// 25) GRADING COMPANIES — เทียบ 6 ค่าย (resale % = consensus, PARTIAL)
export const GRADERS = [
  { co: 'PSA', cheapest: 79.99, resale: 100, asia: '✅ HK', fit: 'chase แพง (gold standard)', indep: false },
  { co: 'CGC', cheapest: 17, resale: 70, asia: '✅ HK', fit: 'default ทั่วไป (ถูก+ปริมาณ)', indep: true },
  { co: 'BGS', cheapest: 14.95, resale: 50, asia: '❌', fit: 'ใบเดียว Black Label', indep: false },
  { co: 'SGC', cheapest: 15, resale: 30, asia: '❌', fit: '❌ (vintage/sports)', indep: false },
  { co: 'TAG', cheapest: 22, resale: 20, asia: '⚠️ HK/SG', fit: 'รายงาน AI objective', indep: true },
  { co: 'CCC', cheapest: 19, resale: 15, asia: '❌', fit: '❌ (EU niche)', indep: true },
];
export const GRADER_NOTE =
  'Collectors (แม่ PSA) ซื้อ SGC + BGS แล้ว = ครอง ~80% ตลาด · เหลือ CGC + TAG เป็น independent · PSA Value tier ปิด มิ.ย. 2026 → floor = Regular $79.99';

// 26) Break-even all-in cost/ใบ (USD, batch) — PSA / TAG / BGS
export const BREAKEVEN = [
  { co: 'PSA (HK/CardKub)', allin: 112, worth: 'PSA10 ≳ $400' },
  { co: 'TAG (HK/SG)', allin: 62, worth: 'TAG10 ≳ $200' },
  { co: 'BGS (SG/US)', allin: 57, worth: 'คุ้มเฉพาะ Black Label' },
];

// 27) Disney franchise — รายได้สะสม all-time ($B, legacy เฟ้อ ไม่ใช่รายปี)
export const FRANCHISE = [
  { name: 'Mickey & Friends', usd: 61.2 },
  { name: 'Winnie the Pooh', usd: 50.2 },
  { name: 'Disney Princess (รวม)', usd: 45.4 },
  { name: 'Cars (Pixar)', usd: 21.5 },
  { name: 'Toy Story (Pixar)', usd: 16 },
  { name: 'Frozen', usd: 13.9 },
];

// 28) Annual merch ($B) — demand ปัจจุบัน (สัญญาณดีสุด)
export const MERCH = [
  { name: 'Mickey & Friends', usd: 9 },
  { name: 'Stitch (FY2025, โต 10× ใน 6 ปี)', usd: 4 },
];

// 29) Asymmetric upside (ดังแต่การ์ดยังถูก + มี catalyst)
export const UPSIDE = [
  { pick: '🔥 Maui / Moana', signal: 'หนัง Moana live-action 10 ก.ค. 2026', note: 'Maui Enchanted ~$20 (ตก) = setup ดีสุด · Moana Iconic กำลังขึ้น' },
  { pick: 'Maleficent', signal: 'วายร้าย #1 (Ranker)', note: 'ยังไม่มีการ์ด top-value — ถ้าออก Enchanted/Iconic ดีมานด์แรง' },
  { pick: 'Scar / Ursula', signal: 'ดีมานด์วายร้ายพิสูจน์แล้ว (Halloween ขายหมด)', note: 'ยังไม่มี marquee chase' },
  { pick: 'Elsa / Anna', signal: 'Frozen 3 (24 พ.ย. 2027)', note: 'catalyst ระยะยาว printing ใหม่' },
];

export const sourceNotes = [
  'Disney Lorcana — ทำกำไร (ภาพรวม)',
  'เทียบค่ายตรวจเกรด (PSA-CGC-BGS-SGC-TAG-CCC) ข้อดีข้อเสีย',
  'อันดับความนิยมตัวละคร Disney + นัยต่อ Lorcana',
  'ตลาด Lorcana 2023-2026 — ราคาเริ่มฟื้นจริงไหม',
  'พยากรณ์ตลาด Lorcana 2026-2028',
  'Watchlist ราคาเป้าซื้อ-ขาย Lorcana (มิ.ย. 2026)',
  'รายชื่อชุด Lorcana + ระบบ rarity + chase cards',
  'Lorcana vs One Piece TCG — ลงทุนตัวไหน',
];
