import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Divider } from './index';

describe('Divider Component', () => {
  it('renders correctly', () => {
    render(<Divider>Test</Divider>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
