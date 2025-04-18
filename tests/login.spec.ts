import { test, expect } from '@playwright/test';
import { env } from '../utils/env';

test.describe('Login UI tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(env.LOGIN_URL);
  });

  test('TC01 - Valid Login: Ensure user can log in with correct email and password.', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.fill('input[type="text"]', env.VALID_EMAIL);
    await page.waitForTimeout(800);
    await page.fill('input[type="password"]', env.VALID_PASSWORD);
    await page.waitForTimeout(700);
    await page.click('button:has-text("Sign in")');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h2:has-text("MFA Setup")')).toBeVisible({ timeout: 10000 });
  });

  test('TC02 - Invalid Password: Login attempt with correct email and incorrect password shows appropriate error.', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.fill('input[type="text"]', env.VALID_EMAIL);
    await page.waitForTimeout(1900);
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.waitForTimeout(500);
    await page.click('button:has-text("Sign in")');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('div.alert.alert-danger:has-text("Invalid username/password")')).toBeVisible({ timeout:10000 });
  });

  test('TC03 - Invalid Email: Login attempt with incorrect email and any password should fail with a generic error.', async ({ page }) => {
    await page.waitForTimeout(4500);
    await page.fill('input[type="text"]', 'one.test@email.com');
    await page.waitForTimeout(1900);
    await page.fill('input[type="password"]', env.VALID_PASSWORD);
    await page.waitForTimeout(1200);
    await page.click('button:has-text("Sign in")');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('div.form-group:has(input[type="text"])')).toHaveClass(/has-error/);
  });

  test('TC04 - Empty Fields Validation: Login should not proceed if email or password fields are blank.', async ({ page }) => {
    await page.fill('input[type="text"]', '');
    await page.fill('input[type="password"]', '');
    await page.click('button:has-text("Sign in")');
    await expect(page.locator('text=Error during login')).toBeVisible({ timeout: 5000 });
  });

  test('TC05 - Email Format Validation: Invalid email formats must be rejected with proper error.', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.fill('input[type="text"]', 'one.test@gmail');
    await page.waitForTimeout(1900);
    await page.fill('input[type="password"]', env.VALID_PASSWORD);
    await page.waitForTimeout(500);
    await page.click('button:has-text("Sign in")');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('div.form-group:has(input[type="text"])')).toHaveClass(/has-error/);
  });
});
