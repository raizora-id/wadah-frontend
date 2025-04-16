import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Toggle } from './index';

describe('Toggle Component', () => {
  it('renders correctly', () => {
    render(<Toggle>Test</Toggle>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
