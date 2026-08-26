import { ArrowUpRightIcon, MapPinIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { firstShowCopy } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * Prominent band about her first solo New Zealand concert, the 1979
 * Auckland Town Hall show, placed high on the page.
 *
 * @returns The first show section
 */
export function FirstShowSection(): ReactNode {
  return (
    <section id="first-show" className="border-y border-gold/25 bg-ink-3">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
            {firstShowCopy.eyebrow}
          </p>
          <h2 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight md:text-6xl">
            {firstShowCopy.title}
          </h2>
          {firstShowCopy.body.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-[52ch] leading-relaxed text-moss">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal className="relative">
          <div className="border border-gold/30 bg-ink p-8">
            <p className="font-display text-7xl font-semibold text-gold-soft">1979</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-moss">
              <MapPinIcon size={16} className="text-gold" aria-hidden="true" />
              Auckland Town Hall, 11 July
            </p>
            <p className="mt-4 text-sm leading-relaxed text-moss">
              Her first concert in New Zealand, and her only solo show here before the Blue Smoke
              tour.
            </p>
            <a
              href={firstShowCopy.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
            >
              {firstShowCopy.cta}
              <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
