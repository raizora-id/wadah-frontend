import { renderHook, act } from '@testing-library/react';
import { useMediaQuery } from './use-media-query';
import { vi } from 'vitest';

describe('useMediaQuery', () => {
  it('should return a boolean for the query', () => {
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(min-width: 600px)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    }));
    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'));
    expect(typeof result.current).toBe('boolean');
  });
});
