import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Avatar } from './index';

describe('Avatar Component', () => {
  it('renders correctly', () => {
    render(<Avatar data-testid="test-avatar" />);
    const element = screen.getByTestId('test-avatar');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
