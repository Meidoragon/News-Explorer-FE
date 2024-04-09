import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('main', () => {
  beforeEach(() => {
    render(<Main />);
  });
  it('renders all items', () => {
    const headers: HTMLElement[] = screen.getAllByRole('heading');
    const paragraphs: HTMLElement[] = screen.getAllByText(
      'Find the latest news on any topic and save them in your personal account.'
    );
    const inputs: HTMLElement[] = screen.getAllByRole('textbox');
    expect(headers.length).toBe(1);
    expect(inputs.length).toBe(1);
    expect(paragraphs.length).toBe(1);
  });
});
