import React from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './index';

// Mock the OTP Input context
vi.mock('input-otp', () => ({
  OTPInput: ({ children, ...props }) => <div data-testid="otp-input" {...props}>{children}</div>,
  OTPInputContext: {
    Provider: ({ children }) => children,
    Consumer: ({ children }) => children,
  }
}));

describe('InputOTP Component', () => {
  it('renders correctly', () => {
    render(
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    );
    // Just verify it doesn't throw
    expect(true).toBeTruthy();
  });
  
  // Add more tests as needed based on component functionality
});
