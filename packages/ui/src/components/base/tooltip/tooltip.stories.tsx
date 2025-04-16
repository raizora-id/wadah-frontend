import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './index';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Base/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: 'Default Tooltip',
  },
};

// Add more stories as needed based on component variants
