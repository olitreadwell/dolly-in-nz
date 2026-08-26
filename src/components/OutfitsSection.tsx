import type { ReactNode } from 'react';
import { outfitLooks } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * A look book across the decades, each image credited under its Commons
 * licence.
 *
 * @returns The outfits section
 */
export function OutfitsSection(): ReactNode {
  return (
    <section id="outfits" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          The <em className="text-gold-soft">look book</em>
        </h2>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-moss">
          Five decades of sequins, wigs and one very famous set of nails.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {outfitLooks.map((look) => (
          <Reveal key={look.src}>
            <figure>
              <div className="overflow-hidden border border-gold/25">
                <img
                  src={look.src}
                  alt={look.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{look.era}</p>
                <p className="mt-1 text-sm font-semibold text-cream">{look.caption}</p>
                <p className="mt-1 text-xs text-moss">
                  {look.credit}, {look.license}
                  <span className="mx-1">·</span>
                  <a
                    href={look.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${look.alt} source`}
                    className="underline underline-offset-2 hover:text-gold"
                  >
                    Source
                  </a>
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
