import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HeartIcon, StarIcon, ThumbsUpIcon } from 'lucide-react';
import { Rating, RatingButton } from './index';

const meta: Meta<typeof Rating> = {
  title: 'Components/Base/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'The controlled value of the rating',
    },
    defaultValue: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'The default value of the rating',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the rating is read-only',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: (args) => (
    <Rating {...args}>
      <RatingButton />
      <RatingButton />
      <RatingButton />
      <RatingButton />
      <RatingButton />
    </Rating>
  ),
  args: {
    defaultValue: 3,
  },
};

export const ReadOnly: Story = {
  render: (args) => (
    <Rating {...args}>
      <RatingButton />
      <RatingButton />
      <RatingButton />
      <RatingButton />
      <RatingButton />
    </Rating>
  ),
  args: {
    value: 4,
    readOnly: true,
  },
};

export const CustomIcons: Story = {
  render: (args) => (
    <Rating {...args}>
      <RatingButton icon={<HeartIcon />} />
      <RatingButton icon={<HeartIcon />} />
      <RatingButton icon={<HeartIcon />} />
      <RatingButton icon={<HeartIcon />} />
      <RatingButton icon={<HeartIcon />} />
    </Rating>
  ),
  args: {
    defaultValue: 3,
  },
};

export const CustomSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Rating defaultValue={3}>
        <RatingButton size={16} />
        <RatingButton size={16} />
        <RatingButton size={16} />
        <RatingButton size={16} />
        <RatingButton size={16} />
      </Rating>
      
      <Rating defaultValue={3}>
        <RatingButton size={24} />
        <RatingButton size={24} />
        <RatingButton size={24} />
        <RatingButton size={24} />
        <RatingButton size={24} />
      </Rating>
      
      <Rating defaultValue={3}>
        <RatingButton size={32} />
        <RatingButton size={32} />
        <RatingButton size={32} />
        <RatingButton size={32} />
        <RatingButton size={32} />
      </Rating>
    </div>
  ),
};

export const DifferentIcons: Story = {
  render: (args) => (
    <Rating {...args}>
      <RatingButton icon={<StarIcon />} />
      <RatingButton icon={<HeartIcon />} />
      <RatingButton icon={<ThumbsUpIcon />} />
      <RatingButton icon={<StarIcon />} />
      <RatingButton icon={<HeartIcon />} />
    </Rating>
  ),
  args: {
    defaultValue: 3,
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState(2);
    
    return (
      <div className="flex flex-col gap-4 items-center">
        <Rating value={value} onValueChange={setValue}>
          <RatingButton />
          <RatingButton />
          <RatingButton />
          <RatingButton />
          <RatingButton />
        </Rating>
        <div className="text-sm">Current value: {value}</div>
        <div className="flex gap-2">
          <button 
            className="px-2 py-1 bg-blue-500 text-white rounded text-sm"
            onClick={() => setValue(Math.max(1, value - 1))}
          >
            Decrease
          </button>
          <button 
            className="px-2 py-1 bg-blue-500 text-white rounded text-sm"
            onClick={() => setValue(Math.min(5, value + 1))}
          >
            Increase
          </button>
        </div>
      </div>
    );
  },
};