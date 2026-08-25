import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders the title', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: 'Starter Template' })).toBeInTheDocument();
  });

  it('has no axe violations', async () => {
    const { container } = render(<HomePage />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
