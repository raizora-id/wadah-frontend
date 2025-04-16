import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard } from './index';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/Base/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {
    children: 'Default HoverCard',
  },
};

// Add more stories as needed based on component variants
