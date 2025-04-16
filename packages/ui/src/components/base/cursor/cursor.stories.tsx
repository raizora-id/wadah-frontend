import type { Meta, StoryObj } from '@storybook/react';
import { Cursor, CursorPointer, CursorBody, CursorName, CursorMessage } from './index';

const meta: Meta<typeof Cursor> = {
  title: 'Components/Base/Cursor',
  component: Cursor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cursor>;

export const Default: Story = {
  render: (args) => (
    <div className="p-12">
      <Cursor {...args}>
        <CursorPointer />
        <CursorBody>Cursor hover text</CursorBody>
      </Cursor>
    </div>
  ),
};

export const WithNameAndMessage: Story = {
  render: (args) => (
    <div className="p-12">
      <Cursor {...args}>
        <CursorPointer />
        <CursorBody>
          <CursorName>John Doe</CursorName>
          <CursorMessage>Typing a message...</CursorMessage>
        </CursorBody>
      </Cursor>
    </div>
  ),
};

export const CustomColors: Story = {
  render: (args) => (
    <div className="p-12">
      <Cursor {...args}>
        <CursorPointer className="text-blue-500" />
        <CursorBody className="bg-blue-100 text-blue-800">
          <CursorName>Custom styled cursor</CursorName>
        </CursorBody>
      </Cursor>
    </div>
  ),
};

export const PointerOnly: Story = {
  render: (args) => (
    <div className="p-12">
      <Cursor {...args}>
        <CursorPointer />
      </Cursor>
    </div>
  ),
};