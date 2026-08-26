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

  it('hides the panel but keeps the audio mounted so the music keeps playing', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    fireEvent.click(screen.getByRole('button', { name: 'Jolene' }));
    const audio = screen.getByTitle('Jolene');

    fireEvent.click(screen.getByRole('button', { name: 'Hide music player' }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByTitle('Jolene')).toBe(audio);
    expect(screen.getByRole('group', { name: 'Now playing: Jolene' })).toBeInTheDocument();
  });

  it('stops the music and clears the player entirely', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    fireEvent.click(screen.getByRole('button', { name: 'Jolene' }));

    fireEvent.click(screen.getByRole('button', { name: 'Stop music' }));

    expect(screen.queryByTitle('Jolene')).not.toBeInTheDocument();
    expect(screen.queryByRole('group', { name: 'Now playing: Jolene' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Listen to Dolly Parton' })).toBeInTheDocument();
  });

  it('advances to the next cover when the current one ends', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    fireEvent.click(screen.getByRole('button', { name: 'Jolene' }));

    fireEvent.ended(screen.getByTitle('Jolene'));

    expect(screen.getByTitle('9 to 5')).toBeInTheDocument();
  });

  it('loops back to the first cover after the last one', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    fireEvent.click(screen.getByRole('button', { name: 'Blue Smoke' }));

    fireEvent.ended(screen.getByTitle('Blue Smoke'));

    expect(screen.getByTitle('Jolene')).toBeInTheDocument();
  });

  it('skips forward and back through the playlist', () => {
    render(<MusicPlayer />);
    fireEvent.click(screen.getByRole('button', { name: 'Listen to Dolly Parton' }));
    fireEvent.click(screen.getByRole('button', { name: 'Jolene' }));

    fireEvent.click(screen.getByRole('button', { name: 'Next song' }));
    expect(screen.getByTitle('9 to 5')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Previous song' }));
    expect(screen.getByTitle('Jolene')).toBeInTheDocument();
  });
});
