'use client';

import { ArrowUpRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Rhinestone } from '@/components/Rhinestone';
import { sourceLinks } from '@/data/memorialContent';

/**
 * The full source list for the memorial, kept off the homepage so the
 * reading stays story-first.
 *
 * @returns The sources page
 */
export default function SourcesPage(): ReactNode {
  return (
    <main className="min-h-screen">
      <header className="border-b border-gold/25 bg-ink-2">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-gold underline-offset-4 hover:underline focus-visible:underline"
          >
            <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
            Back to the memorial
          </Link>
          <h1 className="mt-8 flex items-center gap-3 font-display text-5xl leading-[0.95] font-semibold tracking-tight md:text-6xl">
            <Rhinestone className="h-7 w-7 text-pink" />
            Sources &amp; <em className="text-gold-soft">reading list</em>
          </h1>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-moss">
            Every fact on this site is sourced. The clippings come from Papers Past, the national
            library of Aotearoa, alongside the New Zealand press, setlist records, RNZ and the
            obituaries written the day she died.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <ul className="grid grid-cols-1 gap-px bg-gold/20 md:grid-cols-2">
          {sourceLinks.map((link) => (
            <li key={link.label} className="bg-ink">
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-full items-center justify-between gap-3 bg-ink-2 p-5 text-sm text-moss underline-offset-4 transition-colors hover:bg-ink-3 hover:text-gold focus-visible:text-gold focus-visible:underline"
              >
                <span>{link.label}</span>
                <ArrowUpRightIcon
                  size={14}
                  weight="bold"
                  className="shrink-0 text-gold"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
