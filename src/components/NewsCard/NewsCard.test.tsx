import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NewsCard from './NewsCard';
import testArticles from '../../utils/testArticles';

interface SVG {
  className: string;
  src: string;
  alt: string;
}

/*
 * It feels a bit wrong to have the test be checking that the image src is correct.
 * TODO: Find better way?
 */
const svgCheck = (e: HTMLElement): boolean => {
  const keys: string[] = Object.keys(e);
  const key: string = keys[1];
  // @ts-expect-error: key is unknowable at compile time, so we must get it at runtime
  const item: SVG = e[key as keyof HTMLElement];
  return item.src.endsWith('icon_bookmark_active.svg');
};

describe('newscard', () => {
  it('renders all items', () => {
    render(<NewsCard article={testArticles[0]} isSaved />);
    const images: HTMLElement[] = screen.getAllByRole('img');
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const paragraphs: HTMLElement[] = screen.getAllByText(/\w/);

    expect(images.length).toBe(2);
    expect(headers.length).toBe(1);
    expect(paragraphs.length).toBe(4);
    expect(svgCheck(images[1])).toBeTruthy();
  });

  it('renders correctly alternate set', () => {
    render(<NewsCard article={testArticles[1]} />);
    const images: HTMLElement[] = screen.getAllByRole('img');
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const paragraphs: HTMLElement[] = screen.getAllByText(/\w/);

    expect(images.length).toBe(2);
    expect(headers.length).toBe(1);
    expect(paragraphs.length).toBe(4);
    expect(svgCheck(images[1])).toBeFalsy();
  });
});
