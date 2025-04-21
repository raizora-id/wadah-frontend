import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useInkCursor } from './';

// Mock canvas and context
const mockContext = {
  clearRect: jest.fn(),
  createLinearGradient: jest.fn(() => ({
    addColorStop: jest.fn(),
  })),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  quadraticCurveTo: jest.fn(),
  lineTo: jest.fn(),
  stroke: jest.fn(),
};

const mockCanvas = {
  getContext: jest.fn(() => mockContext),
  width: 1000,
  height: 1000,
};

describe('InkCursor', () => {
  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    
    // Mock canvas element
    HTMLCanvasElement.prototype.getContext = jest.fn(() => mockContext);
    
    // Mock window properties
    global.innerWidth = 1000;
    global.innerHeight = 1000;
    
    // Mock requestAnimationFrame
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => setTimeout(cb, 0));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render canvas element', () => {
    const { container } = render(useInkCursor());
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass('h-screen w-screen');
  });

  it('should update mouse position on mousemove', () => {
    const { container } = render(useInkCursor());
    const canvas = container.querySelector('canvas');

    fireEvent.mouseMove(canvas!, {
      clientX: 500,
      clientY: 500,
    });

    // Verify that the context methods were called
    expect(mockContext.clearRect).toHaveBeenCalled();
    expect(mockContext.beginPath).toHaveBeenCalled();
  });

  it('should handle touch events', () => {
    const { container } = render(useInkCursor());
    const canvas = container.querySelector('canvas');

    fireEvent.touchMove(canvas!, {
      targetTouches: [{ clientX: 500, clientY: 500 }],
    });

    // Verify that the context methods were called
    expect(mockContext.clearRect).toHaveBeenCalled();
    expect(mockContext.beginPath).toHaveBeenCalled();
  });

  it('should handle window resize', () => {
    render(useInkCursor());

    // Trigger resize event
    fireEvent(window, new Event('resize'));

    // Verify that canvas dimensions were updated
    expect(mockCanvas.width).toBe(1000);
    expect(mockCanvas.height).toBe(1000);
  });
});