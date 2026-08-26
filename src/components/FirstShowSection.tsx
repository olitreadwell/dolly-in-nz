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
          <ul className="mt-6 space-y-2">
            {firstShowCopy.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={source.label}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
                >
                  {source.label}
                  <ArrowUpRightIcon size={12} weight="bold" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="relative">
          <div className="rounded-[2rem] bg-white/45 p-1.5 shadow-heaven ring-1 ring-gold/15">
            <div className="bg-ink p-8">
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
                className="group mt-6 inline-flex items-center text-sm font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
              >
                {firstShowCopy.cta}
                <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 transition-transform duration-500 ease-heaven group-hover:translate-x-0.5">
                  <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
