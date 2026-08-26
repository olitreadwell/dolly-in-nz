import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';
import {
  galleryImages,
  funnyQuotes,
  lessonItems,
  musicSongs,
  outfitLooks,
  outsideLinks,
  pressArticles,
  recordItems,
  timelineEntries,
  tributeCards,
  triviaItems,
  visits,
} from '@/data/memorialContent';

describe('HomePage', () => {
  it('renders the hero with title, subtitle and CTA', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dolly in New Zealand');
    expect(screen.getByText('Read her story')).toBeInTheDocument();
  });

  it('renders every timeline entry', () => {
    render(<HomePage />);
    for (const entry of timelineEntries) {
      expect(screen.getByText(entry.title)).toBeInTheDocument();
      expect(screen.getAllByText(entry.year).length).toBeGreaterThan(0);
    }
  });

  it('leads with her first solo show', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('heading', { name: 'Her first New Zealand show.' })
    ).toBeInTheDocument();
    expect(screen.getByText('Aotearoa, 11 July 1979')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'The setlist from that night' })).toBeInTheDocument();
  });

  it('renders the Aotearoa section', () => {
    render(<HomePage />);
    expect(screen.getByText('Two nights in Aotearoa.')).toBeInTheDocument();
    expect(screen.getByText(/7 and 8 February 2014, Vector Arena/)).toBeInTheDocument();
    expect(screen.getByText(/a full night of her songs/)).toBeInTheDocument();
    expect(screen.getByText(/13 May 2023/)).toBeInTheDocument();
  });

  it('renders the three visits with the story opener', () => {
    render(<HomePage />);
    expect(screen.getByText(/cold, cloudy Auckland winter night/)).toBeInTheDocument();
    for (const visit of visits) {
      expect(screen.getByText(visit.title)).toBeInTheDocument();
      expect(screen.getByText(visit.line)).toBeInTheDocument();
      if (visit.image !== undefined) {
        expect(screen.getByAltText(visit.image.alt)).toBeInTheDocument();
      }
    }
  });

  it('renders every funny quote', () => {
    render(<HomePage />);
    for (const item of funnyQuotes) {
      expect(screen.getAllByText(new RegExp(item.quote)).length).toBeGreaterThan(0);
    }
  });

  it('renders records, trivia and lessons', () => {
    render(<HomePage />);
    for (const item of recordItems) {
      expect(screen.getByText(item.fact)).toBeInTheDocument();
    }
    for (const item of triviaItems) {
      expect(screen.getByText(item.fact)).toBeInTheDocument();
    }
    for (const lesson of lessonItems) {
      expect(screen.getByText(lesson.title)).toBeInTheDocument();
    }
  });

  it('renders the look book with credits and sources', () => {
    render(<HomePage />);
    for (const look of outfitLooks) {
      expect(screen.getByAltText(look.alt)).toBeInTheDocument();
      expect(screen.getAllByText(`${look.credit}, ${look.license}`).length).toBeGreaterThan(0);
    }
  });

  it('renders her pages and causes', () => {
    render(<HomePage />);
    for (const link of outsideLinks) {
      expect(
        screen.getByRole('link', { name: `${link.label}, opens in a new tab` })
      ).toHaveAttribute('href', link.url);
    }
  });

  it('renders the listen control with every song', () => {
    render(<HomePage />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    for (const song of musicSongs) {
      expect(screen.getByRole('button', { name: song.title })).toBeInTheDocument();
    }
  });

  it('renders every New Zealand press article', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /In the New Zealand press/ })).toBeInTheDocument();
    for (const clip of pressArticles) {
      expect(screen.getByText(clip.headline)).toBeInTheDocument();
    }
  });

  it('renders every tribute card with a labelled source link', () => {
    render(<HomePage />);
    for (const card of tributeCards) {
      expect(
        screen.getByRole('link', { name: `${card.headline}, ${card.outlet}` })
      ).toHaveAttribute('href', card.url);
    }
  });

  it('renders the gallery with credits and sources', () => {
    render(<HomePage />);
    for (const image of galleryImages) {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument();
      expect(screen.getAllByText(`${image.credit}, ${image.license}`).length).toBeGreaterThan(0);
    }
  });

  it('renders navigation and a footer link to the sources page', () => {
    render(<HomePage />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'The full source list' })).toHaveAttribute(
      'href',
      '/sources'
    );
  });
});
