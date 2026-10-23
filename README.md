# 🧪 Software Quality Assurance (QA) Portfolio

โปรเจกต์ทดสอบระบบเว็บ E-Commerce (Automation Exercise) ครอบคลุมทั้ง Manual Testing, Automated E2E Testing และ API Testing

## 📌 Project Overview
- **Target Application:** [Automation Exercise](https://automationexercise.com/)
- **Objective:** ตรวจสอบความถูกต้องและคุณภาพของระบบแบบ End-to-End ตั้งแต่การสมัครสมาชิก, ค้นหาสินค้า, การจัดการตะกร้าสินค้า จนถึงกระบวนการชำระเงินและออกใบเสร็จ (Invoice)

## 🛠️ Tech Stack & Tools
- **Test Management:** Google Sheets & PDF Documentation ([View Test Cases Sheet](https://docs.google.com/spreadsheets/d/1ksMbMnn50Owst2NSoDv5YRVNF5XVCHiKB3KBdxl0juI/edit?usp=sharing))
- **Automated Testing:** Playwright (JavaScript)
- **API Testing:** Postman & Newman
- **Version Control:** Git & GitHub

## 📁 Repository Structure
- `docs/` : เอกสารการวางแผนการทดสอบ (Test Plan), Test Cases (PDF/Sheet) และ Bug Reports
- `tests/e2e/` : สคริปต์สำหรับการทดสอบ End-to-End แบบอัตโนมัติด้วย Playwright
- `tests/api/` : ชุดทดสอบ API (Postman Collections & Environment)

## 🎯 Test Strategy
- **Equivalence Partitioning (EP):** จำแนกกลุ่มข้อมูลสำหรับฟอร์มลงทะเบียนและระบบ Login
- **Boundary Value Analysis (BVA):** ทดสอบขอบเขตจำนวนสินค้าในตะกร้าและฟิลด์ป้อนข้อมูลต่างๆ
- **Risk-Based Testing (RBT):** มุ่งเน้นการทดสอบความถูกต้องในส่วน Core User Flow (Login ➡️ Add to Cart ➡️ Checkout ➡️ Payment ➡️ Download Invoice)

## 🚀 Getting Started (วิธีการติดตั้งและรัน)
### 1. Clone Repository
```bash
git clone [https://github.com/SPB-QA/qa-portfolio.git](https://github.com/SPB-QA/qa-portfolio.git)
cd qa-portfolio

2. Install Dependencies (ติดตั้งแพ็กเกจ)
npm install

3. Install Playwright Browsers (ติดตั้งเบราว์เซอร์)
npx playwright install

Running Tests (คำสั่งสำหรับรันการทดสอบ)
npx playwright test(รันเคสทดสอบทั้งหมด)
npx playwright test --headed(รันแบบแสดงหน้าต่างเบราว์เซอร์ (UI Mode))
npx playwright show-report(เปิดดูรายงานผลการทดสอบ (HTML Report))
