import type { Meta, StoryObj } from '@storybook/react';
import { OTPInput } from './index.tsx';

const meta: Meta<typeof OTPInput> = {
  title: 'Components/Base/OTPInput',
  component: OTPInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {
  args: {
    children: 'Default InputOtp',
  },
};

// Add more stories as needed based on component variants
