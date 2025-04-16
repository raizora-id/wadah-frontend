import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Cursor, CursorPointer, CursorBody, CursorName, CursorMessage } from './index';

describe('Cursor Component', () => {
  it('renders correctly', () => {
    render(<Cursor>Test Cursor</Cursor>);
    const element = screen.getByText('Test Cursor');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Cursor className="test-class">Test Cursor</Cursor>);
    const element = screen.getByText('Test Cursor');
    expect(element).toHaveClass('test-class');
  });
});

describe('CursorPointer Component', () => {
  it('renders correctly', () => {
    render(<CursorPointer data-testid="cursor-pointer" />);
    const element = screen.getByTestId('cursor-pointer');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CursorPointer className="test-class" data-testid="cursor-pointer" />);
    const element = screen.getByTestId('cursor-pointer');
    expect(element).toHaveClass('test-class');
  });
});

describe('CursorBody Component', () => {
  it('renders correctly', () => {
    render(<CursorBody>Test Body</CursorBody>);
    const element = screen.getByText('Test Body');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CursorBody className="test-class">Test Body</CursorBody>);
    const element = screen.getByText('Test Body');
    expect(element.parentElement).toHaveClass('test-class');
  });

  it('applies special styling when containing multiple children', () => {
    render(
      <CursorBody>
        <CursorName>User Name</CursorName>
        <CursorMessage>Message</CursorMessage>
      </CursorBody>
    );
    
    const body = screen.getByText('User Name').parentElement;
    expect(body).toHaveClass('rounded-tl');
  });
});

describe('CursorName Component', () => {
  it('renders correctly', () => {
    render(<CursorName>Test Name</CursorName>);
    const element = screen.getByText('Test Name');
    expect(element).toBeInTheDocument();
  });
});

describe('CursorMessage Component', () => {
  it('renders correctly', () => {
    render(<CursorMessage>Test Message</CursorMessage>);
    const element = screen.getByText('Test Message');
    expect(element).toBeInTheDocument();
  });
});