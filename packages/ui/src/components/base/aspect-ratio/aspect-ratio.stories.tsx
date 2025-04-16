import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './index';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/Base/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    children: 'Default AspectRatio',
  },
};

// Add more stories as needed based on component variants
