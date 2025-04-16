import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Badge } from './index';

describe('Badge Component', () => {
  it('renders correctly', () => {
    render(<Badge>Test</Badge>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
