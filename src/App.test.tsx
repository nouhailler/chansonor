import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('Chansonor', () => {
  it('renders the immersive home screen', async () => {
    render(<App />);
    expect(await screen.findByRole('heading', { name: 'Chansonor', level: 1 }, { timeout: 10000 })).toBeInTheDocument();
    expect(screen.getByText('Categories illustrees')).toBeInTheDocument();
  }, 10000);
});
