import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Collapsible } from './index';

describe('Collapsible Component', () => {
  it('renders correctly', () => {
    render(<Collapsible>Test</Collapsible>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
