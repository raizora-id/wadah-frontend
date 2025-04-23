import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  height?: number | string;
  width?: number | string;
  innerRadius?: number;
  outerRadius?: number;
  colors?: string[];
}

const DEFAULT_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const PieChart: React.FC<PieChartProps> = ({
  data,
  height = 400,
  width = '100%',
  innerRadius = 0,
  outerRadius = '80%',
  colors = DEFAULT_COLORS,
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color || colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}; 