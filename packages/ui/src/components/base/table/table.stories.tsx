import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './index';

const meta: Meta<typeof Table> = {
  title: 'Components/Base/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: 'Default Table',
  },
};

// Add more stories as needed based on component variants
