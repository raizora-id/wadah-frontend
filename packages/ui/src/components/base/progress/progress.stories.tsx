import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './index';

const meta: Meta<typeof Progress> = {
  title: 'Components/Base/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    // Add appropriate props for this component
  },
};

// Add more stories as needed based on component variants
