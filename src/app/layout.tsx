import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/700.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/cormorant-garamond/600-italic.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dolly Parton · A Wellington Memorial',
  description:
    'A Wellington memorial for Dolly Parton. Her songs, her 2014 Aotearoa tour, and the tributes New Zealand wrote for her.',
};

/**
 * Root layout: wraps every route in the HTML shell.
 *
 * @param props - Layout props
 * @param props.children - Rendered route content
 * @returns The root HTML document
 */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
