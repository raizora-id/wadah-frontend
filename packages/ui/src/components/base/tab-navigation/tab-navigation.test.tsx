import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { TabNavigation } from './index';

describe('TabNavigation Component', () => {
  it('renders correctly', () => {
    render(<TabNavigation>Test</TabNavigation>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
