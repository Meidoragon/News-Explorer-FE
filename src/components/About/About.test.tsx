import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('about', () => {
  beforeEach(() => {
    render(<About />);
  });
  it('renders all items', () => {
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const images: HTMLElement[] = screen.getAllByRole('img');
    const paragraphs = screen.getAllByText('Lorem', { exact: false });

    expect(headers.length).toBe(1);
    expect(images.length).toBe(1);
    expect(paragraphs.length).toBe(1);
  });
});
