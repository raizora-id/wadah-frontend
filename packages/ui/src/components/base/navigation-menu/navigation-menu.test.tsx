import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { NavigationMenu } from './index';

describe('NavigationMenu Component', () => {
  it('renders correctly', () => {
    render(<NavigationMenu>Test</NavigationMenu>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
