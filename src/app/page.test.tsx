import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';
import { galleryImages, sourceLinks, timelineEntries, tributeCards } from '@/data/memorialContent';

describe('HomePage', () => {
  it('renders the hero with title, subtitle and CTA', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The wind keeps her songs');
    expect(screen.getByText('Read her story')).toBeInTheDocument();
  });

  it('renders every timeline entry', () => {
    render(<HomePage />);
    for (const entry of timelineEntries) {
      expect(screen.getByText(entry.title)).toBeInTheDocument();
      expect(screen.getByText(entry.year)).toBeInTheDocument();
    }
  });

  it('renders the Wellington twist section', () => {
    render(<HomePage />);
    expect(screen.getByText('One night in Aotearoa.')).toBeInTheDocument();
    expect(screen.getByText(/7 February 2014, Vector Arena/)).toBeInTheDocument();
    expect(screen.getByText(/a full night of her songs/)).toBeInTheDocument();
    expect(screen.getByText(/13 May 2023/)).toBeInTheDocument();
  });

  it('renders all tribute cards with read links', () => {
    render(<HomePage />);
    const links = screen.getAllByRole('link', { name: 'Read it' });
    expect(links).toHaveLength(tributeCards.length);
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
