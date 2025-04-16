import type { Meta, StoryObj } from '@storybook/react';
import { CalendarIcon, ChevronUpIcon, XIcon } from 'lucide-react';
import {
  Pill,
  PillAvatar,
  PillButton,
  PillStatus,
  PillIndicator,
  PillDelta,
  PillIcon,
  PillAvatarGroup
} from './index';

const meta: Meta<typeof Pill> = {
  title: 'Components/Base/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style of the pill',
    },
    themed: {
      control: 'boolean',
      description: 'Whether to apply themed styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    children: 'Default Pill',
    variant: 'secondary',
  },
};

export const WithIndicator: Story = {
  render: (args) => (
    <Pill {...args}>
      <PillIndicator />
      <span>Active</span>
    </Pill>
  ),
  args: {
    variant: 'secondary',
  },
};

export const WithStatus: Story = {
  render: (args) => (
    <Pill {...args}>
      <PillStatus>
        <PillIndicator variant="info" />
        <span>Status</span>
      </PillStatus>
      <span>Details</span>
    </Pill>
  ),
  args: {
    variant: 'secondary',
  },
};

export const WithAvatar: Story = {
  render: (args) => (
    <Pill {...args}>
      <PillAvatar fallback="JD" alt="John Doe" />
      <span>John Doe</span>
    </Pill>
  ),
  args: {
    variant: 'secondary',
  },
};

export const WithAvatarGroup: Story = {
  render: (args) => (
    <Pill {...args}>
      <PillAvatarGroup>
        <PillAvatar fallback="A" alt="Person A" />
        <PillAvatar fallback="B" alt="Person B" />
        <PillAvatar fallback="C" alt="Person C" />
      </PillAvatarGroup>
      <span>3 Assignees</span>
    </Pill>
  ),
  args: {
    variant: 'secondary',
  },
};

export const WithDelta: Story = {
  render: (args) => (
    <Pill {...args}>
      <span>Performance</span>
      <PillDelta delta={15}>+15%</PillDelta>
    </Pill>
  ),
  args: {
    variant: 'secondary',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Pill {...args}>
      <PillIcon icon={CalendarIcon} />
      <span>Today</span>
    </Pill>
  ),
  args: {
    variant: 'secondary',
  },
};

export const WithButton: Story = {
  render: (args) => (
    <Pill {...args}>
      <span>Dismissible</span>
      <PillButton>
        <XIcon size={12} />
      </PillButton>
    </Pill>
  ),
  args: {
    variant: 'secondary',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Pill variant="default">Default</Pill>
      <Pill variant="secondary">Secondary</Pill>
      <Pill variant="destructive">Destructive</Pill>
      <Pill variant="outline">Outline</Pill>
    </div>
  ),
};