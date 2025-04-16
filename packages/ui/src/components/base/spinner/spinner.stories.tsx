import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './index';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Base/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'circle',
        'pinwheel',
        'circle-filled',
        'ellipsis',
        'ring',
        'bars',
        'infinite',
      ],
      description: 'The visual style of the spinner',
    },
    size: {
      control: { type: 'number', min: 16, max: 96, step: 4 },
      description: 'The size of the spinner in pixels',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 32,
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    size: 32,
  },
};

export const Pinwheel: Story = {
  args: {
    variant: 'pinwheel',
    size: 32,
  },
};

export const CircleFilled: Story = {
  args: {
    variant: 'circle-filled',
    size: 32,
  },
};

export const Ellipsis: Story = {
  args: {
    variant: 'ellipsis',
    size: 32,
  },
};

export const Ring: Story = {
  args: {
    variant: 'ring',
    size: 32,
  },
};

export const Bars: Story = {
  args: {
    variant: 'bars',
    size: 32,
  },
};

export const Infinite: Story = {
  args: {
    variant: 'infinite',
    size: 32,
  },
};

export const Colors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Spinner {...args} className="text-primary" />
      <Spinner {...args} className="text-secondary" />
      <Spinner {...args} className="text-destructive" />
      <Spinner {...args} className="text-muted-foreground" />
      <Spinner {...args} className="text-blue-500" />
      <Spinner {...args} className="text-green-500" />
      <Spinner {...args} className="text-yellow-500" />
      <Spinner {...args} className="text-purple-500" />
    </div>
  ),
  args: {
    variant: 'default',
    size: 32,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-4">
      <Spinner {...args} size={16} />
      <Spinner {...args} size={24} />
      <Spinner {...args} size={32} />
      <Spinner {...args} size={48} />
      <Spinner {...args} size={64} />
    </div>
  ),
  args: {
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8">
      <div className="flex flex-col items-center">
        <Spinner variant="default" size={32} />
        <span className="mt-2 text-sm">Default</span>
      </div>
      <div className="flex flex-col items-center">
        <Spinner variant="circle" size={32} />
        <span className="mt-2 text-sm">Circle</span>
      </div>
      <div className="flex flex-col items-center">
        <Spinner variant="pinwheel" size={32} />
        <span className="mt-2 text-sm">Pinwheel</span>
      </div>
      <div className="flex flex-col items-center">
        <Spinner variant="circle-filled" size={32} />
        <span className="mt-2 text-sm">Circle Filled</span>
      </div>
      <div className="flex flex-col items-center">
        <Spinner variant="ellipsis" size={32} />
        <span className="mt-2 text-sm">Ellipsis</span>
      </div>
      <div className="flex flex-col items-center">
        <Spinner variant="ring" size={32} />
        <span className="mt-2 text-sm">Ring</span>
      </div>
      <div className="flex flex-col items-center">
        <Spinner variant="bars" size={32} />
        <span className="mt-2 text-sm">Bars</span>
      </div>
      <div className="flex flex-col items-center">
        <Spinner variant="infinite" size={32} />
        <span className="mt-2 text-sm">Infinite</span>
      </div>
    </div>
  ),
};