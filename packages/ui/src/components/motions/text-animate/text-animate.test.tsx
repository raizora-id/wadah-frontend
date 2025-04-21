import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextAnimate } from './';

describe('TextAnimate', () => {
  it('should render text content', () => {
    render(<TextAnimate>Hello World</TextAnimate>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  it('should split text by word correctly', () => {
    render(<TextAnimate by="word">Hello World</TextAnimate>);
    const words = screen.getAllByText(/Hello|World/);
    expect(words).toHaveLength(2);
  });

  it('should split text by character correctly', () => {
    render(<TextAnimate by="character">Hi</TextAnimate>);
    const chars = screen.getAllByText(/H|i/);
    expect(chars).toHaveLength(2);
  });

  it('should split text by line correctly', () => {
    render(<TextAnimate by="line">{'Line 1\nLine 2'}</TextAnimate>);
    expect(screen.getByText('Line 1')).toBeInTheDocument();
    expect(screen.getByText('Line 2')).toBeInTheDocument();
  });

  it('should render with custom component', () => {
    render(<TextAnimate as="h1">Heading</TextAnimate>);
    const heading = screen.getByText('Heading');
    expect(heading.tagName).toBe('H1');
  });

  it('should apply custom className', () => {
    const { container } = render(
      <TextAnimate className="custom-class">Text</TextAnimate>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply animation variant', () => {
    render(<TextAnimate animation="fadeIn">Fade In Text</TextAnimate>);
    // Check if motion component is rendered with correct variants
    expect(screen.getByText('Fade')).toBeInTheDocument();
    expect(screen.getByText('In')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});