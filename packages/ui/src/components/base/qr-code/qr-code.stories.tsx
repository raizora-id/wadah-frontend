import type { Meta, StoryObj } from '@storybook/react';
import { QrCode } from './index';

const meta: Meta<typeof QrCode> = {
  title: 'Components/Base/QrCode',
  component: QrCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QrCode>;

export const Default: Story = {
  args: {
    children: 'Default QrCode',
  },
};

// Add more stories as needed based on component variants
