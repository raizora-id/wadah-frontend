import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './index';

const meta: Meta<typeof Modal> = {
  title: 'Components/Base/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: 'Default Modal',
  },
};

// Add more stories as needed based on component variants
