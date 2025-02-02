import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Point, Cluster, Boundary } from '../types';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

interface ScatterPlotProps {
  points: Point[];
  clusters: Cluster[];
  boundaries: Boundary[];
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({ points, clusters, boundaries }) => {
  // Массив цветов для кластеров
  const colors = [
    'rgba(255, 99, 132, 0.8)', // Красный
    'rgba(54, 162, 235, 0.8)', // Синий
    'rgba(75, 192, 192, 0.8)', // Зелёный
    'rgba(255, 206, 86, 0.8)', // Жёлтый
    'rgba(153, 102, 255, 0.8)', // Фиолетовый
    'rgba(255, 159, 64, 0.8)', // Оранжевый
    'rgba(199, 199, 199, 0.8)', // Серый
  ];

  // Создаем datasets для точек
  const pointDatasets = clusters.map((cluster, index) => ({
    label: `Cluster ${cluster.id}`,
    data: cluster.points.map((point) => ({ x: point.x, y: point.y })),
    backgroundColor: colors[cluster.id % colors.length],
    pointStyle: 'circle',
    pointRadius: 5,
    borderColor: colors[cluster.id % colors.length],
  }));

  // Создаем datasets для границ
  const boundaryDatasets = boundaries.map((boundary, index) => ({
    label: `Boundary ${boundary.clusterId}.${boundary.id}`,
    data: boundary.points.map((point) => ({ x: point.x, y: point.y })),
    backgroundColor: colors[boundary.clusterId % colors.length],
    pointStyle: 'star',
    pointRadius: 10,
    borderColor: colors[(boundary.id + boundary.clusterId) % colors.length],
    borderWidth: 3,
  }));

  // Создаем datasets для некластеризованных точек
  const unclusteredDataset = {
    label: 'Unclustered Points',
    data: points.map((point) => ({ x: point.x, y: point.y })),
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Серый цвет для некластеризованных точек
    pointStyle: 'circle',
    pointRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  };

  const chartData = {
    datasets: [...pointDatasets, ...boundaryDatasets, unclusteredDataset],
  };

  const options = {
    scales: {
      x: {
        type: 'linear' as const,
        position: 'bottom' as const,
        min: -10,
        max: 10,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        type: 'linear' as const,
        min: -10,
        max: 10,
        ticks: {
          stepSize: 1,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    aspectRatio: 1,
  };

  return <Scatter data={chartData} options={options} />;
};

export default ScatterPlot;