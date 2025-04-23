import React from 'react';
import { render, screen } from '@testing-library/react';
import { BarChart } from './index';

const mockData = [
  { month: 'Jan', sales: 4000, profit: 2400 },
  { month: 'Feb', sales: 3000, profit: 1398 },
];

describe('BarChart', () => {
  it('renders without crashing', () => {
    render(
      <BarChart
        data={mockData}
        xAxisDataKey="month"
        bars={[{ dataKey: 'sales' }]}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with multiple bars', () => {
    render(
      <BarChart
        data={mockData}
        xAxisDataKey="month"
        bars={[
          { dataKey: 'sales', name: 'Total Sales' },
          { dataKey: 'profit', name: 'Net Profit' },
        ]}
      />
    );
    expect(screen.getByText('Total Sales')).toBeInTheDocument();
    expect(screen.getByText('Net Profit')).toBeInTheDocument();
  });

  it('renders stacked bars', () => {
    render(
      <BarChart
        data={mockData}
        xAxisDataKey="month"
        bars={[
          { dataKey: 'sales' },
          { dataKey: 'profit' },
        ]}
        stacked
      />
    );
    // Check if bars have the same stackId
    const bars = screen.getAllByRole('img');
    expect(bars[0]).toHaveAttribute('stackId', 'stack');
    expect(bars[1]).toHaveAttribute('stackId', 'stack');
  });

  it('applies custom dimensions', () => {
    const { container } = render(
      <BarChart
        data={mockData}
        xAxisDataKey="month"
        bars={[{ dataKey: 'sales' }]}
        height={300}
        width="50%"
      />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({
      height: '300px',
      width: '50%',
    });
  });
}); 