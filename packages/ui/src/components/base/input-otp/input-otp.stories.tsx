import type { Meta, StoryObj } from '@storybook/react';
import { InputOtp } from './index';

const meta: Meta<typeof InputOtp> = {
  title: 'Components/Base/InputOtp',
  component: InputOtp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputOtp>;

export const Default: Story = {
  args: {
    children: 'Default InputOtp',
  },
};

// Add more stories as needed based on component variants
