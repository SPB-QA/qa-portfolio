/**
@param {import('@playwright/test').Page} page
@param {string} email
@param {string} password
**/

const { expect } = require('@playwright/test');

async function globalLogin(page, email = '', password = ''){  

  //sign in user
  await page.locator('form').filter({ hasText: 'login' }).getByPlaceholder('Email Address').fill(email);
  await page.getByRole('textbox', { name: 'password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForLoadState('networkidle');
}

module.exports = { globalLogin };
