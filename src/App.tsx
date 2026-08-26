'use client';

import type { ReactNode } from 'react';
import { AotearoaSection } from '@/components/AotearoaSection';
import { BooksSection } from '@/components/BooksSection';
import { FooterSection } from '@/components/FooterSection';
import { FirstShowSection } from '@/components/FirstShowSection';
import { GallerySection } from '@/components/GallerySection';
import { Hero } from '@/components/Hero';
import { MusicPlayer } from '@/components/MusicPlayer';
import { Nav } from '@/components/Nav';
import { PressSection } from '@/components/PressSection';
import { SongMarquee } from '@/components/SongMarquee';
import { Timeline } from '@/components/Timeline';
import { TributeCards } from '@/components/TributeCards';

/**
 * The Dolly Parton Aotearoa memorial page.
 *
 * @returns The full memorial page
 */
export function App(): ReactNode {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <SongMarquee />
        <FirstShowSection />
        <Timeline />
        <AotearoaSection />
        <PressSection />
        <TributeCards />
        <BooksSection />
        <GallerySection />
      </main>
      <FooterSection />
      <MusicPlayer />
    </div>
  );
}
