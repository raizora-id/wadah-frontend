import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './index';

const meta = {
  title: 'Charts/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { month: 'Jan', sales: 4000, profit: 2400 },
  { month: 'Feb', sales: 3000, profit: 1398 },
  { month: 'Mar', sales: 2000, profit: 9800 },
  { month: 'Apr', sales: 2780, profit: 3908 },
  { month: 'May', sales: 1890, profit: 4800 },
  { month: 'Jun', sales: 2390, profit: 3800 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    xAxisDataKey: 'month',
    bars: [
      { dataKey: 'sales', fill: '#8884d8' },
      { dataKey: 'profit', fill: '#82ca9d' },
    ],
    height: 400,
  },
};

export const SingleBar: Story = {
  args: {
    data: sampleData,
    xAxisDataKey: 'month',
    bars: [{ dataKey: 'sales', fill: '#8884d8' }],
    height: 300,
  },
};

export const StackedBars: Story = {
  args: {
    data: sampleData,
    xAxisDataKey: 'month',
    bars: [
      { dataKey: 'sales', name: 'Total Sales', fill: '#8884d8' },
      { dataKey: 'profit', name: 'Net Profit', fill: '#82ca9d' },
    ],
    stacked: true,
    height: 400,
  },
}; 