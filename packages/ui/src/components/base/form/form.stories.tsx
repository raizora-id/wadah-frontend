import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './index';

const meta: Meta<typeof Form> = {
  title: 'Components/Base/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    children: 'Default Form',
  },
};

// Add more stories as needed based on component variants
