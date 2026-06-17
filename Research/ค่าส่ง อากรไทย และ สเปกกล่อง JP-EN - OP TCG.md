---
title: ค่าส่ง, อากรไทย และ สเปกกล่อง JP/EN — OP TCG
date: 2026-06-15
tags: [research, tcg, one-piece, shipping, dhl, customs, tariff, jp-vs-en, carton]
sources:
  - https://mydhl.express.dhl/content/dam/downloads/th/en/rate-guide/service_and_rate_guide_th_en_2025.pdf.coredownload.pdf
  - https://www.customs.go.th/data_files/f95c29de15a05ea2db2db03fda1bbf23.pdf
  - https://en.onepiece-cardgame.com/topics/014.php
  - https://www.saifrtcg.com/post/one-piece-tcg-english-vs-japanese-op08-comparison
---

# ค่าส่ง, อากรไทย และ สเปกกล่อง JP/EN — OP TCG

> [!info] งานวิจัยรอบ 4 (2026-06-15) — ปิด 3 ช่องว่างสุดท้าย | ตรวจสอบ adversarial: ยืนยัน 22 / ตก 3

← กลับไป [[One Piece TCG - ทำกำไร (ภาพรวม)]] | เกี่ยวข้อง: [[ตัวแทนส่งเกรดในไทย และ ค่าส่งไป-กลับ - OP TCG]] · [[ค่าเกรด PSA-CGC และ ภาษีนำเข้า Carton - OP TCG]]

---

## 1️⃣ ค่าส่งพัสดุระหว่างประเทศจริง (DHL Express)

> [!check] ✅ ยืนยัน 3-0 จากเอกสารทางการ DHL Express Rate Guide 2025 (ไทย)

ค่าส่ง **non-document** (พัสดุการ์ด) — ราคา list ปี 2025 ต่อพัสดุ:

| น้ำหนัก | → ฮ่องกง (Zone 1) | → สหรัฐฯ (Zone 6) |
|---|---|---|
| 0.5 kg | **2,334 บาท** | **5,719 บาท** |
| 1 kg | 2,620 บาท | 6,465 บาท |
| 2 kg | 3,188 บาท | 7,949 บาท |

> [!warning] ตัวเลขนี้ยังไม่รวม
> - **ค่าน้ำมัน (fuel surcharge)** + **VAT 7%** → ราคาจ่ายจริงสูงกว่านี้พอควร
> - เป็นราคา list/walk-in (ไม่ใช่ราคา contract ที่มี account discount)
> - รีเซ็ตทุกปี — ปี 2026 อาจมีตารางใหม่

**ประกันพัสดุ (DHL Shipment Value Protection):** **2% ของมูลค่าสำแดง** (ขาออก/export) ขั้นต่ำ **450 บาท** | ขาเข้า (import) = 1% ขั้นต่ำ 450 บาท
- เช่น ส่งการ์ดมูลค่า 100,000 บาท → ค่าประกัน ~2,000 บาท

**ความเสี่ยงเอกสาร:** ถ้าเอกสาร/พิกัด/มูลค่าไม่ครบ DHL อาจแก้ข้อมูลให้ศุลกากร และมี **ค่าฝากตู้ bonded** 230 บาท/พัสดุ/วัน + 3.3 บาท/กก./วัน (เริ่มนับ 3 วันหลังของถึง)

> [!caution] ยังไม่ยืนยัน: ค่า **FedEx, EMS/ไปรษณีย์ไทย** และตัวแทน freight forwarder การ์ดมูลค่าสูงในไทย — ยังไม่มีตัวเลขอ้างอิงได้ (DHL ได้แล้วใช้เทียบฐานได้)

---

## 2️⃣ อากรขาเข้า + การประเมินมูลค่าของศุลกากรไทย

### พิกัด HS (✅ ยืนยัน 2-1)
- การ์ดเกม TCG = **HS 9504.40** (6 หลัก เป็นสากล WCO → ใช้กับไทยได้) จาก US CBP binding rulings (Pokémon/Magic = 9504.40.0000)
- ⚠️ **subheading ไทย (8-10 หลัก) และอัตราอากร MFN จริงยังไม่ยืนยัน** — ต้องเช็กใน **Thai Customs e-Tariff** (itd.customs.go.th) เอง

### FTA ญี่ปุ่น (JTEPA) — ยังตอบไม่ได้
- เอกสาร JTEPA ที่ตรวจ **ระบุแค่สินค้าเกษตร/ประมง ไม่มี 9504/การ์ด** → **ไม่ยืนยันว่าการ์ดญี่ปุ่นได้อากร 0%**
- ถ้าจะใช้สิทธิ FTA ต้องเข้าเงื่อนไข **rules of origin + Form JTEPA (CO)** — แต่ยังต้องตรวจสอบว่าการ์ดเข้าข่ายไหม

### วิธีประเมินภาษี (✅ ยืนยัน 3-0)
```
อากร = customs value (CIF) × อัตราพิกัด
CIF = ราคาของ + ประกัน + ค่าขนส่งถึงไทย
VAT 7% = 7% ของ (CIF + อากร)
```
- ใช้ **transaction value (ราคาสำแดง/ใบกำกับ)** เป็นวิธีหลัก ตาม WTO Valuation Agreement

> [!danger] ⚠️ สำแดงราคาต่ำในการ์ดแพง = เสี่ยงจริง
> - ศุลกากร **ไม่จำเป็นต้องรับราคาสำแดง** — ถ้าน่าสงสัย/ต่ำผิดปกติ จะ **ตีราคาใหม่** ตามลำดับ 6 วิธีของ WTO
> - ค่าที่ต่างจากฐานข้อมูลศุลกากร ~10% จะถูก flag + post-clearance audit
> - **สำแดงเท็จ** มีโทษตาม **Customs Act มาตรา 202** (ปรับสูงสุด 500,000 บาท)
> - 💡 อยากชัวร์ก่อนนำเข้า: ขอ **Advance Valuation Ruling (AVR)** ฟรี ตอบใน 30 วันราชการ

---

## 3️⃣ สเปกกล่อง JP vs EN + การเปลี่ยนปี 2026

### องค์ประกอบกล่อง (✅ ยืนยัน 3-0)
| | ซอง/กล่อง | การ์ด/ซอง | การ์ด/กล่อง |
|---|---|---|---|
| **JP (ญี่ปุ่น)** | 24 | 6 | **144** |
| **EN (อังกฤษ)** | 24 | 12 | **288** |

- EN ได้การ์ดต่อซองมากกว่า (12 vs 6) แต่ราคา MSRP คิดต่อซอง (~$4.49/ซอง EN) — จำนวนการ์ดต่อซองไม่ได้เป็นตัวกำหนดราคาเปรียบเทียบโดยตรง

> [!caution] ⚠️ ส่วนต่างราคา JP ถูกกว่า EN "~60%" — ตกการตรวจสอบ
> ตัวเลขยอดนิยมที่ว่า EN box ~$80–100 vs JP ~$30–35 (OP-08) **ถูก refute (0-3, 1-2)** อิงแค่บล็อกเดียว → **อย่าเชื่อตัวเลขส่วนต่างที่ระบุเป็น %** จนกว่าจะเช็ก distributor จริง
> (แหล่ง distributor ขายส่งจริง เช่น Potomac มีอยู่ แต่ตัวเลข wholesale เทียบ JP/EN ยังไม่ยืนยัน)

### การเปลี่ยนปี 2026 (✅ ยืนยัน 3-0, ทางการ Bandai)
- เดิม JP ออกก่อน EN/เอเชีย-แปซิฟิก **ได้ถึง ~3 เดือน**
- **Bandai วางขายพร้อมกันทั่วโลกตั้งแต่ 2026** — ชุดแรกที่ sync จริงคือ **OP-17 (ส.ค. 2026)**, OP-16 (~มิ.ย. 2026) แค่ลดช่องว่าง
- → **arbitrage จาก "JP ออกก่อน" จบลง** ส่วนต่าง EN premium จะแคบ (ขึ้นกับ Bandai คุม allocation EN แค่ไหน)

---

## สรุปต้นทุนแฝงที่ต้องบวกก่อนตัดสินใจส่งเกรด/นำเข้า
1. ค่าส่ง DHL (+ fuel + VAT 7%) — ฮ่องกงถูกกว่า US ~2.5 เท่า
2. ค่าประกัน 2% ของมูลค่า (ขั้นต่ำ 450 บาท)
3. ภาษีขากลับ: อากร (อัตรายังไม่ยืนยัน) + VAT 7% บน CIF+อากร
4. ความเสี่ยงศุลกากรตีราคาใหม่ถ้าสำแดงต่ำ

## คำถามที่ยังเปิดอยู่ (เหลือน้อยลง)
1. **อัตราอากร MFN จริงของไทยสำหรับ 9504.40** + JTEPA ให้ 0% ได้ไหม (ต้องเช็ก e-Tariff / ถาม shipping agent / ขอ AVR)
2. ค่า FedEx + EMS/ไปรษณีย์ไทย เทียบ DHL
3. ราคา wholesale JP vs EN ที่ยืนยันได้จาก distributor

## Sources
- [DHL Express Service & Rate Guide 2025 — Thailand (PDF)](https://mydhl.express.dhl/content/dam/downloads/th/en/rate-guide/service_and_rate_guide_th_en_2025.pdf.coredownload.pdf) (primary)
- [DHL Thailand — Shipment Protection Options](https://mydhl.express.dhl/th/th/shipment/shipment-protection-options.html) (primary)
- [Thai Customs — Advance Valuation Ruling / valuation booklet (PDF)](https://www.customs.go.th/data_files/f95c29de15a05ea2db2db03fda1bbf23.pdf) (primary)
- [WTO — Customs Valuation Agreement](https://www.wto.org/english/tratop_e/cusval_e/cusval_info_e.htm) (primary)
- [Japan Customs — JTEPA / EPA rules of origin](https://www.customs.go.jp/english/c-answer_e/keizairenkei/4014_e.htm) (primary)
- [dutiable.io — TCG HS code 9504.40](https://dutiable.io/hs-code/board-games-tabletop/trading-card-game) (secondary)
- [Tilleke & Gibbins — Customs duty / Section 202](https://www.tilleke.com/insights/self-reporting-of-unpaid-customs-duty-in-thailand/) (primary)
- [Official OP Card Game — Simultaneous worldwide release 2026](https://en.onepiece-cardgame.com/topics/014.php) (primary)
- [SNKRDUNK — Simultaneous global launch 2026](https://snkrdunk.com/en/magazine/2025/03/11/one-piece-card-game-sets-to-have-simultaneous-global-launches-starting-from-2026/) (secondary)
- [SaifrTCG — EN vs JP OP-08 box comparison](https://www.saifrtcg.com/post/one-piece-tcg-english-vs-japanese-op08-comparison) (blog; ราคาส่วนต่างถูก refute)
- [Potomac Distribution — OP TCG wholesale](https://www.potomacdist.com/one-piece-tcg-booster-starter-deck-boxes/) (primary)
