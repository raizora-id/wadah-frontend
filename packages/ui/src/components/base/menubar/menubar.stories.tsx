import type { Meta, StoryObj } from '@storybook/react';
import { Menubar } from './index';

const meta: Meta<typeof Menubar> = {
  title: 'Components/Base/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  args: {
    children: 'Default Menubar',
  },
};

// Add more stories as needed based on component variants
