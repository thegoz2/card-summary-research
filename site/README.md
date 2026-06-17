# OP TCG Research — เว็บไซต์

เว็บอ่าน + วิเคราะห์งานวิจัย One Piece TCG จาก Obsidian vault
อ่านไฟล์ `.md` ใน `../Research` โดยตรง → **แก้ใน Obsidian เหมือนเดิม แล้วเว็บอัปเดตตาม**

- 📖 หน้าอ่านโน้ต — รองรับ `[[wikilink]]`, callout `> [!info]`, ตาราง, ค้นหา, แท็ก, backlink
- 📊 Dashboard — กราฟราคา box เทียบตลาด, ดัชนี TCGKing, การ์ดเดี่ยว RAW/GRADED, สัญญาณเตือนฟองสบู่

---

## รันในเครื่อง (local)

```bash
cd site
npm install      # ครั้งแรกครั้งเดียว
npm run dev      # เปิด http://localhost:4321
```

แก้โน้ตใน Obsidian (โฟลเดอร์ `Research/`) แล้วเว็บจะรีโหลดให้อัตโนมัติ

```bash
npm run build    # สร้างไฟล์ static ลงโฟลเดอร์ dist/ (ใช้ตอน deploy)
npm run preview  # ดูผล build ก่อน deploy
```

---

## อัปเดตข้อมูล

| อยากแก้ | แก้ที่ไหน |
|---|---|
| เนื้อหาโน้ต / เพิ่มโน้ตใหม่ | แก้/เพิ่มไฟล์ `.md` ใน `Research/` (ใน Obsidian) — เว็บดึงให้เอง |
| กราฟแนวโน้มดัชนีรายเดือน | กรอกแถวเดือนใหม่ในตาราง **📈 Log สรุป** ของโน้ต `Tracking Sheet` → เส้นกราฟต่อเอง |
| ตัวเลขราคา box / การ์ดเดี่ยว / สัญญาณ 8 ตัว | แก้ `site/src/data/market.ts` (หรือบอก Claude ให้ดึงจากโน้ตให้ใหม่) |

> หมายเหตุ: ราคาเปรียบเทียบตลาดใน Dashboard ถอดมาจากโน้ตเป็น snapshot — ตั้งใจแยกไว้ใน `market.ts`
> เพื่อความเสถียรของกราฟ ส่วนที่ผูกกับ Obsidian อัตโนมัติคือ "Log สรุป" รายเดือน

---

## Deploy แบบ private (แนะนำ: Cloudflare Pages — ฟรี + มีรหัสผ่าน)

มีระบบล็อกอินด้วยรหัสผ่าน (HTTP Basic Auth) อยู่แล้วที่ `site/functions/_middleware.js`

1. push โฟลเดอร์ `research-vault` ทั้งหมดขึ้น GitHub (private repo)
2. ไปที่ **Cloudflare Pages → Create → Connect to Git** เลือก repo นี้
3. ตั้งค่า build:
   - **Root directory:** `site`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. ไปที่ **Settings → Environment variables** เพิ่ม:
   - `AUTH_PASS` = รหัสผ่านที่ต้องการ *(จำเป็น — ใส่แล้วเว็บถึงจะล็อก)*
   - `AUTH_USER` = ชื่อผู้ใช้ *(ไม่ใส่ก็ได้ ค่าเริ่มต้น `op`)*
5. Deploy → ได้ลิงก์ `https://<ชื่อ>.pages.dev` ที่ต้องใส่รหัสผ่านก่อนเข้า

> เปลี่ยนรหัสผ่าน = แก้ค่า `AUTH_PASS` แล้ว re-deploy
> ถ้ายังไม่ตั้ง `AUTH_PASS` เว็บจะเปิดให้เข้าได้เลย (สะดวกตอนทดสอบ deploy ครั้งแรก)

### ทางเลือกอื่น
- **Cloudflare Access** (ฟรี ≤ 50 ผู้ใช้): ล็อกด้วยอีเมล/Google แทนรหัสผ่านร่วม — ตั้งใน Cloudflare Zero Trust, ไม่ต้องแก้โค้ด
- **Vercel:** deploy static ได้ แต่ระบบใส่รหัสผ่าน built-in เป็นฟีเจอร์เสียเงิน (Pro) — แนะนำ Cloudflare มากกว่าสำหรับ private ฟรี

---

## โครงสร้าง

```
research-vault/
├─ Research/                 # โน้ต Obsidian (source of truth — แก้ที่นี่)
├─ .obsidian/                # config Obsidian
└─ site/                     # เว็บ Astro
   ├─ src/
   │  ├─ pages/              # index, dashboard, notes/[...slug]
   │  ├─ layouts/Base.astro
   │  ├─ components/Header.astro
   │  ├─ lib/                # slug, wikilink/callout plugins, notes, tracking
   │  ├─ data/market.ts      # ตัวเลข Dashboard
   │  └─ styles/global.css
   ├─ functions/_middleware.js  # Basic Auth gate (Cloudflare Pages)
   └─ astro.config.mjs
```
