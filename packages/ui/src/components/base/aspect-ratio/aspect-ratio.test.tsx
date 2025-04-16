import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { AspectRatio } from './index';

describe('AspectRatio Component', () => {
  it('renders correctly', () => {
    render(<AspectRatio>Test</AspectRatio>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
