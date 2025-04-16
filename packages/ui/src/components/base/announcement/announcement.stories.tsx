import type { Meta, StoryObj } from '@storybook/react';
import { Announcement, AnnouncementTag, AnnouncementTitle } from './index';

const meta: Meta<typeof Announcement> = {
  title: 'Components/Base/Announcement',
  component: Announcement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style of the announcement',
    },
    themed: {
      control: 'boolean',
      description: 'Whether to apply themed styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Announcement>;

export const Default: Story = {
  args: {
    children: 'New Feature Available',
    variant: 'outline',
    themed: false,
  },
};

export const WithTag: Story = {
  render: (args) => (
    <Announcement {...args}>
      <AnnouncementTag>New</AnnouncementTag>
      <AnnouncementTitle>Feature announcement with tag</AnnouncementTitle>
    </Announcement>
  ),
  args: {
    variant: 'outline',
    themed: false,
  },
};

export const Themed: Story = {
  render: (args) => (
    <Announcement {...args}>
      <AnnouncementTag>Update</AnnouncementTag>
      <AnnouncementTitle>Themed announcement with tag</AnnouncementTitle>
    </Announcement>
  ),
  args: {
    variant: 'outline',
    themed: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Announcement',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Warning Announcement',
    variant: 'destructive',
  },
};