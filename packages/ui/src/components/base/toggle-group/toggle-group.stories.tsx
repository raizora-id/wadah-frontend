import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup } from './index';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/Base/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  args: {
    children: 'Default ToggleGroup',
  },
};

// Add more stories as needed based on component variants
