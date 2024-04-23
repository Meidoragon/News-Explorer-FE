import { describe, it, beforeEach, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import testArticles from '../../utils/testArticles';
import NewsCardList from './NewsCardList';
import filterElementsByProp from '../../testUtils/bin';

describe('newscard', () => {
  beforeEach(() => {
    render(<NewsCardList articles={testArticles} />);
  });

  it('renders all items', () => {
    // const images: HTMLElement[] = filterElementsByProp(
    //   screen.getAllByRole('img'),
    //   'src',
    //   (imgsrc: string) => !imgsrc.endsWith('.svg')
    // );
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

    // expect(images.length).toBe(3);
    expect(headers.length).toBe(1);
    expect(buttons.length).toBe(1);
  });

  it('adds images when "show more" button is pressed', () => {
    const user = UserEvent.setup();
    const showMoreButton: HTMLElement = screen.getByRole('button', {
      name: /show more/i,
    });
    let bookmarkButtons: HTMLElement[] = screen.getAllByRole('button', {
      name: /bookmark button/i,
    });

    expect(bookmarkButtons.length).toBe(3);
    user.click(showMoreButton).then(() => {
      bookmarkButtons = screen.getAllByRole('button', {
        name: /bookmark button/i,
      });
      expect(bookmarkButtons.length).toBe(5);
    });
  });
});
