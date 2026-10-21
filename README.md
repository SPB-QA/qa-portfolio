# 🧪 Software Quality Assurance (QA) Portfolio

โปรเจกต์ทดสอบระบบเว็บ E-Commerce (Automation Exercise / SauceDemo) ครอบคลุมทั้ง Manual Testing, Automated E2E Testing, และ API Testing

## 📌 Project Overview
- **Target Application:** [Automation Exercise](https://automationexercise.com/)
- **Objective:** ตรวจสอบความถูกต้องและคุณภาพของระบบ ตั้งแต่การสมัครสมาชิก, ค้นหาสินค้า, ตะกร้าสินค้า จนถึงกระบวนการชำระเงิน

## 🛠️ Tech Stack & Tools
- **Test Management:**  Google Sheets [View Test Cases Sheet](https://docs.google.com/spreadsheets/d/1ksMbMnn50Owst2NSoDv5YRVNF5XVCHiKB3KBdxl0juI/edit?usp=sharing)
- **API Testing:** Postman & Newman
- **Automated Testing:** Playwright (javaScript) 
- **Version Control:** Git & GitHub

## 📁 Repository Structure
- `docs/` : เอกสารการวางแผนการทดสอบ (Test Plan), Test Cases, และ Bug Reports
- `tests/e2e/` : สคริปต์สำหรับการทดสอบหน้าเว็บแบบอัตโนมัติ (Automated E2E)
- `tests/api/` : ชุดทดสอบ Postman Collections สำหรับ API

## 🎯 Test Strategy
- **Equivalence Partitioning (EP):** ใช้สำหรับจำแนกกลุ่มข้อมูลในฟอร์มลงทะเบียน
- **Boundary Value Analysis (BVA):** ใช้ทดสอบความถูกต้องของขอบเขตจำนวนสินค้าในตะกร้าและฟิลด์รหัสผ่าน
- **Risk-Based Testing (RBT):** เน้นความสำคัญสูงสุดที่ Core User Flow (Login -> Add to Cart -> Checkout)