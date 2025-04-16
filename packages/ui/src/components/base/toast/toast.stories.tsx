import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './index';

const meta: Meta<typeof Toast> = {
  title: 'Components/Base/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    children: 'Default Toast',
  },
};

// Add more stories as needed based on component variants
