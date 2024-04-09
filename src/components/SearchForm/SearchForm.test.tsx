import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('tests exist', () => {
  beforeEach(() => {
    render(<SearchForm />);
  });
  it('renders expected number of elements', () => {
    const inputs = screen.getAllByRole('textbox');
    const buttons = screen.getAllByRole('button');
    expect(inputs.length).toBe(1);
    expect(buttons.length).toBe(1);
  });
});
