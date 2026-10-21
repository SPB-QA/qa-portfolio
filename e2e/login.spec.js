// @ts-check
import { test, expect } from '@playwright/test';

test('ตรวจสอบการสมัครสมาชิก', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.getByRole('textbox', { name: 'Name' }).fill('Test01');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('Test555@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();

  //add information detail
  await page.locator('#uniform-id_gender1').click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('xxxx1234');
  await page.locator('#days').selectOption('30');
  await page.locator('#months').selectOption('10');
  await page.locator('#years').selectOption('2003');
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('QA');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Tester');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Singapore');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('Singapore');
  await page.getByLabel('Country *').selectOption('Singapore');
  await page.getByRole('textbox', { name: 'State *' }).fill('Singapore');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Singapore');
  await page.locator('#zipcode').fill('12345');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('0123456789');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});

test('ตรวจสอบการศมัครสมาชิก กรณีไม่ได้กรอกข้อมูล validation เมื่อเข้าสู่หน้ากรอกข้อมูลเพื่มเติม', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.getByRole('textbox', { name: 'Name' }).fill('Test02');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('Test556@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByRole('button', { name: 'Create Account' }).click();

  const passwordInput = page.getByRole('textbox', { name: 'Password *' });

  const actualMessage = await passwordInput.evaluate(
    (element) => element.validationMessage
  );
  console.log('Error Message คือ:', actualMessage);
  expect(actualMessage).toBe('Please fill out this field.');
});

test('ตรวจสอบการศมัครสมาชิก กรณีกรอกข้อมูล Email แบบไม่ใส่ @', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.getByRole('textbox', { name: 'Name' }).fill('Test02');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('xxxx');
  await page.getByRole('button', { name: 'Signup' }).click();

  const emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
  await page.waitForTimeout(1000)
  const actualMessage = await emailInput.evaluate(
    (element) => element.validationMessage
  );

  console.log('Error Message คือ:', actualMessage);
 const invalidEmail = 'xxxx';

// ต่อ String ด้วยเครื่องหมาย +
expect(actualMessage).toBe("Please include an '@' in the email address. '" + invalidEmail + "' is missing an '@'.");
});

test('ตรวจสอบการศมัครสมาชิก กรณีกรอกข้อมูล Email แบบไม่ใส่ Domain', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.getByRole('textbox', { name: 'Name' }).fill('Test02');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('xxxx@');
  await page.getByRole('button', { name: 'Signup' }).click();

  const emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
  const actualMessage = await emailInput.evaluate(
    (element) => element.validationMessage
  );

  console.log('Error Message คือ:', actualMessage);

expect(actualMessage).toBe("Please enter a part following '@'." + " 'xxxx@' is incomplete.");
});

test('ตรวจสอบการศมัครสมาชิก กรณีกรอกข้อมูล Email แบบไม่ใส่ User', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.getByRole('textbox', { name: 'Name' }).fill('Test02');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();

  const emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
  const actualMessage = await emailInput.evaluate(
    (element) => element.validationMessage
  );

  console.log('Error Message คือ:', actualMessage);

expect(actualMessage).toBe("Please enter a part followed by '@'." + " '@gmail.com' is incomplete.");
});

test('ตรวจสอบการ login User เมื่อกรอกข้อมูลถูกต้องครบถ้วน', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.locator('form').filter({ hasText: 'login' }).getByPlaceholder('Email Address').fill('Test555@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).fill('xxxx1234');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('ตรวจสอบการ login User เมื่อกรอกข้อมูลผิด', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.locator('form').filter({ hasText: 'login' }).getByPlaceholder('Email Address').fill('Test0112@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).fill('xxxxxxxx');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});

test('ตรวจสอบการ logout User', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.locator('form').filter({ hasText: 'login' }).getByPlaceholder('Email Address').fill('Test555@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).fill('xxxx1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});

test('ตรวจสอบการ Delete Account', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('div').nth(2).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page).toHaveTitle(/Automation Exercise - Signup/);

  //sign in user
  await page.locator('form').filter({ hasText: 'login' }).getByPlaceholder('Email Address').fill('Test555@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).fill('xxxx1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});