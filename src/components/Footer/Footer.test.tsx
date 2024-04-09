import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it('renders all items', () => {
    const buttons: HTMLElement[] = screen.getAllByRole('button');
    const icons: HTMLImageElement[] = screen.getAllByRole('img');

    expect(buttons.length).toBe(4);
    expect(icons.length).toBe(2); // TODO: Find better way to test this?
  });
});
