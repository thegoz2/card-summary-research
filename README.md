# card-summary-research

เว็บอ่าน + วิเคราะห์งานวิจัย **One Piece TCG (ทำกำไร)** สร้างจาก Obsidian vault ด้วย Astro

🌐 **เว็บไซต์:** https://thegoz2.github.io/card-summary-research/

- 📖 **หน้าอ่านโน้ต** — รองรับ `[[wikilink]]`, callout, ตาราง, ค้นหา, แท็ก, backlink
- 📊 **Dashboard** — กราฟดัชนี TCGKing, ราคา box เทียบตลาด/รายประเทศ, ค่าเกรด PSA/CGC, ค่าส่ง, pull rate, มาร์จิ้นนำเข้า, สัญญาณเตือนฟองสบู่, 3 ฉากทัศน์, เทียบการลงทุน ฯลฯ

## โครงสร้าง

```
Research/   # โน้ต Obsidian (source of truth — แก้ที่นี่)
site/       # เว็บ Astro (ดู site/README.md สำหรับวิธีรัน/อัปเดต)
```

## Deploy

push ขึ้น `main` แล้ว GitHub Actions (`.github/workflows/deploy.yml`) จะ build + deploy ขึ้น GitHub Pages อัตโนมัติ

> ครั้งแรกต้องเปิด Pages: **Settings → Pages → Build and deployment → Source: GitHub Actions**

รายละเอียดการพัฒนา/อัปเดตข้อมูลอยู่ใน [`site/README.md`](site/README.md)
