import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { funnyQuotes } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * A spread of her funniest lines, most of them said or repeated in New
 * Zealand press.
 *
 * @returns The quotes section
 */
export function QuotesSection(): ReactNode {
  return (
    <section id="quotes" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Keep <em className="text-gold-soft">her laughing</em>
        </h2>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-moss">
          The punchlines she polished for half a century, a few of them told first in New Zealand.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-px bg-gold/20 md:grid-cols-2 lg:grid-cols-3">
        {funnyQuotes.map((item) => (
          <Reveal key={item.quote} className="bg-ink">
            <figure className="flex h-full flex-col border border-gold/20 bg-ink-2 p-7">
              <blockquote className="flex-1">
                <p className="font-display text-2xl leading-snug text-cream italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm text-moss">{item.context}</p>
                {item.sourceLabel ? (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.sourceLabel}, quote source`}
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
                  >
                    {item.sourceLabel}
                    <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
                  </a>
                ) : null}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
