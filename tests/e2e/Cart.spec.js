import { test, expect } from '@playwright/test';
import { globalLogin } from '../utils/auth';
import { setMaxIdleHTTPParsers } from 'node:http';

test('ตรวจสอบการแสดงผลจำนวนที่เพิ่มสินค้ามายังตะกร้า', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByText('View Product').first().click();
    await page.locator('#quantity').fill('5');
    await page.getByRole('button', { name: 'Add to cart'}).click();
    await page.getByText('Continue Shopping').first().click();
    await page.getByRole('link', { name: ' Cart'}).click();

    await expect(page.locator('.table-condensed .cart_quantity').first()).toContainText('5');
    await page.locator('.cart_quantity_delete').click;
});

test('ตรวจสอบการแสดงผลจำนวนที่เพิ่มสินค้ามายืนตะกร้า - Case 2', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    //add produces in Cart section
    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByText('View Product').first().click();
    await page.locator('#quantity').fill('5');
    await page.getByRole('button', { name: 'Add to cart'}).click();
    await page.getByText('Continue Shopping').first().click();

    await page.getByRole('link', { name: ' Cart'}).click();
    await page.getByText('Proceed To Checkout').click();

    //details section
    await expect(page.getByText('Address Details')).toBeVisible();
    await page.locator('textarea[name="message"]').fill('Test');
    await page.getByRole('link', { name: 'Place Order'}).click();

    //place order section
    await page.locator('input[name="name_on_card"]').fill('Test');
    await page.locator('input[name="card_number"]').fill('123456789');
    await page.locator('input[name="cvc"]').fill('311');
    await page.getByRole('textbox', { name: 'MM' }).fill('10');
    await page.getByRole('textbox', { name: 'YYYY' }).fill('2030');
    await page.getByRole('button', { name: 'Pay and Confirm Order'}).click();
    await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link',{ name: 'Download Invoice'}).click();
    const download = await downloadPromise;
    await download.saveAs('./invoice.txt');

    await page.getByRole('link', { name: 'Continue'}).click();


});

test('ตรวจสอบการชำระเงิน กรณีไม่ได้ login เข้าสู่ระบบ', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByText('View Product').first().click();
    await page.locator('#quantity').fill('5');
    await page.getByRole('button', { name: 'Add to cart'}).click();
    await page.getByText('Continue Shopping').first().click();
    await page.getByRole('link', { name: ' Cart'}).click();

    await page.getByRole('link', { name: ' Cart'}).click();
    await page.getByText('Proceed To Checkout').click();
    await page.screenshot({ path: "screenshot.png" });
    await expect(page.getByText(' Checkout')).toBeVisible();
});

test('ตรวจสอบการลบสินค้าออกจากตะกร้า', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByText('View Product').first().click();
    await page.locator('#quantity').fill('5');
    await page.getByRole('button', { name: 'Add to cart'}).click();
    await page.getByText('Continue Shopping').first().click();
    await page.getByRole('link', { name: ' Cart'}).click();
    await page.locator('.cart_quantity_delete').click;
});