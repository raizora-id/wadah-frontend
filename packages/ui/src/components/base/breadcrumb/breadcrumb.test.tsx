import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Breadcrumb } from './index';

describe('Breadcrumb Component', () => {
  it('renders correctly', () => {
    render(<Breadcrumb>Test</Breadcrumb>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
