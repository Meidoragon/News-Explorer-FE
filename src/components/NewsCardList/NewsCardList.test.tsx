import { describe, it, beforeEach, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import testArticles from '../../utils/testArticles';
import NewsCardList from './NewsCardList';
import filterElementsByProp from '../../testUtils/bin';

describe('newscard', () => {
  beforeEach(() => {
    render(<NewsCardList articles={testArticles} />);
  });

  it('renders all items', () => {
    const images: HTMLElement[] = filterElementsByProp(
      screen.getAllByRole('img'),
      'src',
      (imgsrc: string) => !imgsrc.endsWith('.svg')
    );
    const headers: HTMLElement[] = filterElementsByProp(
      screen.getAllByRole('heading'),
      'className',
      (className: string) => className.includes('card-list')
    );
    const buttons: HTMLElement[] = filterElementsByProp(
      screen.getAllByRole('button'),
      'className',
      (className: string) => className.includes('card-list')
    );

    expect(images.length).toBe(3);
    expect(headers.length).toBe(1);
    expect(buttons.length).toBe(1);
  });

  it('adds images when button is pressed', () => {
    // [0] because there should only be one button
    const button: HTMLElement = filterElementsByProp(
      screen.getAllByRole('button'),
      'className',
      (className: string) => className.includes('card-list__extend-button')
    )[0];
    fireEvent.click(button);

    const images: HTMLElement[] = filterElementsByProp(
      screen.getAllByRole('img'),
      'src',
      (imgsrc: string) => !imgsrc.endsWith('.svg')
    );

    expect(images.length).toBe(5);
  });
});
