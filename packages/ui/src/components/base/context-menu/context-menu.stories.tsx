import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from './index';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/Base/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {
    children: 'Default ContextMenu',
  },
};

// Add more stories as needed based on component variants
