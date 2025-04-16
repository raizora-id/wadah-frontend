import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Dialog } from './index';

describe('Dialog Component', () => {
  it('renders correctly', () => {
    render(<Dialog>Test</Dialog>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
