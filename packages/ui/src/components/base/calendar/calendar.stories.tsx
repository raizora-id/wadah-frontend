import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './index';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Base/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    children: 'Default Calendar',
  },
};

// Add more stories as needed based on component variants
