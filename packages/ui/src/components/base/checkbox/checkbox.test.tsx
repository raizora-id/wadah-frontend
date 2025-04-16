import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Checkbox } from './index';

describe('Checkbox Component', () => {
  it('renders correctly', () => {
    render(<Checkbox>Test</Checkbox>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
