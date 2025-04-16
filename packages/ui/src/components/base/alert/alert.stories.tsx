import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './index';
import { InfoIcon, AlertCircleIcon } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Base/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>This is a default alert to demonstrate the component.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'default',
  },
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Destructive Alert</AlertTitle>
      <AlertDescription>This is a destructive alert to demonstrate the component.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'destructive',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>With Icon</AlertTitle>
      <AlertDescription>This is an alert with an icon for additional visual cues.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'default',
  },
};

export const DestructiveWithIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertCircleIcon className="h-4 w-4" />
      <AlertTitle>Destructive With Icon</AlertTitle>
      <AlertDescription>This is a destructive alert with a warning icon.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'destructive',
  },
};

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Alert with Title Only</AlertTitle>
    </Alert>
  ),
  args: {
    variant: 'default',
  },
};

export const DescriptionOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertDescription>This is an alert with description only and no title.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'default',
  },
};