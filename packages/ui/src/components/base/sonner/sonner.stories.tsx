import type { Meta, StoryObj } from '@storybook/react';
import { Sonner } from './index';

const meta: Meta<typeof Sonner> = {
  title: 'Components/Base/Sonner',
  component: Sonner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sonner>;

export const Default: Story = {
  args: {
    children: 'Default Sonner',
  },
};

// Add more stories as needed based on component variants
