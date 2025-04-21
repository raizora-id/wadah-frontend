import React from 'react';
import { render } from '@testing-library/react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { TextReveal } from './';

// Mock framer-motion hooks
jest.mock('framer-motion', () => ({
  useScroll: jest.fn(),
  useTransform: jest.fn(),
  motion: {
    div: jest.fn(({ children, ...props }) => (
      <div data-testid="motion-div" {...props}>
        {children}
      </div>
    )),
    span: jest.fn(({ children, ...props }) => (
      <span data-testid="motion-span" {...props}>
        {children}
      </span>
    )),
  },
}));

describe('TextReveal', () => {
  beforeEach(() => {
    // Mock useScroll hook
    (useScroll as jest.Mock).mockReturnValue({
      scrollYProgress: { current: 0 },
    });

    // Mock useTransform hook
    (useTransform as jest.Mock).mockReturnValue({ current: 0 });
  });

  it('should render text content', () => {
    const { getByText } = render(
      <TextReveal>Sample Text</TextReveal>
    );
    expect(getByText('Sample Text')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <TextReveal className="custom-class">Text</TextReveal>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should handle word splitting', () => {
    const { getAllByTestId } = render(
      <TextReveal>Hello World</TextReveal>
    );
    const words = getAllByTestId('motion-span');
    expect(words).toHaveLength(2);
  });

  it('should handle single word', () => {
    const { getAllByTestId } = render(
      <TextReveal>Hello</TextReveal>
    );
    const words = getAllByTestId('motion-span');
    expect(words).toHaveLength(1);
  });

  it('should handle empty string', () => {
    const { container } = render(
      <TextReveal></TextReveal>
    );
    expect(container.textContent).toBe('');
  });
});