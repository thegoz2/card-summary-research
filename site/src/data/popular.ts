// ความนิยม "ตัวละคร" (ไม่ใช่การ์ด) ทั้ง 2 โปรเจกต์
// Disney = มีตัวเลข merch/franchise จริงบางตัว (จากโน้ต) · ที่เหลือ + One Piece = เชิงคุณภาพ
// (ลำดับเป๊ะยังไม่ยืนยัน — ใช้ดูทิศทางว่าตัวไหน "ดัง" = การ์ดมีดีมานด์)
export interface PopChar {
  project: 'optcg' | 'lorcana';
  name: string;
  badge: string;
  metric?: string;
  momentum?: string;
  note: string;
  conf: '✅' | '⚠️';
  pop: number;
}

export const CHARS: PopChar[] = [
  // ===================== One Piece =====================
  { project: 'optcg', name: 'Luffy (ลูฟี่)', badge: 'ตัวเอก #1', metric: 'ดันราคาสูงสุด', note: 'Manga Rare แพงสุด · ถูกเกรดมากสุด (top-3 โลก)', conf: '✅', pop: 100 },
  { project: 'optcg', name: 'Zoro (โซโร)', badge: 'ตัวหลัก', note: 'นิยมสูงมาก · chase แข็ง', conf: '✅', pop: 90 },
  { project: 'optcg', name: 'Shanks (แชงคูส)', badge: 'Yonko', note: 'การ์ดชุดแรก · Manga Parallel แพง', conf: '✅', pop: 86 },
  { project: 'optcg', name: 'Ace (เอส)', badge: 'ตัวดัง', note: 'ฉากตายในตำนาน · chase แข็งข้ามชุด', conf: '✅', pop: 84 },
  { project: 'optcg', name: 'Boa Hancock', badge: 'waifu ⭐', note: 'นางงามโลก · นิยมสูงสุดสายผู้หญิง', conf: '✅', pop: 80 },
  { project: 'optcg', name: 'Law (ลอว์)', badge: 'ตัวหลัก', note: 'Leader นิยม (เล่นได้) · แกว่งตาม meta', conf: '✅', pop: 78 },
  { project: 'optcg', name: 'Sanji (ซันจิ)', badge: 'ตัวหลัก', note: 'แกนทีม Straw Hat', conf: '✅', pop: 74 },
  { project: 'optcg', name: 'Katakuri', badge: 'นิยมสูง', note: 'แฟนรัก (ดวล Luffy ในตำนาน)', conf: '✅', pop: 72 },
  { project: 'optcg', name: 'Whitebeard (หนวดขาว)', badge: 'Legend', note: 'อมตะในใจแฟน (ฉากตาย Marineford)', conf: '✅', pop: 70 },
  { project: 'optcg', name: 'Yamato', badge: 'waifu', note: 'นิยมยุค Wano · การ์ดมีดีมานด์', conf: '⚠️', pop: 66 },
  { project: 'optcg', name: 'Nico Robin', badge: 'ตัวหลัก (waifu)', note: 'แกนทีม + นิยมสายผู้หญิง', conf: '✅', pop: 64 },
  { project: 'optcg', name: 'Mihawk', badge: 'ดาบอันดับ 1', note: 'ตัวละครเท่ · นิยมสูง', conf: '✅', pop: 63 },
  { project: 'optcg', name: 'Doflamingo', badge: 'วายร้ายนิยม', note: 'วายร้ายระดับท็อป', conf: '✅', pop: 62 },
  { project: 'optcg', name: 'Sakazuki / Kuzan / Borsalino', badge: 'Admiral', momentum: 'Super Alt-Art OP-16 (พุ่งวันแรก)', note: '3 ใบ Super Alt-Art ของ OP-16 (ธีม Paramount War)', conf: '✅', pop: 60 },
  { project: 'optcg', name: 'Uta', badge: 'FILM RED', momentum: 'หนัง', note: 'การ์ด/promo นิยมตามหนัง', conf: '✅', pop: 58 },
  { project: 'optcg', name: 'Gol D. Roger', badge: 'Legend', note: 'ราชาโจรสลัด · สะสมล้วน', conf: '✅', pop: 56 },
  { project: 'optcg', name: 'Sabo (ซาโบ)', badge: 'ตัวรอง', note: 'chase รองลงมา', conf: '⚠️', pop: 55 },
  { project: 'optcg', name: 'Enel', badge: 'วายร้าย', momentum: 'Manga Rare OP-15', note: 'การ์ด Manga Rare แพง', conf: '✅', pop: 54 },
  { project: 'optcg', name: 'Kaido', badge: 'Yonko', note: 'สัตว์ร้ายที่สุด', conf: '✅', pop: 52 },
  { project: 'optcg', name: 'Garp', badge: 'Legend (นาวี)', note: 'ปู่ของ Luffy · นิยม', conf: '⚠️', pop: 50 },
  { project: 'optcg', name: 'Crocodile', badge: 'อดีต Shichibukai', note: 'วายร้ายคลาสสิก', conf: '⚠️', pop: 48 },
  { project: 'optcg', name: 'Nami (นามิ)', badge: 'waifu', note: 'Alt-Art นิยม (waifu premium)', conf: '✅', pop: 47 },
  { project: 'optcg', name: 'Big Mom', badge: 'Yonko', note: 'วายร้ายหญิง', conf: '⚠️', pop: 44 },
  { project: 'optcg', name: 'Eustass Kid', badge: 'Worst Gen', note: 'คู่แข่ง Luffy', conf: '⚠️', pop: 42 },
  { project: 'optcg', name: 'Jinbe / Brook / Franky / Usopp', badge: 'crew', note: 'ลูกเรือ Straw Hat (นิยมรองจากแกนหลัก)', conf: '⚠️', pop: 38 },

  // ===================== Disney / Lorcana =====================
  { project: 'lorcana', name: 'Mickey & Friends', badge: 'เรือธง', metric: 'merch ~$3B/ปี · franchise $61.2B สะสม', momentum: 'ฐานแข็ง (อมตะ)', note: 'การ์ดมูลค่าสูงสุดของ Lorcana', conf: '✅', pop: 100 },
  { project: 'lorcana', name: 'Stitch', badge: 'พุ่งแรง 🚀', metric: 'merch ~$4B FY2025 (+54% YoY)', momentum: '🚀 catalyst #1 2025–26 (หนัง $1B+)', note: 'กำลังแทน Mickey บน national tour', conf: '✅', pop: 96 },
  { project: 'lorcana', name: 'Elsa (Frozen)', badge: 'เจ้าหญิง S', metric: 'franchise $13.9B', momentum: 'Frozen 3 (พ.ย. 2027)', note: 'anchor นิ่งสุดของ Lorcana', conf: '✅', pop: 93 },
  { project: 'lorcana', name: 'Moana', badge: 'เจ้าหญิง S', momentum: '🚀 หนัง live-action 10 ก.ค. 2026', note: 'การ์ด Iconic กำลังขึ้น', conf: '✅', pop: 90 },
  { project: 'lorcana', name: 'Mufasa / Simba (Lion King)', badge: 'classic ⭐', momentum: 'Mufasa (หนัง 2024)', note: 'แฟรนไชส์ระดับท็อป', conf: '✅', pop: 85 },
  { project: 'lorcana', name: 'Ariel (Little Mermaid)', badge: 'เจ้าหญิง S', metric: 'ขายดี Amazon', momentum: 'live-action', note: 'Iconic ราคาสูง', conf: '✅', pop: 84 },
  { project: 'lorcana', name: 'Minnie Mouse', badge: 'เรือธง', note: 'Iconic ขึ้นเร็ว (~½ ของ Mickey)', conf: '✅', pop: 82 },
  { project: 'lorcana', name: 'Maleficent', badge: 'วายร้าย #1', metric: 'Ranker #1', momentum: 'Halloween ขายหมดเร็ว', note: 'ยังไม่มีการ์ด top-value = upside', conf: '✅', pop: 80 },
  { project: 'lorcana', name: 'Buzz / Woody (Toy Story)', badge: 'Pixar', metric: 'franchise $16B', momentum: 'Pixar เข้าเกม (Wilds Unknown พ.ค. 2026)', note: 'Buzz Iconic raw ~$3,500 · PSA10 ~$16k (⚠️ ฟองสบู่ พุ่งแรง)', conf: '✅', pop: 78 },
  { project: 'lorcana', name: 'Belle (Beauty & Beast)', badge: 'เจ้าหญิง A', metric: 'fan-poll #1 บ่อย', momentum: '35 ปี (2026)', note: '', conf: '✅', pop: 76 },
  { project: 'lorcana', name: 'Scar', badge: 'วายร้าย #2', metric: 'Google Trends #1', momentum: 'halo Mufasa', note: 'ดีมานด์วายร้ายพิสูจน์แล้ว', conf: '✅', pop: 74 },
  { project: 'lorcana', name: 'Anna (Frozen)', badge: 'เจ้าหญิง', momentum: 'Frozen 3 (2027)', note: 'ราคา ~1/15 ของ Elsa', conf: '⚠️', pop: 73 },
  { project: 'lorcana', name: 'Ursula', badge: 'วายร้าย #3', momentum: 'halo Little Mermaid', note: 'ราชินีวายร้าย', conf: '✅', pop: 72 },
  { project: 'lorcana', name: 'Cinderella', badge: 'เจ้าหญิง A', metric: 'YouGov #1 (ชอบสุด)', note: 'การ์ด meta นิยม', conf: '✅', pop: 71 },
  { project: 'lorcana', name: 'Rapunzel (Tangled)', badge: 'เจ้าหญิง A', note: 'การ์ด promo แพง (PSA10 ~$5–8k)', conf: '✅', pop: 70 },
  { project: 'lorcana', name: 'Sulley & Mike (Monsters Inc)', badge: 'Pixar', momentum: 'ชุด Attack of the Vine (ก.ค. 2026)', note: 'Pixar รุ่นใหม่', conf: '✅', pop: 69 },
  { project: 'lorcana', name: 'Jasmine (Aladdin)', badge: 'เจ้าหญิง A', note: '', conf: '✅', pop: 68 },
  { project: 'lorcana', name: 'Donald Duck / Goofy', badge: 'classic', note: 'กลุ่ม Mickey & Friends', conf: '⚠️', pop: 67 },
  { project: 'lorcana', name: 'Jafar', badge: 'วายร้าย', momentum: 'ชุด Reign of Jafar (2025)', note: 'มีชุดของตัวเอง', conf: '✅', pop: 66 },
  { project: 'lorcana', name: 'Merida (Brave)', badge: 'Pixar/เจ้าหญิง', momentum: 'Wilds Unknown (พ.ค. 2026)', note: 'Iconic (⚠️ pop บาง)', conf: '⚠️', pop: 65 },
  { project: 'lorcana', name: 'Pooh & Friends', badge: 'legacy', metric: 'franchise $50.2B', momentum: 'Quest ต.ค. 2026 · 🔻 จาง (−12%/5 ปี)', note: 'สะสมเก่า (เฟ้อ) ไม่ใช่ฮอตตอนนี้', conf: '⚠️', pop: 64 },
  { project: 'lorcana', name: 'Miguel (Coco)', badge: 'Pixar', momentum: 'ชุด Hyperia City (ต.ค. 2026)', note: 'Pixar รุ่นใหม่', conf: '✅', pop: 63 },
  { project: 'lorcana', name: 'Maui (Moana)', badge: 'asymmetric 🔥', momentum: 'หนัง Moana ก.ค. 2026', note: '🔥 ดังแต่การ์ดยังถูก (~$20) = upside', conf: '⚠️', pop: 62 },
  { project: 'lorcana', name: 'Tinker Bell / Peter Pan', badge: 'classic', note: 'แบรนด์คลาสสิก', conf: '⚠️', pop: 61 },
  { project: 'lorcana', name: 'Hades', badge: 'วายร้าย', note: 'Iconic วายร้ายตัวแรก', conf: '✅', pop: 60 },
  { project: 'lorcana', name: 'Aladdin / Genie', badge: 'classic', note: '', conf: '⚠️', pop: 58 },
  { project: 'lorcana', name: 'Tiana (Princess & Frog)', badge: 'เจ้าหญิง', note: '', conf: '⚠️', pop: 56 },
  { project: 'lorcana', name: 'Olaf (Frozen)', badge: 'มาสคอต', momentum: 'Frozen 3', note: 'ตัวเสริมขายดี', conf: '⚠️', pop: 55 },
  { project: 'lorcana', name: 'Pocahontas', badge: 'เจ้าหญิง C', note: 'มี Iconic แต่ "least-wanted"', conf: '✅', pop: 54 },
  { project: 'lorcana', name: 'Cruella', badge: 'วายร้าย', momentum: '101 Dalmatians 65 ปี (2026)', note: '', conf: '⚠️', pop: 52 },
  { project: 'lorcana', name: 'Mr. Incredible (Incredibles)', badge: 'Pixar', momentum: 'Wilds Unknown', note: '', conf: '⚠️', pop: 51 },
  { project: 'lorcana', name: 'Lightning McQueen (Cars)', badge: 'Pixar', metric: 'franchise $21.5B', momentum: 'ไม่มี catalyst หนังใกล้ๆ', note: 'merch เยอะแต่การ์ดไม่ขยับ', conf: '⚠️', pop: 50 },
  { project: 'lorcana', name: 'Mulan', badge: 'เจ้าหญิง B', momentum: '⚠️ live-action แป้ก', note: 'อาจกดดีมานด์การ์ด', conf: '⚠️', pop: 48 },
  { project: 'lorcana', name: 'Snow White', badge: 'เจ้าหญิง B', momentum: '⚠️ live-action แป้ก', note: 'legacy แข็งแต่ momentum ลบ', conf: '⚠️', pop: 46 },
  { project: 'lorcana', name: 'Captain Hook / Gaston / Evil Queen', badge: 'วายร้ายรอง', note: 'วายร้ายระดับรอง', conf: '⚠️', pop: 42 },
];
