import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';
import {
  galleryImages,
  musicSongs,
  pressArticles,
  sourceLinks,
  timelineEntries,
  tributeCards,
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
    expect(screen.getByRole('heading', { name: 'Her first solo show.' })).toBeInTheDocument();
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
      expect(screen.getByText(`${image.credit}, ${image.license}`)).toBeInTheDocument();
    }
  });

  it('renders navigation and footer sources', () => {
    render(<HomePage />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    for (const link of sourceLinks) {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    }
  });
});
