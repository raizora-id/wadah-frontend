import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './index';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Base/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    children: 'Default Carousel',
  },
};

// Add more stories as needed based on component variants
