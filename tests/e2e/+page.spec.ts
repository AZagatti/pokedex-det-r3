import { test, expect } from '@playwright/test';

test.describe('Pokédex', () => {
  test('should load home page', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('Pokédex');
  });

  test('should navigate to list page', async ({ page }) => {
    await page.goto('/list');
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('All Pokémon');
  });

  test('should navigate to search page', async ({ page }) => {
    await page.goto('/search');
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('Search Pokémon');
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/about');
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('About Pokédex');
  });
});


