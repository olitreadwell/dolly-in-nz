'use client';

import { MusicNotesIcon, XIcon } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { musicSongs } from '@/data/memorialContent';

/**
 * Floating listen control. Closed by default and nothing plays until the
 * visitor picks a song and presses play inside the embed.
 *
 * @returns The music player widget
 */
export function MusicPlayer(): ReactNode {
  const [open, setOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  useEffect(() => {
    if (!open) toggleRef.current?.focus();
  }, [open]);

  const activeSong = musicSongs.find((song) => song.videoId === activeVideoId);

  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open ? (
        <div
          id="music-panel"
          role="dialog"
          aria-label="Listen to Dolly Parton"
          aria-modal="true"
          className="w-[min(26rem,calc(100vw-2rem))] border border-gold/30 bg-ink-2 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-gold/25 px-5 py-3">
            <p className="font-display text-lg font-semibold text-cream">The songs</p>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close music player"
              onClick={() => setOpen(false)}
              className="p-1 text-gold transition-colors hover:text-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <XIcon size={20} aria-hidden="true" />
            </button>
          </div>
          {activeSong ? (
            <div className="p-5">
              <div className="aspect-video">
                <iframe
                  key={activeSong.videoId}
                  src={`https://www.youtube-nocookie.com/embed/${activeSong.videoId}?rel=0`}
                  title={activeSong.title}
                  allow="encrypted-media; picture-in-picture"
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoId(null)}
                className="mt-3 text-sm text-moss underline-offset-4 hover:text-gold hover:underline"
              >
                Pick another song
              </button>
            </div>
          ) : (
            <>
              <ul className="px-5 py-3">
                {musicSongs.map((song) => (
                  <li key={song.videoId}>
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(song.videoId)}
                      className="block w-full border-b border-gold/10 py-3 text-left font-display text-lg text-cream transition-colors last:border-0 hover:text-gold focus-visible:text-gold focus-visible:outline-none"
                    >
                      {song.title}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="border-t border-gold/20 px-5 py-3 text-xs text-moss">
                Nothing plays until you ask. Press play on the video when you pick a song.
              </p>
            </>
          )}
        </div>
      ) : null}
      <button
        ref={toggleRef}
        type="button"
        aria-label="Listen to Dolly Parton"
        aria-expanded={open}
        aria-controls="music-panel"
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="inline-flex items-center gap-2 bg-gold px-5 py-3 text-sm font-semibold tracking-wide text-ink shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-0"
      >
        <MusicNotesIcon size={18} weight="bold" aria-hidden="true" />
        {open ? 'Close' : 'Listen'}
      </button>
    </div>
  );
}
