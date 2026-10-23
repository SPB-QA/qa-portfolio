// @ts-check

import { test, expect } from '@playwright/test';
import { globalLogin } from '../utils/auth';

test('ตรวจสอบการค้นหาสินค้า โดย Search Feild', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByRole('textbox', { name: 'search'}).fill('polo');
    await page.locator('#submit_search').click();
    await expect(page.locator('.productinfo p').first()).toContainText(/polo/i);
    // const productName = await page.locator('.productinfo p').first().textContent();
    // console.log('Product Name:', productName);
});

test('ตรวจสอบการค้นหาสินค้า โดย Search Feild กรณีกรอกตัวอักษร 250 ตัว', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByRole('textbox', { name: 'search'}).fill('Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat error animi saepe. Beatae debitis magnam consequuntur omnis voluptas, molestias minus ipsum quasi consequatur, quo fugit dolor blanditiis ut veniam rerum, eaque odio quidem aspernatur voluptates enim dolore odit vero nulla dolorem! Quae ut repellat ratione perspiciatis vero magni praesentium itaque totam architecto delectus. Distinctio accusantium, quae suscipit, architecto fugit tempore atque aspernatur animi quas optio vitae quisquam? At iusto debitis explicabo non dolore, labore inventore quaerat nemo, dolorem saepe facilis quam vitae quis eos iste! Tenetur nostrum consequuntur excepturi rem. Eligendi recusandae nobis aliquid alias, exercitationem aspernatur deleniti modi hic quibusdam voluptatem. Veniam tempore cum mollitia sapiente fuga dolore quae repudiandae earum quisquam, aliquid reprehenderit, quas nobis. Quibusdam facilis debitis totam praesentium deleniti, eaque nulla dolor, ab obcaecati incidunt exercitationem ut! Molestias labore mollitia, maiores dicta iure corporis natus quia? Ea perspiciatis eum fuga, mollitia corporis esse facilis necessitatibus quibusdam non unde? Ex asperiores eos fugiat ea quam, sit repellendus rerum dignissimos quibusdam, nam unde soluta! Numquam sapiente voluptatum natus minus aliquid soluta quod commodi, architecto nisi! Error maiores sed omnis delectus dolor? Cum quidem, architecto a nesciunt deserunt nobis doloribus libero deleniti quas atque fugit fugiat id. Aut quo nemo incidunt velit sint ad obcaecati mollitia, non ipsum assumenda debitis neque ex a ducimus perferendis totam deserunt omnis reprehenderit rerum amet? Sed laboriosam molestias reiciendis, error, architecto aspernatur quas accusantium tempora, eius itaque magni in possimus expedita impedit! Voluptatum praesentium sunt optio neque, provident itaque voluptates corrupti exercitationem nisi.');
    await page.locator('#submit_search').click();
    await expect(page.getByText('Searched Products')).toBeVisible();
});

test('ตรวจสอบการค้นหาข้อมูล โดย CATEGORY', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByRole('link', { name: ' Women' }).click();
    await page.getByRole('link', { name: 'Dress' }).click();
    await expect(page.locator('.productinfo p').first()).toContainText(/Dress/i);
});

test('ตรวจสอบการค้นหาข้อมูล โดย Brand', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByRole('link', { name: 'POLO' }).click();
    await expect(page.getByText('Polo Products')).toBeVisible();
});

test('ตรวจสอบการการทำงานของ breadcrumb', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByRole('link', { name: ' Women' }).click();
    await page.getByRole('link', { name: 'Dress' }).click();
    await page.getByRole('link', { name: 'Products', exact: true }).click();
    await expect(page.getByText('All Products')).toBeVisible();
});