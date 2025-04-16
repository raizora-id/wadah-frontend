import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './index';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/Base/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  args: {
    children: 'Default ScrollArea',
  },
};

// Add more stories as needed based on component variants
