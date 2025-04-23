import type { Meta, StoryObj } from '@storybook/react';
import { QRCode } from './index.tsx';

const meta: Meta<typeof QRCode> = {
  title: 'Components/Base/QRCode',
  component: QRCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
  args: {
    children: 'Default QRCode',
  },
};

// Add more stories as needed based on component variants
