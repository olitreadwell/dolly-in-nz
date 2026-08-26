import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MusicPlayer } from '@/components/MusicPlayer';

describe('MusicPlayer', () => {
  it('stays closed with nothing playing until the visitor asks', () => {
    render(<MusicPlayer />);
    const toggle = screen.getByRole('button', { name: 'Listen to Dolly Parton' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Jolene')).not.toBeInTheDocument();
  });

  it('opens the song list and loads the embed only after a song is picked', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Jolene' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Jolene' }));
    const iframe = screen.getByTitle('Jolene');
    expect(iframe).toHaveAttribute(
      'src',
      'https://www.youtube-nocookie.com/embed/Ixrje2rXLMA?rel=0'
    );
  });

  it('closes on Escape', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
