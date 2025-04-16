import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Sheet } from './index';

describe('Sheet Component', () => {
  it('renders correctly', () => {
    render(<Sheet>Test</Sheet>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
