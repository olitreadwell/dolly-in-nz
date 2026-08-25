import { expect, test } from '@playwright/test';

test('homepage renders the memorial', async ({ page }) => {
  await page.goto('/dolly-in-welly/');
  await expect(page.getByRole('heading', { name: 'The wind keeps her songs.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Read her story' })).toBeVisible();
  await expect(page.getByText('She never played here.')).toBeVisible();
  const heroImage = page.getByRole('img', { name: 'Portrait of Dolly Parton' });
  await expect(heroImage).toBeVisible();
  await expect
    .poll(() => heroImage.evaluate((img) => img.naturalWidth))
    .toBeGreaterThan(0);
  await page.locator('#gallery').scrollIntoViewIfNeeded();
  const galleryImage = page.getByRole('img', { name: 'Dolly Parton in 2023' });
  await expect(galleryImage).toBeVisible();
  await expect
    .poll(() => galleryImage.evaluate((img) => img.naturalWidth))
    .toBeGreaterThan(0);
});
