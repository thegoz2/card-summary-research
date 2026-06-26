// ความนิยม "ตัวละคร" (ไม่ใช่การ์ด) ทั้ง 2 โปรเจกต์ — รวบรวมจากโน้ตในคลัง
// Disney = มีตัวเลข merch/franchise จริง · One Piece = เชิงคุณภาพ (ตัวหลัก/ตัวรอง — ลำดับเป๊ะยังไม่ยืนยัน)
export interface PopChar {
  project: 'optcg' | 'lorcana';
  name: string;
  badge: string; // tier / role
  metric?: string; // ตัวเลขความนิยมหลัก
  momentum?: string; // catalyst / เทรนด์
  note: string;
  conf: '✅' | '⚠️';
  pop: number; // คะแนนไว้เรียงลำดับ
}

export const CHARS: PopChar[] = [
  // ---------- One Piece (เชิงคุณภาพ) ----------
  { project: 'optcg', name: 'Luffy (ลูฟี่)', badge: 'ตัวเอก #1', metric: 'ดันราคาสูงสุด', note: 'Manga Rare แพงสุด · ถูกเกรดมากสุด (top-3 ของโลก)', conf: '✅', pop: 100 },
  { project: 'optcg', name: 'Zoro (โซโร)', badge: 'ตัวหลัก', note: 'นิยมสูงมาก · chase แข็ง', conf: '✅', pop: 86 },
  { project: 'optcg', name: 'Shanks (แชงคูส)', badge: 'ตัวหลัก', note: 'การ์ดชุดแรก · Manga Parallel แพง ($3,640–6,800)', conf: '✅', pop: 82 },
  { project: 'optcg', name: 'Ace (เอส)', badge: 'ตัวหลัก', note: 'ตัวดัง (ฉากตาย) · chase แข็งข้ามชุด', conf: '✅', pop: 80 },
  { project: 'optcg', name: 'Law (ลอว์)', badge: 'ตัวหลัก', note: 'Leader นิยม (เล่นได้จริง) · ราคาแกว่งตาม meta', conf: '✅', pop: 72 },
  { project: 'optcg', name: 'Sanji (ซันจิ)', badge: 'ตัวหลัก', note: 'ตัวหลักทีม Straw Hat', conf: '✅', pop: 70 },
  { project: 'optcg', name: 'Nami (นามิ)', badge: 'waifu', note: 'Alt-Art นิยม (waifu premium)', conf: '✅', pop: 66 },
  { project: 'optcg', name: 'Sabo (ซาโบ)', badge: 'ตัวรอง', note: 'chase รองลงมา', conf: '⚠️', pop: 58 },

  // ---------- Disney / Lorcana (มีตัวเลขจริง) ----------
  { project: 'lorcana', name: 'Mickey & Friends', badge: 'เรือธง', metric: 'merch ~$9B/ปี · franchise $61.2B', momentum: 'ฐานแข็ง (อมตะ)', note: 'การ์ดมูลค่าสูงสุดของ Lorcana (Iconic ~$8,100)', conf: '✅', pop: 100 },
  { project: 'lorcana', name: 'Stitch', badge: 'พุ่งแรง 🚀', metric: 'merch >$4B/ปี (โต 10× ใน 6 ปี)', momentum: '🚀 catalyst #1 ปี 2025–26 (หนัง $1B+)', note: 'กำลังแทน Mickey บน national tour', conf: '✅', pop: 96 },
  { project: 'lorcana', name: 'Elsa (Frozen)', badge: 'เจ้าหญิง S', metric: 'franchise $13.9B', momentum: 'Frozen 3 (พ.ย. 2027)', note: 'anchor นิ่งสุดของ Lorcana', conf: '✅', pop: 92 },
  { project: 'lorcana', name: 'Moana', badge: 'เจ้าหญิง S', momentum: '🚀 หนัง live-action 10 ก.ค. 2026', note: 'การ์ด Iconic กำลังขึ้น · Maui ยังถูก = upside', conf: '✅', pop: 90 },
  { project: 'lorcana', name: 'Ariel', badge: 'เจ้าหญิง S', metric: 'ขายดี Amazon', momentum: 'live-action', note: '', conf: '✅', pop: 84 },
  { project: 'lorcana', name: 'Minnie Mouse', badge: 'เรือธง', momentum: '', note: 'Iconic ขึ้นเร็ว (~½ ของ Mickey)', conf: '✅', pop: 82 },
  { project: 'lorcana', name: 'Maleficent', badge: 'วายร้าย #1', metric: 'Ranker #1', momentum: 'Halloween ขายหมดเร็ว', note: 'ยังไม่มีการ์ด top-value = upside', conf: '✅', pop: 80 },
  { project: 'lorcana', name: 'Buzz / Woody (Toy Story)', badge: 'Pixar', metric: 'franchise $16B', momentum: 'Pixar เข้าเกม 2026', note: 'Buzz Iconic ~$3,000 (⚠️ ฟองสบู่)', conf: '✅', pop: 78 },
  { project: 'lorcana', name: 'Belle', badge: 'เจ้าหญิง A', metric: 'fan-poll #1 บ่อย', momentum: '35 ปี Beauty & the Beast (2026)', note: '', conf: '✅', pop: 76 },
  { project: 'lorcana', name: 'Scar', badge: 'วายร้าย #2', metric: 'Google Trends #1', momentum: 'halo Mufasa', note: 'ดีมานด์วายร้ายพิสูจน์แล้ว', conf: '✅', pop: 74 },
  { project: 'lorcana', name: 'Ursula', badge: 'วายร้าย #3', momentum: 'halo Little Mermaid live-action', note: '', conf: '✅', pop: 72 },
  { project: 'lorcana', name: 'Rapunzel', badge: 'เจ้าหญิง A', momentum: '', note: 'การ์ด promo แพง (PSA10 ~$5–8k)', conf: '✅', pop: 70 },
  { project: 'lorcana', name: 'Jasmine', badge: 'เจ้าหญิง A', momentum: '', note: '', conf: '✅', pop: 68 },
  { project: 'lorcana', name: 'Winnie the Pooh', badge: 'legacy', metric: 'franchise $50.2B', momentum: '🔻 จาง (−12%/5 ปี)', note: 'สะสมหลายสิบปี (เฟ้อ) ไม่ใช่ฮอตตอนนี้', conf: '⚠️', pop: 64 },
  { project: 'lorcana', name: 'Hades', badge: 'วายร้าย', momentum: '', note: 'Iconic วายร้ายตัวแรก', conf: '✅', pop: 60 },
  { project: 'lorcana', name: 'Lightning McQueen (Cars)', badge: 'Pixar', metric: 'franchise $21.5B', momentum: 'ไม่มี catalyst หนังใกล้ๆ', note: 'merch เยอะแต่การ์ดไม่ขยับ', conf: '⚠️', pop: 50 },
  { project: 'lorcana', name: 'Snow White / Mulan', badge: 'เจ้าหญิง B', momentum: '⚠️ live-action แป้ก', note: 'อาจกดดีมานด์การ์ดแม้ legacy แข็ง', conf: '⚠️', pop: 46 },
];
