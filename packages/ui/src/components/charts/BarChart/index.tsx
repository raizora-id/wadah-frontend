import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface BarChartProps {
  data: Array<Record<string, any>>;
  bars: Array<{
    dataKey: string;
    fill?: string;
    name?: string;
    stackId?: string;
  }>;
  xAxisDataKey: string;
  height?: number | string;
  width?: number | string;
  stacked?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  bars,
  xAxisDataKey,
  height = 400,
  width = '100%',
  stacked = false,
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            fill={bar.fill}
            name={bar.name || bar.dataKey}
            stackId={stacked ? 'stack' : undefined}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}; 