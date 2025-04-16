import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Separator } from './index';

describe('Separator Component', () => {
  it('renders correctly', () => {
    render(<Separator data-testid="test-separator" />);
    const element = screen.getByTestId('test-separator');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
