import { describe, expect, it } from 'vitest';
import { imagesBasePath, siteBasePath } from './site';

describe('site config', () => {
  it('defaults to the GitHub Pages base path', () => {
    expect(siteBasePath).toBe('/the-wind-keeps-her-songs');
    expect(imagesBasePath).toBe('/the-wind-keeps-her-songs/images');
  });
});
