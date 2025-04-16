import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { ContextMenu } from './index';

describe('ContextMenu Component', () => {
  it('renders correctly', () => {
    render(<ContextMenu>Test</ContextMenu>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
