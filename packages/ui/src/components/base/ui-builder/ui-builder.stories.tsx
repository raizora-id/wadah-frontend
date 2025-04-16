import type { Meta, StoryObj } from '@storybook/react';
import Builder from './index';

const meta: Meta<typeof Builder> = {
  title: 'Components/Base/UI Builder',
  component: Builder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Builder>;

export const SimpleButton: Story = {
  args: {
    configs: [
      {
        type: 'Button',
        props: {
          variant: 'default',
        },
        children: 'Simple Button',
      },
    ],
  },
};

export const MultipleButtons: Story = {
  args: {
    configs: [
      {
        type: 'Button',
        props: {
          variant: 'default',
          className: 'mr-2',
        },
        children: 'Default Button',
      },
      {
        type: 'Button',
        props: {
          variant: 'secondary',
          className: 'mr-2',
        },
        children: 'Secondary Button',
      },
      {
        type: 'Button',
        props: {
          variant: 'destructive',
        },
        children: 'Destructive Button',
      },
    ],
  },
};

export const Alert: Story = {
  args: {
    configs: [
      {
        type: 'Alert',
        props: {
          variant: 'default',
        },
        children: [
          {
            type: 'AlertTitle',
            props: {},
            children: 'Information',
          },
          {
            type: 'AlertDescription',
            props: {},
            children: 'This is an informational alert built using the UI Builder.',
          },
        ],
      },
    ],
  },
};

export const ComplexLayout: Story = {
  args: {
    configs: [
      {
        type: 'Alert',
        props: {
          variant: 'default',
          className: 'mb-4',
        },
        children: [
          {
            type: 'AlertTitle',
            props: {},
            children: 'User Profile',
          },
          {
            type: 'AlertDescription',
            props: {},
            children: 'This is a sample user profile card built with UI Builder.',
          },
        ],
      },
      {
        type: 'Accordion',
        props: {
          type: 'single',
          collapsible: true,
          className: 'mb-4',
        },
        children: [
          {
            type: 'Avatar',
            props: {
              className: 'mb-2',
            },
            children: 'JD',
          },
          {
            type: 'Button',
            props: {
              variant: 'outline',
              className: 'mr-2',
            },
            children: 'Edit Profile',
          },
          {
            type: 'Button',
            props: {
              variant: 'destructive',
            },
            children: 'Delete Account',
          },
        ],
      },
    ],
  },
};