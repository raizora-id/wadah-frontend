import React from 'react';
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface AreaChartProps {
  data: Array<Record<string, any>>;
  areas: Array<{
    dataKey: string;
    fill?: string;
    stroke?: string;
    name?: string;
    stackId?: string;
  }>;
  xAxisDataKey: string;
  height?: number | string;
  width?: number | string;
  stacked?: boolean;
}

export const AreaChart: React.FC<AreaChartProps> = ({
  data,
  areas,
  xAxisDataKey,
  height = 400,
  width = '100%',
  stacked = false,
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <RechartsAreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {areas.map((area) => (
          <Area
            key={area.dataKey}
            type="monotone"
            dataKey={area.dataKey}
            fill={area.fill}
            stroke={area.stroke || area.fill}
            name={area.name || area.dataKey}
            stackId={stacked ? 'stack' : undefined}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}; 