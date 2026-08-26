'use client';

import { ArrowUpRightIcon, MusicNotesIcon, XIcon } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { musicSongs } from '@/data/memorialContent';

/**
 * Floating listen control. Closed by default and nothing plays until the
 * visitor picks a song and presses play. Audio keeps running while the page
 * scrolls, and never autoplays.
 *
 * @returns The music player widget
 */
export function MusicPlayer(): ReactNode {
  const [open, setOpen] = useState(false);
  const [activeSong, setActiveSong] = useState<number | null>(null);
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

  const song = activeSong === null ? null : musicSongs[activeSong];

  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open ? (
        <div
          id="music-panel"
          role="dialog"
          aria-label="Listen to Dolly Parton"
          aria-modal="true"
          className="w-[min(26rem,calc(100vw-2rem))] rounded-3xl border border-white/60 bg-ink-2/95 shadow-heaven backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-gold/25 px-5 py-3">
            <p className="font-display text-lg font-semibold text-cream">The songs</p>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close music player"
              onClick={() => {
                setOpen(false);
                setActiveSong(null);
              }}
              className="p-1 text-gold transition-colors hover:text-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <XIcon size={20} aria-hidden="true" />
            </button>
          </div>
          {song ? (
            <div className="p-5">
              <p className="font-display text-xl font-semibold text-cream">{song.title}</p>
              <p className="mt-1 text-xs text-moss">
                Covered by {song.artist}, live at the KDUR Dolly Parton Cover Night, Durango, 11
                February 2023.
              </p>
              <audio
                key={song.audioUrl}
                controls
                preload="none"
                title={song.title}
                aria-label={`${song.title}, covered by ${song.artist}`}
                className="mt-4 w-full"
              >
                <source src={song.audioUrl} type="audio/mpeg" />
                Your browser does not support audio playback.
              </audio>
              <a
                href={song.sourceUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Recording source for ${song.title}`}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
              >
                The full cover night on the Internet Archive
                <ArrowUpRightIcon size={12} weight="bold" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setActiveSong(null)}
                className="mt-3 block text-sm text-moss underline-offset-4 hover:text-gold hover:underline"
              >
                Pick another song
              </button>
            </div>
          ) : (
            <>
              <ul className="px-5 py-3">
                {musicSongs.map((item, index) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => setActiveSong(index)}
                      className="block w-full border-b border-gold/10 py-3 text-left font-display text-lg text-cream transition-colors last:border-0 hover:text-gold focus-visible:text-gold focus-visible:outline-none"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="border-t border-gold/20 px-5 py-3 text-xs text-moss">
                Covers from a Dolly Parton cover night, recorded live in 2023. Nothing plays until
                you ask, and the music keeps playing while you scroll.
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
