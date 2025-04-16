import type { Meta, StoryObj } from '@storybook/react';
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from './index';

const meta: Meta<typeof Marquee> = {
  title: 'Components/Base/Marquee',
  component: Marquee,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Marquee {...args}>
        <MarqueeContent>
          <MarqueeItem>Item 1</MarqueeItem>
          <MarqueeItem>Item 2</MarqueeItem>
          <MarqueeItem>Item 3</MarqueeItem>
          <MarqueeItem>Item 4</MarqueeItem>
          <MarqueeItem>Item 5</MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  ),
};

export const WithFade: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Marquee {...args}>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          <MarqueeItem>Item 1</MarqueeItem>
          <MarqueeItem>Item 2</MarqueeItem>
          <MarqueeItem>Item 3</MarqueeItem>
          <MarqueeItem>Item 4</MarqueeItem>
          <MarqueeItem>Item 5</MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  ),
};

export const CustomSpeed: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Marquee {...args}>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent speed={20}>
          <MarqueeItem>Item 1</MarqueeItem>
          <MarqueeItem>Item 2</MarqueeItem>
          <MarqueeItem>Item 3</MarqueeItem>
          <MarqueeItem>Item 4</MarqueeItem>
          <MarqueeItem>Item 5</MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  ),
};

export const ReverseDirection: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Marquee {...args}>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent direction="right">
          <MarqueeItem>Item 1</MarqueeItem>
          <MarqueeItem>Item 2</MarqueeItem>
          <MarqueeItem>Item 3</MarqueeItem>
          <MarqueeItem>Item 4</MarqueeItem>
          <MarqueeItem>Item 5</MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  ),
};

export const CustomItems: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Marquee {...args}>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          <MarqueeItem className="bg-blue-100 p-4 rounded-md">Custom Item 1</MarqueeItem>
          <MarqueeItem className="bg-green-100 p-4 rounded-md">Custom Item 2</MarqueeItem>
          <MarqueeItem className="bg-red-100 p-4 rounded-md">Custom Item 3</MarqueeItem>
          <MarqueeItem className="bg-yellow-100 p-4 rounded-md">Custom Item 4</MarqueeItem>
          <MarqueeItem className="bg-purple-100 p-4 rounded-md">Custom Item 5</MarqueeItem>
        </MarqueeContent>
      </Marquee>
    </div>
  ),
};