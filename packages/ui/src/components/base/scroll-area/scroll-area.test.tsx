import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { ScrollArea } from './index';

describe('ScrollArea Component', () => {
  it('renders correctly', () => {
    render(<ScrollArea>Test</ScrollArea>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
