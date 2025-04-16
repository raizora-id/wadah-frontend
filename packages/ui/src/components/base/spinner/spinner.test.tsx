import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Spinner } from './index';

describe('Spinner Component', () => {
  it('renders default variant correctly', () => {
    render(<Spinner data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('animate-spin');
  });

  it('renders circle variant correctly', () => {
    render(<Spinner variant="circle" data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('animate-spin');
  });

  it('renders pinwheel variant correctly', () => {
    render(<Spinner variant="pinwheel" data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('animate-spin');
  });

  it('renders circle-filled variant correctly', () => {
    render(<Spinner variant="circle-filled" data-testid="spinner" />);
    const elements = screen.getAllByTestId('spinner');
    // Should have two spinner elements for circle-filled
    expect(elements.length).toBe(2);
    expect(elements[0]).toHaveClass('animate-spin');
    expect(elements[1]).toHaveClass('animate-spin');
  });

  it('renders ellipsis variant correctly', () => {
    render(<Spinner variant="ellipsis" data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe('svg');
    expect(element.querySelector('title')?.textContent).toBe('Loading...');
    expect(element.querySelectorAll('circle').length).toBe(3);
  });

  it('renders ring variant correctly', () => {
    render(<Spinner variant="ring" data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe('svg');
    expect(element.querySelector('title')?.textContent).toBe('Loading...');
    expect(element.querySelectorAll('circle').length).toBe(2);
  });

  it('renders bars variant correctly', () => {
    render(<Spinner variant="bars" data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe('svg');
    expect(element.querySelector('title')?.textContent).toBe('Loading...');
    expect(element.querySelectorAll('rect').length).toBe(3);
  });

  it('renders infinite variant correctly', () => {
    render(<Spinner variant="infinite" data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe('svg');
    expect(element.querySelector('title')?.textContent).toBe('Loading...');
    expect(element.querySelector('path')).toBeInTheDocument();
  });

  it('applies custom size correctly', () => {
    render(<Spinner size={32} data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toHaveAttribute('width', '32');
    expect(element).toHaveAttribute('height', '32');
  });

  it('applies custom className correctly', () => {
    render(<Spinner className="test-class" data-testid="spinner" />);
    const element = screen.getByTestId('spinner');
    expect(element).toHaveClass('test-class');
  });
});