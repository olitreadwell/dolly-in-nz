import type { ReactNode } from 'react';

/**
 * Four-point rhinestone sparkle, the Dolly glam motif of the page.
 * Decorative only; never carries meaning.
 *
 * @param props - Rhinestone props
 * @param props.className - Size, colour and animation classes
 * @returns The rhinestone SVG
 */
export function Rhinestone({ className }: Readonly<{ className?: string }>): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12 1.5 14.4 9.6 22.5 12 14.4 14.4 12 22.5 9.6 14.4 1.5 12 9.6 9.6Z" />
      <path
        d="M12 6.5 13.6 10.4 17.5 12 13.6 13.6 12 17.5 10.4 13.6 6.5 12 10.4 10.4Z"
        opacity="0.55"
      />
    </svg>
  );
}
