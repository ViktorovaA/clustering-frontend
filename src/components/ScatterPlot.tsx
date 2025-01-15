// import React from 'react';
// import { Scatter } from 'react-chartjs-2';

// interface ScatterPlotProps {
//   data: { x: number; y: number; cluster?: number; isBoundary?: boolean }[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

//   const chartData = {
//     datasets: data.map((point, index) => ({
//       label: `Point ${index + 1}`,
//       data: [{ x: point.x, y: point.y }],
//       backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     })),
//   };

//   return <Scatter data={chartData} />;
// };

// export default ScatterPlot;





// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import { Point } from '../types'; // Импортируем общий интерфейс

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

//   const chartData = {
//     datasets: data.map((point, index) => ({
//       label: `Point ${index + 1}`,
//       data: [{ x: point.x, y: point.y }],
//       backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     })),
//   };

//   return <Scatter data={chartData} />;
// };

// export default ScatterPlot;






// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
//   ChartOptions,
// } from 'chart.js';
// import { Point } from '../types'; // Импортируем общий интерфейс

// // Регистрируем необходимые компоненты
// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

//   const chartData = {
//     datasets: data.map((point, index) => ({
//       label: `Point ${index + 1}`,
//       data: [{ x: point.x, y: point.y }],
//       backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     })),
//   };

//   const options: ChartOptions<'scatter'> = {
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom',
//       },
//       y: {
//         type: 'linear',
//       },
//     },
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;






// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Point } from '../types';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

//   const chartData = {
//     datasets: data.map((point, index) => ({
//       label: `Point ${index + 1}`,
//       data: [{ x: point.x, y: point.y }],
//       backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     })),
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear' as const,
//         position: 'bottom' as const,
//       },
//       y: {
//         type: 'linear' as const,
//       },
//     },
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;










// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Point } from '../types';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

//   const chartData = {
//     datasets: data.map((point, index) => ({
//       label: `Point ${index + 1}`,
//       data: [{ x: point.x, y: point.y }],
//       backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     })),
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear' as const,
//         position: 'bottom' as const,
//       },
//       y: {
//         type: 'linear' as const,
//       },
//     },
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;











// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Point } from '../types';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

//   const chartData = {
//     datasets: data.map((point, index) => ({
//       label: `Point ${index + 1}`,
//       data: [{ x: point.x, y: point.y }],
//       backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//       pointStyle: point.isBoundary ? 'cross' : 'circle', // Крестики для граничных точек
//       pointRadius: point.isBoundary ? 10 : 5, // Увеличиваем размер крестиков
//       borderColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     })),
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear' as const,
//         position: 'bottom' as const,
//       },
//       y: {
//         type: 'linear' as const,
//       },
//     },
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;







// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Point } from '../types';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

//   const chartData = {
//     datasets: data.map((point, index) => ({
//       label: `Point ${index + 1}`,
//       data: [{ x: point.x, y: point.y }],
//       backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//       pointStyle: point.isBoundary ? 'cross' : 'circle', // Крестики для граничных точек
//       pointRadius: point.isBoundary ? 10 : 5, // Увеличиваем размер крестиков
//       borderColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     })),
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear' as const,
//         position: 'bottom' as const,
//         min: -10, // Фиксированный минимум по оси X
//         max: 10,  // Фиксированный максимум по оси X
//         ticks: {
//           stepSize: 1, // Шаг сетки по оси X
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)', // Цвет сетки
//         },
//       },
//       y: {
//         type: 'linear' as const,
//         min: -10, // Фиксированный минимум по оси Y
//         max: 10,  // Фиксированный максимум по оси Y
//         ticks: {
//           stepSize: 1, // Шаг сетки по оси Y
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)', // Цвет сетки
//         },
//       },
//     },
//     aspectRatio: 1, // Равномерный масштаб (1:1)
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;









// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Point } from '../types';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   const colors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta"];

//   // Группируем точки по кластерам
//   const datasets = data.map((point) => ({
//     label: `Cluster ${point.cluster ?? 'No Cluster'}`,
//     data: [{ x: point.x, y: point.y }],
//     backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     pointStyle: point.isBoundary ? 'cross' : 'circle',
//     pointRadius: point.isBoundary ? 10 : 5,
//     borderColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//   }));

//   const chartData = {
//     datasets,
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear' as const,
//         position: 'bottom' as const,
//         min: -10,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//       },
//       y: {
//         type: 'linear' as const,
//         min: -10,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//       },
//     },
//     aspectRatio: 1,
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;



//  /// НАЧАЛО ПОЛОЖЕНО
// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Point } from '../types';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   // Массив цветов для кластеров
//   const colors = [
//     'rgba(255, 99, 132, 0.8)', // Красный
//     'rgba(54, 162, 235, 0.8)', // Синий
//     'rgba(75, 192, 192, 0.8)', // Зелёный
//     'rgba(255, 206, 86, 0.8)', // Жёлтый
//     'rgba(153, 102, 255, 0.8)', // Фиолетовый
//     'rgba(255, 159, 64, 0.8)', // Оранжевый
//     'rgba(199, 199, 199, 0.8)', // Серый
//   ];

//   // Группируем точки по кластерам
//   const datasets = data.map((point) => ({
//     label: `Cluster ${point.cluster ?? 'No Cluster'}`,
//     data: [{ x: point.x, y: point.y }],
//     backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     pointStyle: point.isBoundary ? 'star' : 'circle', // Граничные точки — звёздочки
//     pointRadius: point.isBoundary ? 10 : 5,
//     borderColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//   }));

//   const chartData = {
//     datasets,
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear' as const,
//         position: 'bottom' as const,
//         min: -10,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//       },
//       y: {
//         type: 'linear' as const,
//         min: -10,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//       },
//     },
//     aspectRatio: 1,
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;








// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Point } from '../types';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   data: Point[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ data }) => {
//   // Массив цветов для кластеров
//   const colors = [
//     'rgba(255, 99, 132, 0.8)', // Красный
//     'rgba(54, 162, 235, 0.8)', // Синий
//     'rgba(75, 192, 192, 0.8)', // Зелёный
//     'rgba(255, 206, 86, 0.8)', // Жёлтый
//     'rgba(153, 102, 255, 0.8)', // Фиолетовый
//     'rgba(255, 159, 64, 0.8)', // Оранжевый
//     'rgba(199, 199, 199, 0.8)', // Серый
//   ];

//   // Группируем точки по кластерам
//   const datasets = data.map((point) => ({
//     label: `Cluster ${point.cluster ?? 'No Cluster'}`,
//     data: [{ x: point.x, y: point.y }],
//     backgroundColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//     pointStyle: point.isBoundary ? 'star' : 'circle', // Граничные точки — звёздочки
//     pointRadius: point.isBoundary ? 10 : 5,
//     borderColor: point.isBoundary ? 'black' : colors[point.cluster ?? 0 % colors.length],
//   }));

//   const chartData = {
//     datasets,
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear' as const,
//         position: 'bottom' as const,
//         min: -10,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//       },
//       y: {
//         type: 'linear' as const,
//         min: -10,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//       },
//     },
//     aspectRatio: 1,
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;




// import React from 'react';
// import { Scatter } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Point, Cluster, Boundary } from '../types';

// ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// interface ScatterPlotProps {
//   points: Point[];
//   clusters: Cluster[];
//   boundaries: Boundary[];
// }

// const ScatterPlot: React.FC<ScatterPlotProps> = ({ points, clusters, boundaries }) => {
//   // Массив цветов для кластеров
//   const colors = [
//     'rgba(255, 99, 132, 0.8)', // Красный
//     'rgba(54, 162, 235, 0.8)', // Синий
//     'rgba(75, 192, 192, 0.8)', // Зелёный
//     'rgba(255, 206, 86, 0.8)', // Жёлтый
//     'rgba(153, 102, 255, 0.8)', // Фиолетовый
//     'rgba(255, 159, 64, 0.8)', // Оранжевый
//     'rgba(199, 199, 199, 0.8)', // Серый
//   ];

//   // Создаем datasets для точек
//   const pointDatasets = clusters.map((cluster, index) => ({
//     label: `Cluster ${cluster.id}`,
//     data: cluster.points.map((point) => ({ x: point.x, y: point.y })),
//     backgroundColor: colors[index % colors.length],
//     pointStyle: 'circle',
//     pointRadius: 5,
//     borderColor: colors[index % colors.length],
//   }));

//   // Создаем datasets для границ
//   const boundaryDatasets = boundaries.map((boundary, index) => ({
//     label: `Boundary ${boundary.id}`,
//     data: boundary.points.map((point) => ({ x: point.x, y: point.y })),
//     backgroundColor: colors[boundary.clusterId % colors.length],
//     pointStyle: 'star',
//     pointRadius: 10,
//     borderColor: colors[boundary.clusterId % colors.length],
//   }));

//   const chartData = {
//     datasets: [...pointDatasets, ...boundaryDatasets],
//   };

//   const options = {
//     scales: {
//       x: {
//         type: 'linear' as const,
//         position: 'bottom' as const,
//         min: -10,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//       },
//       y: {
//         type: 'linear' as const,
//         min: -10,
//         max: 10,
//         ticks: {
//           stepSize: 1,
//         },
//         grid: {
//           color: 'rgba(0, 0, 0, 0.1)',
//         },
//       },
//     },
//     aspectRatio: 1,
//   };

//   return <Scatter data={chartData} options={options} />;
// };

// export default ScatterPlot;






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
    backgroundColor: colors[index % colors.length],
    pointStyle: 'circle',
    pointRadius: 5,
    borderColor: colors[index % colors.length],
  }));

  // Создаем datasets для границ
  const boundaryDatasets = boundaries.map((boundary, index) => ({
    label: `Boundary ${boundary.id}`,
    data: boundary.points.map((point) => ({ x: point.x, y: point.y })),
    backgroundColor: colors[boundary.clusterId % colors.length],
    pointStyle: 'star',
    pointRadius: 10,
    borderColor: colors[boundary.clusterId % colors.length],
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