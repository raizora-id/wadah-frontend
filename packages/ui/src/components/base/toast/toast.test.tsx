import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Toast, ToastProvider } from './index';

describe('Toast Component', () => {
  it('renders correctly', () => {
    render(
      <ToastProvider>
        <Toast>Test Toast</Toast>
      </ToastProvider>
    );
    const element = screen.getByText('Test Toast');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
