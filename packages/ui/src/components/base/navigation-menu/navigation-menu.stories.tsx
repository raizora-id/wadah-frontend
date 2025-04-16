import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenu } from './index';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/Base/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {
    children: 'Default NavigationMenu',
  },
};

// Add more stories as needed based on component variants
