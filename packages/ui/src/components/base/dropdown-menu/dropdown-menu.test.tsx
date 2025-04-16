import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DropdownMenu } from './index';

describe('DropdownMenu Component', () => {
  it('renders correctly', () => {
    render(<DropdownMenu>Test</DropdownMenu>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
