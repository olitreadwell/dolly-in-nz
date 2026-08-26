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

  it('opens the song list and loads the audio only after a song is picked', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Jolene' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Jolene' }));
    const audio = screen.getByTitle('Jolene');
    expect(audio.tagName).toBe('AUDIO');
    expect(audio).toHaveAttribute('aria-label', 'Jolene, covered by Sunny & the Whisky Machine');
    expect(audio).not.toHaveAttribute('autoplay');
    expect(audio.querySelector('source')?.getAttribute('src')).toContain(
      'kdur_dollyparton2023-02-11t-55.mp3'
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
