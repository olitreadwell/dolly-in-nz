import { ArrowUpRightIcon, CloudSunIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { storyCopy, visits } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * The three New Zealand visits told in order, opening with the sourced
 * weather reading from the night of her first Auckland show.
 *
 * @returns The story section
 */
export function StorySection(): ReactNode {
  return (
    <section id="story" className="border-y border-gold/25 bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
            {storyCopy.eyebrow}
          </p>
          <h2 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight md:text-6xl">
            {storyCopy.title}
          </h2>
          {storyCopy.intro.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-[62ch] leading-relaxed text-moss">
              {paragraph}
            </p>
          ))}
          <p className="mt-6 flex max-w-[62ch] items-start gap-2 text-sm text-moss">
            <CloudSunIcon size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
            <span>
              {storyCopy.weatherNote}{' '}
              <a
                href={storyCopy.weatherSourceUrl}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-gold"
              >
                See the forecast
              </a>
            </span>
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visits.map((visit) => (
            <Reveal key={visit.year} className="h-full">
              <article className="flex h-full flex-col border border-gold/25 bg-ink p-7">
                <p className="font-display text-6xl font-semibold text-gold-soft">{visit.year}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-cream">
                  {visit.title}
                </h3>
                <p className="mt-1 text-xs text-moss">
                  {visit.date} · {visit.venue}
                </p>
                <p className="mt-3 text-sm text-gold italic">{visit.line}</p>
                {visit.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm leading-relaxed text-moss">
                    {paragraph}
                  </p>
                ))}
                <a
                  href={visit.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${visit.sourceLabel}, ${visit.year} visit`}
                  className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
                >
                  {visit.sourceLabel}
                  <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
