import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Runs cleanup after each test case to avoid test leakage
afterEach(() => {
  cleanup();
});