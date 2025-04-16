import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Modal } from './index';

describe('Modal Component', () => {
  it('renders correctly', () => {
    render(<Modal>Test</Modal>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
