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