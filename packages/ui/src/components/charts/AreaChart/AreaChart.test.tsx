import React from 'react';
import { render, screen } from '@testing-library/react';
import { AreaChart } from './index';

const mockData = [
  { month: 'Jan', users: 4000, sessions: 2400 },
  { month: 'Feb', users: 3000, sessions: 1398 },
];

describe('AreaChart', () => {
  it('renders without crashing', () => {
    render(
      <AreaChart
        data={mockData}
        xAxisDataKey="month"
        areas={[{ dataKey: 'users' }]}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders with multiple areas', () => {
    render(
      <AreaChart
        data={mockData}
        xAxisDataKey="month"
        areas={[
          { dataKey: 'users', name: 'Total Users' },
          { dataKey: 'sessions', name: 'Total Sessions' },
        ]}
      />
    );
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('Total Sessions')).toBeInTheDocument();
  });

  it('renders stacked areas', () => {
    render(
      <AreaChart
        data={mockData}
        xAxisDataKey="month"
        areas={[
          { dataKey: 'users' },
          { dataKey: 'sessions' },
        ]}
        stacked
      />
    );
    // Check if areas have the same stackId
    const areas = screen.getAllByRole('img');
    expect(areas[0]).toHaveAttribute('stackId', 'stack');
    expect(areas[1]).toHaveAttribute('stackId', 'stack');
  });

  it('applies custom dimensions', () => {
    const { container } = render(
      <AreaChart
        data={mockData}
        xAxisDataKey="month"
        areas={[{ dataKey: 'users' }]}
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