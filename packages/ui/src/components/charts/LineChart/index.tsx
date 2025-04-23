import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface LineChartProps {
  data: Array<Record<string, any>>;
  lines: Array<{
    dataKey: string;
    stroke?: string;
    name?: string;
  }>;
  xAxisDataKey: string;
  height?: number | string;
  width?: number | string;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  lines,
  xAxisDataKey,
  height = 400,
  width = '100%',
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {lines.map((line, index) => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.stroke}
            name={line.name || line.dataKey}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}; 