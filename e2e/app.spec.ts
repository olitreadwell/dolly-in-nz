import { expect, test } from '@playwright/test';

test('homepage renders the memorial', async ({ page }) => {
  await page.goto('/the-wind-keeps-her-songs/');
  await expect(page.getByRole('heading', { name: 'The wind keeps her songs.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Read her story' })).toBeVisible();
  await expect(page.getByText('One night in Aotearoa.')).toBeVisible();
  const heroImage = page.getByRole('img', { name: 'Portrait of Dolly Parton' });
  await expect(heroImage).toBeVisible();
  await expect.poll(() => heroImage.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
  await page.locator('#gallery').scrollIntoViewIfNeeded();
  const galleryImage = page.getByRole('img', { name: 'Dolly Parton in 2023' });
  await expect(galleryImage).toBeVisible();
  await expect.poll(() => galleryImage.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
});

test('mobile menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/the-wind-keeps-her-songs/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  const wellingtonLink = page.getByRole('link', { name: 'Wellington', exact: true });
  await expect(wellingtonLink).toBeVisible();
  await wellingtonLink.click();
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
  await expect(wellingtonLink).toBeHidden();
});
