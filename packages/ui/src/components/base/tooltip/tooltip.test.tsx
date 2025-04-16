import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Tooltip } from './index';

describe('Tooltip Component', () => {
  it('renders correctly', () => {
    render(<Tooltip>Test</Tooltip>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
