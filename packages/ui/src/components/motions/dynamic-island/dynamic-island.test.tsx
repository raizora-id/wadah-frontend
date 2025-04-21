import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import {
  DynamicIsland,
  DynamicIslandProvider,
  SIZE_PRESETS,
  useDynamicIslandSize,
} from './';
import { renderHook } from '@testing-library/react-hooks';

describe('DynamicIsland', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <DynamicIslandProvider>{children}</DynamicIslandProvider>
  );

  it('should render with default size', () => {
    render(
      <DynamicIslandProvider>
        <DynamicIsland>Test Content</DynamicIsland>
      </DynamicIslandProvider>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should change size when setSize is called', () => {
    const { result } = renderHook(() => useDynamicIslandSize(), { wrapper });

    act(() => {
      result.current.setSize(SIZE_PRESETS.LARGE);
    });

    expect(result.current.state.size).toBe(SIZE_PRESETS.LARGE);
  });

  it('should handle animation queue', async () => {
    const { result } = renderHook(() => useDynamicIslandSize(), { wrapper });
    const animationSteps = [
      { size: SIZE_PRESETS.LARGE, delay: 100 },
      { size: SIZE_PRESETS.SMALL, delay: 100 },
    ];

    act(() => {
      result.current.scheduleAnimation(animationSteps);
    });

    expect(result.current.state.isAnimating).toBe(true);
    expect(result.current.state.animationQueue).toEqual(animationSteps);

    // Wait for animations to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
    });

    expect(result.current.state.isAnimating).toBe(false);
  });

  it('should maintain previous size state', () => {
    const { result } = renderHook(() => useDynamicIslandSize(), { wrapper });

    act(() => {
      result.current.setSize(SIZE_PRESETS.LARGE);
    });

    expect(result.current.state.previousSize).toBe(SIZE_PRESETS.DEFAULT);
    
    act(() => {
      result.current.setSize(SIZE_PRESETS.SMALL);
    });

    expect(result.current.state.previousSize).toBe(SIZE_PRESETS.LARGE);
  });
});