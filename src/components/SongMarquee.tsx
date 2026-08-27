import type { ReactNode } from 'react';
import { Rhinestone } from '@/components/Rhinestone';
import { marqueeSongs } from '@/data/memorialContent';

/**
 * Song-title marquee, the wind motif of the page, dressed in Dolly glam:
 * a dark grape band with rhinestone separators between the songs.
 *
 * @returns The marquee band
 */
export function SongMarquee(): ReactNode {
  const lane = marqueeSongs.map((song) => (
    <span key={song} className="flex items-center gap-8">
      <span>{song}</span>
      <Rhinestone className="h-3.5 w-3.5 text-pink" />
    </span>
  ));
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-gold/25 bg-gradient-to-r from-plum via-grape to-plum py-3"
    >
      <div className="wind-marquee flex w-max items-center whitespace-nowrap font-display text-xl tracking-wide text-ink italic">
        <span className="flex items-center pr-8">{lane}</span>
        <span className="flex items-center pr-8">{lane}</span>
      </div>
    </div>
  );
}
