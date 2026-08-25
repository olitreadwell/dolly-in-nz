import { expect, test } from '@playwright/test';

test('homepage renders and health answers', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Starter Template' })).toBeVisible();

  const health = await request.get('/health');
  expect(health.status()).toBe(200);
  await expect(health.json()).resolves.toMatchObject({ status: 'ok' });
});
