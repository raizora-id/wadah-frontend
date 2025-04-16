import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Alert, AlertTitle, AlertDescription } from './index';

describe('Alert Component', () => {
  it('renders alert with default variant', () => {
    render(<Alert>Test alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('bg-background');
    expect(alert).toHaveTextContent('Test alert');
  });

  it('renders alert with destructive variant', () => {
    render(<Alert variant="destructive">Destructive alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('border-destructive/50');
    expect(alert).toHaveTextContent('Destructive alert');
  });

  it('renders alert with custom className', () => {
    render(<Alert className="custom-class">Custom alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('custom-class');
  });

  it('renders alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is an alert description</AlertDescription>
      </Alert>
    );
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    
    const title = screen.getByText('Alert Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H5');
    
    const description = screen.getByText('This is an alert description');
    expect(description).toBeInTheDocument();
  });

  it('renders AlertTitle with custom className', () => {
    render(<AlertTitle className="custom-title">Title with class</AlertTitle>);
    const title = screen.getByText('Title with class');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('custom-title');
    expect(title).toHaveClass('mb-1');
  });

  it('renders AlertDescription with custom className', () => {
    render(<AlertDescription className="custom-desc">Description with class</AlertDescription>);
    const desc = screen.getByText('Description with class');
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveClass('custom-desc');
    expect(desc).toHaveClass('text-sm');
  });
});