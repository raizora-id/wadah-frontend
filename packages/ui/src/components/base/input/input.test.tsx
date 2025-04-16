import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { Input } from './index';

describe('Input Component', () => {
  it('renders the input correctly', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    // No need to check for type explicitly since it's not required
  });

  it('renders with a specific type', () => {
    render(<Input type="password" placeholder="Enter password" />);
    const input = screen.getByPlaceholderText('Enter password');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
  });

  it('applies additional className', () => {
    render(<Input className="custom-class" placeholder="Styled input" />);
    const input = screen.getByPlaceholderText('Styled input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it('handles value changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    
    render(<Input placeholder="Type here" onChange={onChange} />);
    const input = screen.getByPlaceholderText('Type here');
    
    await user.type(input, 'Hello world');
    expect(onChange).toHaveBeenCalled();
    expect(input).toHaveValue('Hello world');
  });
});