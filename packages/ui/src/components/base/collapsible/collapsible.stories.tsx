import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from './index';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Base/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    children: 'Default Collapsible',
  },
};

// Add more stories as needed based on component variants
