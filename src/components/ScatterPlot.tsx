import React from 'react';
import { Scatter } from 'react-chartjs-2';

interface ScatterPlotProps {
  data: { x: number; y: number; cluster?: number; isBoundary?: boolean }[];
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
  const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

  const chartData = {
    datasets: data.map((point, index) => ({
      label: `Point ${index + 1}`,
      data: [{ x: point.x, y: point.y }],
      backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
    })),
  };

  return <Scatter data={chartData} />;
};

export default ScatterPlot;