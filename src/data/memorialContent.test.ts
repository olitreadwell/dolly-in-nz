import { describe, expect, it } from 'vitest';
import {
  galleryImages,
  getMemorialImageUrl,
  firstShowCopy,
  heroCopy,
  musicSongs,
  pressArticles,
  sourceLinks,
  timelineEntries,
  tributeCards,
} from './memorialContent';

describe('memorialContent', () => {
  it('keeps hero copy short enough for the hero discipline', () => {
    const heroSubtitleWordLimit = 20;
    expect(heroCopy.subtitle.split(' ').length).toBeLessThanOrEqual(heroSubtitleWordLimit);
    expect(heroCopy.cta).not.toHaveLength(0);
  });

  it('orders timeline entries by year', () => {
    const years = timelineEntries.map((entry) => Number(entry.year));
    expect(years).toEqual([...years].sort((a, b) => a - b));
  });

  it('gives every tribute card a source url and a quote', () => {
    for (const card of tributeCards) {
      expect(card.url).toMatch(/^https:\/\//);
      expect(card.quote).toBeTruthy();
    }
  });

  it('gives every press article a source url, date and kind', () => {
    const validKinds = new Set(['article', 'audio', 'photo', 'video']);
    for (const clip of pressArticles) {
      expect(clip.url).toMatch(/^https:\/\//);
      expect(clip.date).toMatch(/^\d{1,2} [A-Z][a-z]{2} \d{4}$/);
      expect(clip.headline).not.toHaveLength(0);
      expect(clip.quote).toBeTruthy();
      expect(validKinds.has(clip.kind)).toBe(true);
    }
  });

  it('links every gallery image to its commons source', () => {
    for (const image of galleryImages) {
      expect(image.sourceUrl).toMatch(/^https:\/\/commons\.wikimedia\.org/);
      expect(image.credit).not.toHaveLength(0);
    }
  });

  it('builds basePath-prefixed image urls for static export', () => {
    expect(getMemorialImageUrl('dolly-1977.jpg')).toBe(
      '/the-wind-keeps-her-songs/images/dolly-1977.jpg'
    );
    for (const image of galleryImages) {
      expect(image.src).toMatch(/^\/the-wind-keeps-her-songs\/images\//);
    }
  });

  it('points every source link at a real url', () => {
    for (const link of sourceLinks) {
      expect(link.url).toMatch(/^https:\/\//);
    }
  });

  it('gives every music song a youtube video id', () => {
    for (const song of musicSongs) {
      expect(song.videoId).toMatch(/^[0-9A-Za-z_-]{11}$/);
      expect(song.title).not.toHaveLength(0);
    }
  });

  it('sources the first show copy', () => {
    expect(firstShowCopy.ctaHref).toMatch(/^https:\/\//);
    expect(firstShowCopy.body.length).toBeGreaterThan(0);
  });
});
