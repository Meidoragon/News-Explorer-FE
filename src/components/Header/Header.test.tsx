import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

const headerTitleTest = () => {
  const title: HTMLElement = screen.getByRole('heading', { level: 1 });
  expect(title).toHaveTextContent('NewsExplorer');
};
const setIsLoggedIn = () => { };

describe('Header not logged in', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header isLoggedIn={false} setIsLoggedIn={setIsLoggedIn} />
      </BrowserRouter>
    );
  });

  it('has h1 element', headerTitleTest);

  it('has sign-in button', () => {
    const button: HTMLElement = screen.getByRole('button', {
      name: /Sign In/,
    });
    expect(button).toBeInTheDocument();
  });
});

describe('Header logged in', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header isLoggedIn setIsLoggedIn={setIsLoggedIn} userName="PH_User" />
      </BrowserRouter>
    );
  });

  it('has h1 element', headerTitleTest);

  it('has Home button', () => {
    const button: HTMLElement = screen.getByRole('button', {
      name: /Home/,
    });
    expect(button).toBeInTheDocument();
  });

  it('has Saved Articles button', () => {
    const button: HTMLElement = screen.getByRole('button', {
      name: /Saved Articles/,
    });
    expect(button).toBeInTheDocument();
  });

  it('has logout button', () => {
    const button: HTMLElement = screen.getByRole('button', {
      name: /PH_User/,
    });
    expect(button).toBeInTheDocument();
  });
});
