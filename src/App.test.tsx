import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('Chansonor', () => {
  it('renders the immersive home screen', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Chansonor', level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Categories illustrees')).toBeInTheDocument();
  }, 10000);
});
