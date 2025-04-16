import type { Meta, StoryObj } from '@storybook/react';
import { InfoIcon, BellIcon, AlertTriangleIcon } from 'lucide-react';
import { Banner, BannerIcon, BannerTitle, BannerAction, BannerClose } from './index';

const meta: Meta<typeof Banner> = {
  title: 'Components/Base/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inset: {
      control: 'boolean',
      description: 'Whether to apply rounded corners',
    },
    visible: {
      control: 'boolean',
      description: 'Whether the banner is visible',
    },
    defaultVisible: {
      control: 'boolean',
      description: 'Default visibility state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  render: (args) => (
    <div className="min-w-[400px]">
      <Banner {...args}>
        <BannerIcon icon={InfoIcon} />
        <BannerTitle>This is a default banner message</BannerTitle>
        <BannerClose />
      </Banner>
    </div>
  ),
  args: {
    inset: false,
  },
};

export const WithAction: Story = {
  render: (args) => (
    <div className="min-w-[400px]">
      <Banner {...args}>
        <BannerIcon icon={BellIcon} />
        <BannerTitle>New notification system available</BannerTitle>
        <BannerAction>Update</BannerAction>
        <BannerClose />
      </Banner>
    </div>
  ),
  args: {
    inset: false,
  },
};

export const Inset: Story = {
  render: (args) => (
    <div className="min-w-[400px] p-4 bg-gray-100 dark:bg-gray-800">
      <Banner {...args}>
        <BannerIcon icon={AlertTriangleIcon} />
        <BannerTitle>This is an inset banner with rounded corners</BannerTitle>
        <BannerAction>Learn More</BannerAction>
        <BannerClose />
      </Banner>
    </div>
  ),
  args: {
    inset: true,
  },
};

export const WithoutClose: Story = {
  render: (args) => (
    <div className="min-w-[400px]">
      <Banner {...args}>
        <BannerIcon icon={InfoIcon} />
        <BannerTitle>This banner cannot be closed</BannerTitle>
        <BannerAction>Acknowledge</BannerAction>
      </Banner>
    </div>
  ),
  args: {
    inset: false,
  },
};