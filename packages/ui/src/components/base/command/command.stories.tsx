import type { Meta, StoryObj } from '@storybook/react';
import { Command } from './index';

const meta: Meta<typeof Command> = {
  title: 'Components/Base/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {
    children: 'Default Command',
  },
};

// Add more stories as needed based on component variants
