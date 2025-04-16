import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './index';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Base/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    children: 'Default PasswordInput',
  },
};

// Add more stories as needed based on component variants
