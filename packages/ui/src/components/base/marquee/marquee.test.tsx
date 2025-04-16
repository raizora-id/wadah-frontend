import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from './index';

// Mock react-fast-marquee
vi.mock('react-fast-marquee', () => ({
  default: ({ children, ...props }) => (
    <div data-testid="fast-marquee" {...props}>
      {children}
    </div>
  ),
}));

describe('Marquee Component', () => {
  it('renders correctly', () => {
    render(<Marquee>Test Marquee</Marquee>);
    const element = screen.getByText('Test Marquee');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Marquee className="test-class">Test Marquee</Marquee>);
    const element = screen.getByText('Test Marquee');
    expect(element.parentElement).toHaveClass('test-class');
  });
});

describe('MarqueeContent Component', () => {
  it('renders with default props', () => {
    render(<MarqueeContent>Test Content</MarqueeContent>);
    const element = screen.getByTestId('fast-marquee');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test Content');
  });

  it('passes props to FastMarquee component', () => {
    render(<MarqueeContent direction="right" speed={50}>Test Content</MarqueeContent>);
    const element = screen.getByTestId('fast-marquee');
    expect(element).toHaveAttribute('direction', 'right');
    expect(element).toHaveAttribute('speed', '50');
  });
});

describe('MarqueeFade Component', () => {
  it('renders correctly with left side', () => {
    render(<MarqueeFade side="left" data-testid="fade-left" />);
    const element = screen.getByTestId('fade-left');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('left-0');
    expect(element).toHaveClass('bg-gradient-to-r');
  });

  it('renders correctly with right side', () => {
    render(<MarqueeFade side="right" data-testid="fade-right" />);
    const element = screen.getByTestId('fade-right');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('right-0');
    expect(element).toHaveClass('bg-gradient-to-l');
  });

  it('applies custom className', () => {
    render(<MarqueeFade side="left" className="test-class" data-testid="fade" />);
    const element = screen.getByTestId('fade');
    expect(element).toHaveClass('test-class');
  });
});

describe('MarqueeItem Component', () => {
  it('renders correctly', () => {
    render(<MarqueeItem>Test Item</MarqueeItem>);
    const element = screen.getByText('Test Item');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<MarqueeItem className="test-class">Test Item</MarqueeItem>);
    const element = screen.getByText('Test Item');
    expect(element.parentElement).toHaveClass('test-class');
  });
});