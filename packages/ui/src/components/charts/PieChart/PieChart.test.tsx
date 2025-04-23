import React from 'react';
import { render, screen } from '@testing-library/react';
import { PieChart } from './index';

const mockData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];

describe('PieChart', () => {
  it('renders without crashing', () => {
    render(<PieChart data={mockData} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('displays legend items', () => {
    render(<PieChart data={mockData} />);
    expect(screen.getByText('Group A')).toBeInTheDocument();
    expect(screen.getByText('Group B')).toBeInTheDocument();
  });

  it('applies custom dimensions', () => {
    const { container } = render(
      <PieChart
        data={mockData}
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

  it('renders as donut chart with custom radius', () => {
    render(
      <PieChart
        data={mockData}
        innerRadius={60}
        outerRadius={100}
      />
    );
    const pie = screen.getByRole('img');
    expect(pie).toHaveAttribute('innerRadius', '60');
    expect(pie).toHaveAttribute('outerRadius', '100');
  });

  it('applies custom colors', () => {
    const customColors = ['#ff0000', '#00ff00'];
    render(
      <PieChart
        data={mockData}
        colors={customColors}
      />
    );
    const cells = screen.getAllByRole('cell');
    cells.forEach((cell, index) => {
      expect(cell).toHaveAttribute('fill', customColors[index]);
    });
  });
}); 