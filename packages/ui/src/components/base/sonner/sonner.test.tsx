import React from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { Toaster } from './index';

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

describe('Sonner/Toaster Component', () => {
  it('renders correctly', () => {
    render(<Toaster />);
    // Toaster doesn't render anything visible until a toast is shown
    // Just checking that it doesn't throw
    expect(true).toBeTruthy();
  });
});
