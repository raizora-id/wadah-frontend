import type { Meta, StoryObj } from '@storybook/react';
import { CarouselIndicator } from './index';

const meta: Meta<typeof CarouselIndicator> = {
  title: 'Components/Base/CarouselIndicator',
  component: CarouselIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CarouselIndicator>;

export const Default: Story = {
  args: {
    children: 'Default CarouselIndicator',
  },
};

// Add more stories as needed based on component variants
