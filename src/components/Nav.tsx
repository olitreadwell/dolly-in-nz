'use client';

import { ListIcon, XIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import type { ReactNode } from 'react';

const navItems = ['Story', 'Wellington', 'Press', 'Tributes', 'Books', 'Gallery'] as const;

/**
 * Sticky page navigation. Inline links on desktop, collapsible hamburger
 * menu on mobile so the section links never overflow narrow screens.
 *
 * @returns The page navigation bar
 */
export function Nav(): ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-0 z-20 border-b border-gold/25 bg-ink/85 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg font-semibold tracking-wide">
          Dolly <span className="italic text-gold">Parton</span>
        </a>
        <ul className="hidden items-center gap-5 text-sm md:flex">
          {navItems.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="text-moss transition-colors hover:text-gold focus-visible:text-gold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center p-2 text-gold transition-colors hover:text-gold-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft md:hidden"
        >
          {menuOpen ? (
            <XIcon size={24} aria-hidden="true" />
          ) : (
            <ListIcon size={24} aria-hidden="true" />
          )}
        </button>
      </div>
      {menuOpen ? (
        <div id="mobile-nav-menu" className="border-t border-gold/25 md:hidden">
          <ul className="space-y-1 px-5 py-3">
            {navItems.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm text-moss transition-colors hover:text-gold focus-visible:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
