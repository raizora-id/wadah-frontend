import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart } from './index';

const meta = {
  title: 'Charts/AreaChart',
  component: AreaChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { month: 'Jan', users: 4000, sessions: 2400 },
  { month: 'Feb', users: 3000, sessions: 1398 },
  { month: 'Mar', users: 2000, sessions: 9800 },
  { month: 'Apr', users: 2780, sessions: 3908 },
  { month: 'May', users: 1890, sessions: 4800 },
  { month: 'Jun', users: 2390, sessions: 3800 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    xAxisDataKey: 'month',
    areas: [
      { dataKey: 'users', fill: '#8884d8' },
      { dataKey: 'sessions', fill: '#82ca9d' },
    ],
    height: 400,
  },
};

export const SingleArea: Story = {
  args: {
    data: sampleData,
    xAxisDataKey: 'month',
    areas: [{ dataKey: 'users', fill: '#8884d8' }],
    height: 300,
  },
};

export const StackedAreas: Story = {
  args: {
    data: sampleData,
    xAxisDataKey: 'month',
    areas: [
      { dataKey: 'users', name: 'Total Users', fill: '#8884d8' },
      { dataKey: 'sessions', name: 'Total Sessions', fill: '#82ca9d' },
    ],
    stacked: true,
    height: 400,
  },
}; 