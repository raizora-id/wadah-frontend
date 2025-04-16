import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './index';

const meta: Meta<typeof Label> = {
  title: 'Components/Base/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

// Add more stories as needed based on component variants
