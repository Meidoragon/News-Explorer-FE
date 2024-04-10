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
    const paragraphs = screen.getAllByText(/\w/);

    expect(headers.length).toBe(1);
    expect(images.length).toBe(1);
    expect(paragraphs.length).toBe(2); // l12 should get one header plus one paragraph
  });
});
