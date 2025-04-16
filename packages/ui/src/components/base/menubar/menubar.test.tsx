import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Menubar } from './index';

describe('Menubar Component', () => {
  it('renders correctly', () => {
    render(<Menubar>Test</Menubar>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
