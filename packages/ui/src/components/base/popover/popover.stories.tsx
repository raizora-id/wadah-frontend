import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './index';

const meta: Meta<typeof Popover> = {
  title: 'Components/Base/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: 'Default Popover',
  },
};

// Add more stories as needed based on component variants
