import React from 'react';
import { render, screen } from '@testing-library/react';
import { useScroll, useTransform, motion } from 'framer-motion';
import TextGradientScroll from './index';

// Mock framer-motion hooks
jest.mock('framer-motion', () => ({
  useScroll: jest.fn(),
  useTransform: jest.fn(),
  motion: {
    span: jest.fn(({ children, ...props }) => (
      <span data-testid="motion-span" {...props}>
        {children}
      </span>
    )),
  },
}));

describe('TextGradientScroll', () => {
  beforeEach(() => {
    // Mock useScroll hook
    (useScroll as jest.Mock).mockReturnValue({
      scrollYProgress: { current: 0 },
    });

    // Mock useTransform hook
    (useTransform as jest.Mock).mockReturnValue(0);
  });

  it('should render text content', () => {
    render(<TextGradientScroll text="Hello World" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <TextGradientScroll text="Test" className="custom-class" />
    );
    const paragraph = container.querySelector('p');
    expect(paragraph).toHaveClass('custom-class');
    expect(paragraph).toHaveClass('relative', 'flex', 'm-0', 'flex-wrap');
  });

  describe('Word type rendering', () => {
    it('should render words when type is "word"', () => {
      render(<TextGradientScroll text="Hello World" type="word" />);
      
      // Check for word spans
      const wordSpans = screen.getAllByText(/Hello|World/);
      expect(wordSpans).toHaveLength(4); // 2 words x 2 (absolute + motion span)
    });

    it('should apply correct styling to word spans', () => {
      render(<TextGradientScroll text="Test" type="word" />);
      
      const wordContainer = screen.getAllByText('Test')[0].parentElement;
      expect(wordContainer).toHaveClass('relative', 'me-2', 'mt-2');
    });
  });

  describe('Letter type rendering', () => {
    it('should render letters when type is "letter"', () => {
      render(<TextGradientScroll text="Hi" type="letter" />);
      
      // Check for individual letter spans
      const letterSpans = screen.getAllByText(/H|i/);
      expect(letterSpans).toHaveLength(4); // 2 letters x 2 (absolute + motion span)
    });

    it('should handle text opacity levels', () => {
      const { container: noneOpacity } = render(
        <TextGradientScroll text="A" textOpacity="none" />
      );
      const { container: softOpacity } = render(
        <TextGradientScroll text="A" textOpacity="soft" />
      );
      const { container: mediumOpacity } = render(
        <TextGradientScroll text="A" textOpacity="medium" />
      );

      expect(noneOpacity.querySelector('.opacity-0')).toBeInTheDocument();
      expect(softOpacity.querySelector('.opacity-10')).toBeInTheDocument();
      expect(mediumOpacity.querySelector('.opacity-30')).toBeInTheDocument();
    });
  });

  describe('Scroll behavior', () => {
    it('should setup scroll tracking with correct offset', () => {
      render(<TextGradientScroll text="Test" />);
      
      expect(useScroll).toHaveBeenCalledWith({
        target: expect.any(Object),
        offset: ['-30%', 'end center'],
      });
    });

    it('should create transform for opacity based on scroll progress', () => {
      render(<TextGradientScroll text="Test" />);
      
      expect(useTransform).toHaveBeenCalledWith(
        expect.any(Object), // scrollYProgress
        expect.any(Array),  // range
        [0, 1]             // output range
      );
    });
  });

  describe('Edge cases', () => {
    it('should handle empty text', () => {
      render(<TextGradientScroll text="" />);
      const paragraph = screen.getByText('');
      expect(paragraph).toBeInTheDocument();
    });

    it('should handle single character', () => {
      render(<TextGradientScroll text="A" />);
      expect(screen.getAllByText('A')).toHaveLength(2); // absolute + motion span
    });

    it('should handle text with multiple spaces', () => {
      render(<TextGradientScroll text="Hello   World" />);
      expect(screen.getByText('Hello')).toBeInTheDocument();
      expect(screen.getByText('World')).toBeInTheDocument();
    });
  });
});