import React from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Calendar } from './index';

describe('Calendar Component', () => {
  it('renders correctly', () => {
    // Simply check that the calendar renders without error
    render(<Calendar mode="single" />);
    expect(true).toBeTruthy();
  });
  
  // Add more tests as needed based on component functionality
});
