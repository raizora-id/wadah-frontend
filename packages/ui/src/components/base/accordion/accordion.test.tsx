import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Accordion } from './index';

describe('Accordion Component', () => {
  it('renders correctly', () => {
    render(<Accordion>Test</Accordion>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
