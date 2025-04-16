import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from './index';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Base/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  args: {
    children: 'Default Toaster',
  },
};

// Add more stories as needed based on component variants
