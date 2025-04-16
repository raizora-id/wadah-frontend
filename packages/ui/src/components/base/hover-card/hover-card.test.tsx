import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { HoverCard } from './index';

describe('HoverCard Component', () => {
  it('renders correctly', () => {
    render(<HoverCard>Test</HoverCard>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
