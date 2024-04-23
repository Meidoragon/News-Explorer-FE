import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsCard from './NewsCard';
import testArticles from '../../utils/testArticles';
// import filterElementsByProp from '../../testUtils/bin';

describe('newscard', () => {
  beforeEach(() => {
    render(<NewsCard article={testArticles[0]} />);
  });
  it('renders all items', () => {
    // render(<NewsCard article={testArticles[0]} />);
    const images: HTMLElement[] = screen.getAllByRole('img');
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const paragraphs: HTMLElement[] = screen.getAllByText(/\w/);

    expect(images.length).toBe(1);
    expect(headers.length).toBe(1);
    expect(paragraphs.length).toBe(5);
  });

  it('handles hover properly', () => {
    const user = userEvent.setup();
    const icon: HTMLElement = screen.getByRole('button');
    const tooltip: HTMLElement = screen.getByTestId('tooltip');

    expect(tooltip).not.toBeVisible();
    user.hover(icon).then(() => {
      expect(tooltip).toBeVisible();
    });
  });
  // it('renders correctly alternate set', () => {
  //   render(<NewsCard article={testArticles[1]} />);
  //   const images: HTMLElement[] = screen.getAllByRole('img');
  //   // const rasterImages: HTMLElement[] = filterElementsByProp(
  //   //   images,
  //   //   'src',
  //   //   (imgsrc: string) => !imgsrc.endsWith('.svg')
  //   // );
  //   const headers: HTMLElement[] = screen.getAllByRole('heading');
  //   const paragraphs: HTMLElement[] = screen.getAllByText(/\w/);
  //
  //   expect(images.length).toBe(1);
  //   expect(headers.length).toBe(1);
  //   expect(paragraphs.length).toBe(4);
  // });
});
