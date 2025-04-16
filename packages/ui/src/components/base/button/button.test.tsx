import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Button } from './index';

describe('Button Component', () => {
  it('renders the button with default variants', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
  });

  it('renders the button with destructive variant', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button', { name: /Delete/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-destructive');
  });

  it('renders the button with correct size', () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole('button', { name: /Large Button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('h-11');
  });

  it('applies additional className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button', { name: /Custom Button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('custom-class');
  });

  it('passes additional props', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: /Disabled Button/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});