import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NewsCard from './NewsCard';
import testArticles from '../../utils/testArticles';
import filterElementsByProp from '../../testUtils/bin';

describe('newscard', () => {
  it('renders all items', () => {
    render(<NewsCard article={testArticles[0]} isSaved />);
    const images: HTMLElement[] = screen.getAllByRole('img');
    const rasterImages: HTMLElement[] = filterElementsByProp(
      images,
      'src',
      (imgsrc: string) => !imgsrc.endsWith('.svg')
    );
    const svgs: HTMLElement[] = filterElementsByProp(
      images,
      'src',
      (imgsrc: string) => imgsrc.endsWith('icon_bookmark_active.svg')
    );
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const paragraphs: HTMLElement[] = screen.getAllByText(/\w/);

    expect(rasterImages.length).toBe(1);
    expect(svgs.length).toBe(1);
    expect(headers.length).toBe(1);
    expect(paragraphs.length).toBe(4);
  });

  it('renders correctly alternate set', () => {
    render(<NewsCard article={testArticles[1]} />);
    const images: HTMLElement[] = screen.getAllByRole('img');
    const rasterImages: HTMLElement[] = filterElementsByProp(
      images,
      'src',
      (imgsrc: string) => !imgsrc.endsWith('.svg')
    );
    const svgs: HTMLElement[] = filterElementsByProp(
      images,
      'src',
      (imgsrc: string) => imgsrc.endsWith('icon_bookmark_inactive.svg')
    );
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const paragraphs: HTMLElement[] = screen.getAllByText(/\w/);

    expect(rasterImages.length).toBe(1);
    expect(svgs.length).toBe(1);
    expect(headers.length).toBe(1);
    expect(paragraphs.length).toBe(4);
  });
});
