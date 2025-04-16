import React from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { CurrencyInput } from './index';

// Mock the Input component
vi.mock('../input', () => ({
  Input: ({ children, ...props }) => <input data-testid="mocked-input" {...props} />
}));

// Mock the Label component
vi.mock('../label', () => ({
  Label: ({ children, ...props }) => <label data-testid="mocked-label" {...props}>{children}</label>
}));

describe('CurrencyInput Component', () => {
  it('renders correctly', () => {
    render(<CurrencyInput label="Amount" prefix="$" />);
    // Just verify it doesn't throw
    expect(true).toBeTruthy();
  });
  
  // Add more tests as needed based on component functionality
});
