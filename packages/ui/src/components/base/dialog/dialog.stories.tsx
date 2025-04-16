import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './index';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Base/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: 'Default Dialog',
  },
};

// Add more stories as needed based on component variants
