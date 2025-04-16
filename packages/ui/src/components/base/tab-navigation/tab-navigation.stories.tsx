import type { Meta, StoryObj } from '@storybook/react';
import { TabNavigation } from './index';

const meta: Meta<typeof TabNavigation> = {
  title: 'Components/Base/TabNavigation',
  component: TabNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabNavigation>;

export const Default: Story = {
  args: {
    children: 'Default TabNavigation',
  },
};

// Add more stories as needed based on component variants
