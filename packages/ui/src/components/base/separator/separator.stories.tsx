import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './index';

const meta: Meta<typeof Separator> = {
  title: 'Components/Base/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {
    // Add appropriate props for this component
  },
};

// Add more stories as needed based on component variants
