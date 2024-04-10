import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NewsCard from './NewsCard';
import testArticles from '../../utils/testArticles';

const svgCheck = (e: HTMLElement): boolean => {
  const keys: string[] = Object.keys(e);
  return e[keys[1]].src.endsWith('icon_bookmark_active.svg');
};

describe('newscard', () => {
  it('renders all items', () => {
    render(<NewsCard article={testArticles[0]} isSaved />);
    const images: HTMLElement[] = screen.getAllByRole('img');
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const paragraphs: HTMLElement[] = screen.getAllByText(/\w/);

    expect(images.length).toBe(2);
    expect(headers.length).toBe(1);
    expect(paragraphs.length).toBe(4); // l10 should get one header plus three other text sources
    expect(svgCheck(images[1])).toBeTruthy();
  });

  it('renders correctly alternate set', () => {
    render(<NewsCard article={testArticles[1]} />);
    const images: HTMLElement[] = screen.getAllByRole('img');
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const paragraphs: HTMLElement[] = screen.getAllByText(/\w/);

    expect(images.length).toBe(2);
    expect(headers.length).toBe(1);
    expect(paragraphs.length).toBe(4); // l10 should get one header plus three other text sources
    expect(svgCheck(images[1])).toBeFalsy();
  });
});
