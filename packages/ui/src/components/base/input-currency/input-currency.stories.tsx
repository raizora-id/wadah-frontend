import type { Meta, StoryObj } from '@storybook/react';
import { InputCurrency } from './index';

const meta: Meta<typeof InputCurrency> = {
  title: 'Components/Base/InputCurrency',
  component: InputCurrency,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputCurrency>;

export const Default: Story = {
  args: {
    children: 'Default InputCurrency',
  },
};

// Add more stories as needed based on component variants
