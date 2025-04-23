import React from 'react';
import { render, screen } from '@testing-library/react';
import { LineChart } from './index';

const mockData = [
  { month: 'Jan', sales: 4000, profit: 2400 },
  { month: 'Feb', sales: 3000, profit: 1398 },
];

describe('LineChart', () => {
  it('renders without crashing', () => {
    render(
      <LineChart
        data={mockData}
        xAxisDataKey="month"
        lines={[{ dataKey: 'sales' }]}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with multiple lines', () => {
    render(
      <LineChart
        data={mockData}
        xAxisDataKey="month"
        lines={[
          { dataKey: 'sales', name: 'Total Sales' },
          { dataKey: 'profit', name: 'Net Profit' },
        ]}
      />
    );
    expect(screen.getByText('Total Sales')).toBeInTheDocument();
    expect(screen.getByText('Net Profit')).toBeInTheDocument();
  });

  it('applies custom height', () => {
    const { container } = render(
      <LineChart
        data={mockData}
        xAxisDataKey="month"
        lines={[{ dataKey: 'sales' }]}
        height={300}
      />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({ height: '300px' });
  });

  it('applies custom width', () => {
    const { container } = render(
      <LineChart
        data={mockData}
        xAxisDataKey="month"
        lines={[{ dataKey: 'sales' }]}
        width="50%"
      />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({ width: '50%' });
  });
}); 