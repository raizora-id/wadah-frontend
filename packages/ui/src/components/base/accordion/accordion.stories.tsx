import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './index';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Base/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    children: 'Default Accordion',
  },
};

// Add more stories as needed based on component variants
