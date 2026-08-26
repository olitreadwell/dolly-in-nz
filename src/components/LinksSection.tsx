import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import { outsideLinks } from '@/data/memorialContent';
import { Reveal } from '@/components/Reveal';

/**
 * Her own pages and the charities that carry her name, so visitors can
 * give in her honour instead of just remembering.
 *
 * @returns The links section
 */
export function LinksSection(): ReactNode {
  return (
    <section id="links" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Her pages, and <em className="text-gold-soft">her causes</em>
        </h2>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-moss">
          The official sites, the library and the foundation. A book costs a dollar to gift; the
          library does the rest.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {outsideLinks.map((link) => (
          <Reveal key={link.url} className="h-full">
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.label}, opens in a new tab`}
              className="flex h-full flex-col justify-between border border-gold/25 bg-ink-2 p-7 transition-colors hover:border-gold/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span>
                <span className="font-display text-2xl font-semibold text-cream">{link.label}</span>
                <span className="mt-3 block text-sm leading-relaxed text-moss">{link.blurb}</span>
              </span>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                Visit
                <ArrowUpRightIcon size={14} weight="bold" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
