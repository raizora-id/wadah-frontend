import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Slider } from './index';

describe('Slider Component', () => {
  it('renders correctly', () => {
    render(<Slider>Test</Slider>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
