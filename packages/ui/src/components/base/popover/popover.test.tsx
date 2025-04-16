import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Popover } from './index';

describe('Popover Component', () => {
  it('renders correctly', () => {
    render(<Popover>Test</Popover>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
