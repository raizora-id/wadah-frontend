import type { Meta, StoryObj } from '@storybook/react';
import { Resizable } from './index';

const meta: Meta<typeof Resizable> = {
  title: 'Components/Base/Resizable',
  component: Resizable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Resizable>;

export const Default: Story = {
  args: {
    children: 'Default Resizable',
  },
};

// Add more stories as needed based on component variants
