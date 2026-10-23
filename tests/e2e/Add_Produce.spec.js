import { test, expect } from '@playwright/test';
import { globalLogin } from '../utils/auth';

test('ตรวจสอบการเพิ่มสินค้าไปยังตะกร้า โดยกดปุ่ม Add to Cart', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByText('Add to cart').first().click();
    await page.getByText('Continue Shopping').first().click();

});

test('ตรวจสอบการเพิ่มสินค้าไปยังตะกร้า โดยกดปุ่ม Add to Cart จากหน้า View Produce', async ({ page }) => {
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

});


test('ตรวจสอบการเพิ่มสินค้าไปยังตะกร้า โดยกดปุ่ม Add to Cart จากหน้า View Produce', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByText('View Product').first().click();
    await page.getByRole('textbox', { name: 'Your Name'}).fill('Tester');
    await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('Tester@gmail.com');
    await page.getByPlaceholder('Add Review Here!').fill('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt dolorum debitis voluptas, consequatur ratione explicabo amet quasi quaerat, rem labore eligendi inventore perspiciatis nostrum minus obcaecati. Voluptates repellat quam voluptatem rerum corporis facere ipsam, iusto, in, maxime ullam corrupti? Sit nisi odit assumenda sunt, voluptatibus ipsam, error autem dignissimos quaerat qui voluptate officiis asperiores aspernatur modi ex sequi! Mollitia itaque et ipsa eos quod quia maxime, perspiciatis placeat facilis, modi asperiores provident unde dolores, rem officia alias fugit? Nulla fugiat maxime cumque ratione quaerat. Sit fugiat nisi magnam quis quas tenetur debitis dolor labore sed enim necessitatibus, veritatis assumenda, temporibus omnis nam, a quasi. In ut a totam quaerat. Corporis praesentium, magni necessitatibus vitae temporibus error provident ex consequuntur nam quis, earum facilis est rerum velit a aut sequi id optio! Consequuntur sapiente excepturi ad! Commodi aut dolore placeat ex ut cumque voluptatem, tempora animi quod exercitationem reprehenderit quos perspiciatis quo, accusamus, nisi eos natus eum suscipit a porro sed cupiditate beatae accusantium consequuntur! Error qui vitae itaque minus aliquid sequi, laudantium voluptatem incidunt deserunt facere possimus commodi repudiandae esse? Culpa saepe hic laboriosam ipsum autem obcaecati blanditiis aspernatur nam vel mollitia. Veniam consequatur ipsum quisquam nesciunt, reiciendis odio temporibus voluptatibus ducimus error expedita quae quod libero exercitationem ipsa mollitia, officia laborum quidem neque enim architecto. Saepe corrupti odio perspiciatis quasi cumque libero molestias consequuntur natus aut, asperiores eum beatae debitis accusamus eveniet inventore. Eos repudiandae aspernatur tenetur expedita porro rem at possimus ducimus temporibus ut, magni ipsa molestiae?');
    await page.getByRole('button', { name: 'Submit'}).click();
    await expect(page.getByText('Thank you for your review.')).toBeVisible;

});

test('ตรวจสอบการกด Subscription', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page).toHaveTitle(/Automation Exercise - Signup/);
    await globalLogin(page, 'Test01112@gmail.com', 'test123');

    await page.getByRole('link', { name: ' Products'}).click();
    await expect(page.getByText('All Products')).toBeVisible();
    await page.getByRole('textbox', { name: 'Your email address' }).fill('Tester@gmail.com');
    await page.locator('#subscribe').click();
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible;

});

