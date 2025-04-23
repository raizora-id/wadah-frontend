import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './index';

const meta = {
  title: 'Charts/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    height: 400,
  },
};

export const DonutChart: Story = {
  args: {
    data: sampleData,
    height: 400,
    innerRadius: 60,
    outerRadius: 100,
  },
};

export const CustomColors: Story = {
  args: {
    data: sampleData.map((item, index) => ({
      ...item,
      color: ['#003f5c', '#58508d', '#bc5090', '#ff6361'][index],
    })),
    height: 400,
  },
}; 