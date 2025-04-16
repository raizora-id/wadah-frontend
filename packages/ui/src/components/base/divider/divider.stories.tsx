import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './index';

const meta: Meta<typeof Divider> = {
  title: 'Components/Base/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    children: 'Default Divider',
  },
};

// Add more stories as needed based on component variants
