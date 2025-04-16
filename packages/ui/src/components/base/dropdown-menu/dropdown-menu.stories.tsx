import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './index';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Base/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    children: 'Default DropdownMenu',
  },
};

// Add more stories as needed based on component variants
