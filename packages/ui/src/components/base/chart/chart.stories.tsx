import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './index';

const meta: Meta<typeof Chart> = {
  title: 'Components/Base/Chart',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chart>;

export const Default: Story = {
  args: {
    children: 'Default Chart',
  },
};

// Add more stories as needed based on component variants
