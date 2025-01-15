// import React, { useState } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// // Axios is used for sending HTTP requests to the server.
// import axios from 'axios';

// // axios.defaults.baseURL = process.env.BACKEND_API_BASE_URL;

// interface Point {
//   x: number;
//   y: number;
//   cluster?: number;
//   isBoundary?: boolean;
// }

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);

//   const handleAddPoint = (point: Point) => {
//     setPoints([...points, point]);
//   };

//   const handleClusterize = async () => {
//     // This method sends a POST request to the server to clusterize points.
//     // If the request is successful, the server returns the clustered points,
//     // which are then updated in the state using setPoints.
//     // In case of an error, it logs the error to the console.
//     try {
//       const response = await axios.post('/api/clusterize', { points });
//       const clusteredPoints = response.data;
//       setPoints(clusteredPoints);
//     } catch (error) {
//       console.error('Error clustering points:', error);
//     }
//   };

//   const handleFindBoundaries = async () => {
//     // This method sends a POST request to the server to find boundary points.
//     // If the request is successful, it updates the state with the boundary points.
//     // In case of an error, it logs the error to the console.
//     try {
//       const response = await axios.post('/api/find-boundaries', { points });
//       const boundaryPoints = response.data;
//       setPoints(boundaryPoints);
//     } catch (error) {
//       console.error('Error finding boundaries:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={points} />
//       <button onClick={handleClusterize}>Кластеризовать</button>
//       <button onClick={handleFindBoundaries}>Найти границы</button>
//     </div>
//   );
// };


// export default App;















// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types'; // Импортируем общий интерфейс

// axios.defaults.baseURL = 'http://localhost:8081';

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);

//   useEffect(() => {
//     axios.get('/api/points')
//       .then(response => setPoints(response.data))
//       .catch(error => console.error('Error loading points:', error));
//   }, []);

//   const handleAddPoint = (point: Point) => {
//     setPoints([...points, point]);
//   };

//   const handleClusterize = async () => {
//     try {
//       const response = await axios.post('/api/clusterize', { points });
//       const clusteredPoints = response.data;
//       setPoints(clusteredPoints);
//     } catch (error) {
//       console.error('Error clustering points:', error);
//     }
//   };

//   const handleFindBoundaries = async () => {
//     try {
//       const response = await axios.post('/api/find-boundaries', { points });
//       const boundaryPoints = response.data;
//       setPoints(boundaryPoints);
//     } catch (error) {
//       console.error('Error finding boundaries:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={points} />
//       <button onClick={handleClusterize}>Кластеризовать</button>
//       <button onClick={handleFindBoundaries}>Найти границы</button>
//     </div>
//   );
// };

// export default App;










// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8081';

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);

//   // Функция для вычисления расстояния между двумя точками
//   const calculateDistance = (point1: Point, point2: Point): number => {
//     return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
//   };

//   // Логика кластеризации
//   const clusterPoints = (points: Point[]): Point[] => {
//     let clusterId = 0;
//     const clusteredPoints: Point[] = points.map((point) => ({ ...point, cluster: -1 }));

//     for (let i = 0; i < clusteredPoints.length; i++) {
//       if (clusteredPoints[i].cluster === -1) {
//         clusteredPoints[i].cluster = clusterId;
//         for (let j = i + 1; j < clusteredPoints.length; j++) {
//           if (calculateDistance(clusteredPoints[i], clusteredPoints[j]) <= 1) {
//             clusteredPoints[j].cluster = clusterId;
//           }
//         }
//         clusterId++;
//       }
//     }

//     return clusteredPoints;
//   };

//   // Логика поиска границ
//   const findBoundaries = (points: Point[]): Point[] => {
//     const boundaryPoints: Point[] = [];
//     for (let i = 0; i < points.length; i++) {
//       let isBoundary = false;
//       for (let j = 0; j < points.length; j++) {
//         if (i !== j && points[i].cluster !== points[j].cluster && calculateDistance(points[i], points[j]) <= 1) {
//           isBoundary = true;
//           break;
//         }
//       }
//       boundaryPoints.push({ ...points[i], isBoundary });
//     }
//     return boundaryPoints;
//   };

//   useEffect(() => {
//     axios.get('/api/points')
//       .then(response => setPoints(response.data))
//       .catch(error => console.error('Error loading points:', error));
//   }, []);

//   const handleAddPoint = (point: Point) => {
//     setPoints([...points, point]);
//   };

//   const handleClusterize = () => {
//     const clustered = clusterPoints(points);
//     setClusteredPoints(clustered);
//   };

//   const handleFindBoundaries = () => {
//     const boundaries = findBoundaries(clusteredPoints);
//     setClusteredPoints(boundaries);
//   };

//   return (
//     <div>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <button onClick={handleClusterize}>Кластеризовать</button>
//       <button onClick={handleFindBoundaries}>Найти границы</button>
//     </div>
//   );
// };

// export default App;







// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8081';

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);

//   // Функция для вычисления расстояния между двумя точками
//   const calculateDistance = (point1: Point, point2: Point): number => {
//     return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
//   };

//   // Логика кластеризации
//   const clusterPoints = (points: Point[]): Point[] => {
//     let clusterId = 0;
//     const clusteredPoints: Point[] = points.map((point) => ({ ...point, cluster: -1 }));

//     for (let i = 0; i < clusteredPoints.length; i++) {
//       if (clusteredPoints[i].cluster === -1) {
//         clusteredPoints[i].cluster = clusterId;
//         for (let j = i + 1; j < clusteredPoints.length; j++) {
//           if (calculateDistance(clusteredPoints[i], clusteredPoints[j]) <= 1) {
//             clusteredPoints[j].cluster = clusterId;
//           }
//         }
//         clusterId++;
//       }
//     }

//     return clusteredPoints;
//   };

//   // Логика поиска границ
//   const findBoundaries = (points: Point[]): Point[] => {
//     return points.map((point) => {
//       let isBoundary = false;
//       for (let otherPoint of points) {
//         if (
//           point.cluster !== otherPoint.cluster && // Точки из разных кластеров
//           calculateDistance(point, otherPoint) <= 1 // Расстояние между ними <= 1
//         ) {
//           isBoundary = true;
//           break;
//         }
//       }
//       return { ...point, isBoundary }; // Возвращаем точку с обновленным свойством isBoundary
//     });
//   };

//   useEffect(() => {
//     axios.get('/api/points')
//       .then(response => setPoints(response.data))
//       .catch(error => console.error('Error loading points:', error));
//   }, []);

//   const handleAddPoint = (point: Point) => {
//     setPoints([...points, point]);
//   };

//   const handleClusterize = () => {
//     const clustered = clusterPoints(points);
//     setClusteredPoints(clustered);
//   };

//   const handleFindBoundaries = () => {
//     const boundaries = findBoundaries(clusteredPoints);
//     setClusteredPoints(boundaries); // Обновляем clusteredPoints
//   };

//   return (
//     <div>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={clusteredPoints} />
//       <button onClick={handleClusterize}>Кластеризовать</button>
//       <button onClick={handleFindBoundaries}>Найти границы</button>
//     </div>
//   );
// };

// export default App;








// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8081';

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);

//   // Функция для вычисления расстояния между двумя точками
//   const calculateDistance = (point1: Point, point2: Point): number => {
//     return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
//   };

//   // Логика кластеризации
//   const clusterPoints = (points: Point[]): Point[] => {
//     let clusterId = 0;
//     const clusteredPoints: Point[] = points.map((point) => ({ ...point, cluster: -1 }));

//     for (let i = 0; i < clusteredPoints.length; i++) {
//       if (clusteredPoints[i].cluster === -1) {
//         clusteredPoints[i].cluster = clusterId;
//         for (let j = i + 1; j < clusteredPoints.length; j++) {
//           if (calculateDistance(clusteredPoints[i], clusteredPoints[j]) <= 1) {
//             clusteredPoints[j].cluster = clusterId;
//           }
//         }
//         clusterId++;
//       }
//     }

//     return clusteredPoints;
//   };

//   // Логика поиска границ для каждого кластера
//   const findBoundaries = (points: Point[]): Point[] => {
//     const boundaryPoints: Point[] = points.map((point) => ({ ...point, isBoundary: false }));

//     for (let i = 0; i < boundaryPoints.length; i++) {
//       for (let j = 0; j < boundaryPoints.length; j++) {
//         if (
//           i !== j && // Не сравниваем точку с самой собой
//           boundaryPoints[i].cluster !== boundaryPoints[j].cluster && // Точки из разных кластеров
//           calculateDistance(boundaryPoints[i], boundaryPoints[j]) <= 1 // Расстояние между ними <= 1
//         ) {
//           boundaryPoints[i].isBoundary = true; // Отмечаем точку как граничную
//           break;
//         }
//       }
//     }

//     return boundaryPoints;
//   };

//   useEffect(() => {
//     axios.get('/api/points')
//       .then(response => setPoints(response.data))
//       .catch(error => console.error('Error loading points:', error));
//   }, []);

//   const handleAddPoint = (point: Point) => {
//     setPoints([...points, point]);
//   };

//   const handleClusterize = () => {
//     const clustered = clusterPoints(points);
//     setClusteredPoints(clustered);
//   };

//   const handleFindBoundaries = () => {
//     if (clusteredPoints.length === 0) {
//       alert('Сначала выполните кластеризацию!');
//       return;
//     }
//     const boundaries = findBoundaries(clusteredPoints);
//     setClusteredPoints(boundaries); // Обновляем clusteredPoints
//   };

//   return (
//     <div>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <button onClick={handleClusterize}>Кластеризовать</button>
//       <button onClick={handleFindBoundaries}>Найти границы</button>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8081';

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/api/points');
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд
//       const response = await axios.post<Point>('/api/points', point);
//       // Обновляем состояние точек
//       setPoints((prevPoints) => [...prevPoints, response.data]);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       const response = await axios.post<Point[]>('/api/clusterize', { points });
//       // Обновляем состояние кластеризованных точек
//       setClusteredPoints(response.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     if (clusteredPoints.length === 0) {
//       alert('Сначала выполните кластеризацию!');
//       return;
//     }
//     try {
//       // Отправляем запрос на поиск границ
//       const response = await axios.post<Point[]>('/api/find-boundaries', { points: clusteredPoints });
//       // Обновляем состояние точек с границами
//       setClusteredPoints(response.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <button onClick={handleClusterize}>Кластеризовать</button>
//       <button onClick={handleFindBoundaries}>Найти границы</button>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8081'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/api/points');
//         console.log('Данные от бэкенда:', response.data); // Вывод данных в консоль
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд
//       const response = await axios.post<Point>('/api/points', point);
//       console.log('Точка добавлена:', response.data); // Вывод в консоль
//       // Обновляем состояние точек
//       setPoints((prevPoints) => [...prevPoints, response.data]);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       const response = await axios.post<Point[]>('/api/clusterize', { points });
//       console.log('Кластеризованные точки:', response.data); // Вывод в консоль
//       // Обновляем состояние кластеризованных точек
//       setClusteredPoints(response.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     if (clusteredPoints.length === 0) {
//       alert('Сначала выполните кластеризацию!');
//       return;
//     }
//     try {
//       // Отправляем запрос на поиск границ
//       const response = await axios.post<Point[]>('/api/find-boundaries', { points: clusteredPoints });
//       console.log('Граничные точки:', response.data); // Вывод в консоль
//       // Обновляем состояние точек с границами
//       setClusteredPoints(response.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <button onClick={handleClusterize}>Кластеризовать</button>
//       <button onClick={handleFindBoundaries}>Найти границы</button>
//     </div>
//   );
// };

// export default App;








// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8081'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);
//   const [boundaryPoints, setBoundaryPoints] = useState<Point[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         // Запрос на получение всех точек
//         const response = await axios.get<Point[]>('/points');
//         console.log('Данные от бэкенда:', response.data); // Вывод данных в консоль
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Запрос на добавление новой точки
//       const response = await axios.post('/points', {
//         points: [{ x: point.x, y: point.y }],
//       });
//       console.log('Точка добавлена:', response.data); // Вывод в консоль
//       // Обновляем состояние точек, запрашивая их снова с бэкенда
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Запрос на кластеризацию
//       const response = await axios.post('/clusters');
//       console.log('Кластеризация выполнена:', response.data); // Вывод в консоль
//       // Обновляем состояние точек, запрашивая их снова с бэкенда
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setClusteredPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       // Запрос на поиск границ
//       const response = await axios.post('/clusters/boundaries');
//       console.log('Границы найдены:', response.data); // Вывод в консоль
//       // Обновляем состояние точек, запрашивая их снова с бэкенда
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setBoundaryPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={boundaryPoints.length > 0 ? boundaryPoints : clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <button onClick={handleClusterize}>Кластеризовать</button>
//       <button onClick={handleFindBoundaries}>Найти границы</button>
//     </div>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);
//   const [boundaryPoints, setBoundaryPoints] = useState<Point[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       await axios.post('/points', { x: point.x, y: point.y });
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       await axios.post('/clusters');
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setClusteredPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       await axios.post('/clusters/boundaries');
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setBoundaryPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={boundaryPoints.length > 0 ? boundaryPoints : clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);
//   const [boundaryPoints, setBoundaryPoints] = useState<Point[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         console.log('Точки загружены:', response.data);
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       console.log('Отправка данных:', { points: [{ x: point.x, y: point.y }] });
//       const response = await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
//       console.log('Ответ от бэкенда:', response.data);
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       await axios.post('/clusters');
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setClusteredPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       await axios.post('/clusters/boundaries');
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setBoundaryPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={boundaryPoints.length > 0 ? boundaryPoints : clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;













// НАЧАЛО ПОЛОЖЕНО
// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);
//   const [boundaryPoints, setBoundaryPoints] = useState<Point[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         console.log('Точки загружены:', response.data);
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд в правильном формате
//       await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
//       // Обновляем состояние точек
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       await axios.post('/clusters');
//       // Получаем обновлённые точки с кластерами
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setClusteredPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       // Отправляем запрос на поиск границ
//       await axios.post('/clusters/boundaries');
//       // Получаем обновлённые точки с границами
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setBoundaryPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={boundaryPoints.length > 0 ? boundaryPoints : clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;













// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusteredPoints, setClusteredPoints] = useState<Point[]>([]);
//   const [boundaryPoints, setBoundaryPoints] = useState<Point[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         console.log('Точки загружены:', response.data);
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд в правильном формате
//       await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
//       // Обновляем состояние точек
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       await axios.post('/clusters');
//       // Получаем обновлённые точки с кластерами
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setClusteredPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       // Отправляем запрос на поиск границ
//       await axios.post('/clusters/boundaries');
//       // Получаем обновлённые точки с границами
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setBoundaryPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot data={boundaryPoints.length > 0 ? boundaryPoints : clusteredPoints.length > 0 ? clusteredPoints : points} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point, Cluster, Boundary } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusters, setClusters] = useState<Cluster[]>([]);
//   const [boundaries, setBoundaries] = useState<Boundary[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         console.log('Точки загружены:', response.data);
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд в правильном формате
//       await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
//       // Обновляем состояние точек
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       const clustersResponse = await axios.post<Cluster[]>('/clusters');
//       setClusters(clustersResponse.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       // Отправляем запрос на поиск границ
//       const boundariesResponse = await axios.post<Boundary[]>('/clusters/boundaries');
//       setBoundaries(boundariesResponse.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot points={points} clusters={clusters} boundaries={boundaries} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point, Cluster, Boundary } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusters, setClusters] = useState<Cluster[]>([]);
//   const [boundaries, setBoundaries] = useState<Boundary[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         console.log('Точки загружены:', response.data);
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд в правильном формате
//       await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
//       // Обновляем состояние точек
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       const clustersResponse = await axios.post<Cluster[]>('/clusters');
//       setClusters(clustersResponse.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       // Отправляем запрос на поиск границ
//       const boundariesResponse = await axios.post<Boundary[]>('/clusters/boundaries');
//       setBoundaries(boundariesResponse.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot points={points} clusters={clusters} boundaries={boundaries} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point, Cluster, Boundary } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusters, setClusters] = useState<Cluster[]>([]);
//   const [boundaries, setBoundaries] = useState<Boundary[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         console.log('Точки загружены:', response.data);
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд в правильном формате
//       await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
//       // Обновляем состояние точек
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       const clustersResponse = await axios.post<Cluster[]>('/clusters');
//       setClusters(clustersResponse.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       // Отправляем запрос на поиск границ
//       const boundariesResponse = await axios.post<Boundary[]>('/clusters/boundaries');
//       setBoundaries(boundariesResponse.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} points={points} />
//       <ScatterPlot points={points} clusters={clusters} boundaries={boundaries} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;












// хороший готовый
// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point, Cluster, Boundary } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusters, setClusters] = useState<Cluster[]>([]);
//   const [boundaries, setBoundaries] = useState<Boundary[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         console.log('Точки загружены:', response.data);
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд в правильном формате
//       await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
//       // Обновляем состояние точек
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик загрузки точек из JSON-файла
//   const handleUploadPoints = async (file: File) => {
//     try {
//       const fileReader = new FileReader();
//       fileReader.onload = async (e) => {
//         const content = e.target?.result as string;
//         const pointsFromFile: Point[] = JSON.parse(content);
//         // Отправляем точки на бэкенд
//         await axios.post('/points', { points: pointsFromFile });
//         // Обновляем состояние точек
//         const updatedPoints = await axios.get<Point[]>('/points');
//         setPoints(updatedPoints.data);
//       };
//       fileReader.readAsText(file);
//     } catch (error) {
//       console.error('Ошибка при загрузке файла:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       const clustersResponse = await axios.post<Cluster[]>('/clusters');
//       setClusters(clustersResponse.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       // Отправляем запрос на поиск границ
//       const boundariesResponse = await axios.post<Boundary[]>('/clusters/boundaries');
//       setBoundaries(boundariesResponse.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager onAddPoint={handleAddPoint} onUploadPoints={handleUploadPoints} points={points} />
//       <ScatterPlot points={points} clusters={clusters} boundaries={boundaries} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import ScatterPlot from './components/ScatterPlot';
// import PointManager from './components/PointManager';
// import axios from 'axios';
// import { Point, Cluster, Boundary } from './types';

// axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

// const App: React.FC = () => {
//   const [points, setPoints] = useState<Point[]>([]);
//   const [clusters, setClusters] = useState<Cluster[]>([]);
//   const [boundaries, setBoundaries] = useState<Boundary[]>([]);

//   // Загрузка точек с бэкенда при монтировании компонента
//   useEffect(() => {
//     const fetchPoints = async () => {
//       try {
//         const response = await axios.get<Point[]>('/points');
//         console.log('Точки загружены:', response.data);
//         setPoints(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке точек:', error);
//       }
//     };

//     fetchPoints();
//   }, []);

//   // Обработчик добавления новой точки
//   const handleAddPoint = async (point: Point) => {
//     try {
//       // Отправляем точку на бэкенд в правильном формате
//       await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
//       // Обновляем состояние точек
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при добавлении точки:', error);
//     }
//   };

//   // Обработчик загрузки точек из JSON-файла
//   const handleUploadPoints = async (file: File) => {
//     try {
//       const fileReader = new FileReader();
//       fileReader.onload = async (e) => {
//         const content = e.target?.result as string;
//         const pointsFromFile: Point[] = JSON.parse(content);
//         // Отправляем точки на бэкенд
//         await axios.post('/points', { points: pointsFromFile });
//         // Обновляем состояние точек
//         const updatedPoints = await axios.get<Point[]>('/points');
//         setPoints(updatedPoints.data);
//       };
//       fileReader.readAsText(file);
//     } catch (error) {
//       console.error('Ошибка при загрузке файла:', error);
//     }
//   };

//   // Обработчик удаления всех точек
//   const handleDeleteAllPoints = async () => {
//     try {
//       // Отправляем запрос на удаление всех точек
//       await axios.delete('/points');
//       // Обновляем состояние точек
//       const updatedPoints = await axios.get<Point[]>('/points');
//       setPoints(updatedPoints.data);
//     } catch (error) {
//       console.error('Ошибка при удалении всех точек:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию
//       const clustersResponse = await axios.post<Cluster[]>('/clusters');
//       setClusters(clustersResponse.data);
//     } catch (error) {
//       console.error('Ошибка при кластеризации:', error);
//     }
//   };

//   // Обработчик поиска границ
//   const handleFindBoundaries = async () => {
//     try {
//       // Отправляем запрос на поиск границ
//       const boundariesResponse = await axios.post<Boundary[]>('/clusters/boundaries');
//       setBoundaries(boundariesResponse.data);
//     } catch (error) {
//       console.error('Ошибка при поиске границ:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>
//       <PointManager 
//         onAddPoint={handleAddPoint} 
//         onUploadPoints={handleUploadPoints} 
//         onDeleteAllPoints={handleDeleteAllPoints} 
//         points={points} 
//       />
//       <ScatterPlot points={points} clusters={clusters} boundaries={boundaries} />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect } from 'react';
import ScatterPlot from './components/ScatterPlot';
import PointManager from './components/PointManager';
import axios from 'axios';
import { Point, Cluster, Boundary } from './types';

axios.defaults.baseURL = 'http://localhost:8080'; // Указываем URL бэкенда

const App: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [boundaries, setBoundaries] = useState<Boundary[]>([]);

  // Загрузка точек с бэкенда при монтировании компонента
  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await axios.get<Point[]>('/points');
        console.log('Точки загружены:', response.data);
        setPoints(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке точек:', error);
      }
    };

    fetchPoints();
  }, []);

  // Обработчик добавления новой точки
  const handleAddPoint = async (point: Point) => {
    try {
      // Отправляем точку на бэкенд в правильном формате
      await axios.post('/points', { points: [{ x: point.x, y: point.y }] });
      // Обновляем состояние точек
      const updatedPoints = await axios.get<Point[]>('/points');
      setPoints(updatedPoints.data);
    } catch (error) {
      console.error('Ошибка при добавлении точки:', error);
    }
  };

  // Обработчик загрузки точек из JSON-файла
  const handleUploadPoints = async (file: File) => {
    try {
      const fileReader = new FileReader();
      fileReader.onload = async (e) => {
        const content = e.target?.result as string;
        const pointsFromFile: Point[] = JSON.parse(content);
        // Отправляем точки на бэкенд
        await axios.post('/points', { points: pointsFromFile });
        // Обновляем состояние точек
        const updatedPoints = await axios.get<Point[]>('/points');
        setPoints(updatedPoints.data);
      };
      fileReader.readAsText(file);
    } catch (error) {
      console.error('Ошибка при загрузке файла:', error);
    }
  };

  // Обработчик удаления всех точек
  const handleDeleteAllPoints = async () => {
    try {
      // Отправляем запрос на удаление всех точек
      await axios.delete('/points');
      // Сбрасываем состояния точек, кластеров и границ
      setPoints([]);
      setClusters([]);
      setBoundaries([]);
    } catch (error) {
      console.error('Ошибка при удалении всех точек:', error);
    }
  };

  // Обработчик кластеризации
  const handleClusterize = async () => {
    try {
      // Отправляем запрос на кластеризацию
      const clustersResponse = await axios.post<Cluster[]>('/clusters');
      setClusters(clustersResponse.data);
    } catch (error) {
      console.error('Ошибка при кластеризации:', error);
    }
  };

  // Обработчик поиска границ
  const handleFindBoundaries = async () => {
    try {
      // Отправляем запрос на поиск границ
      const boundariesResponse = await axios.post<Boundary[]>('/clusters/boundaries');
      setBoundaries(boundariesResponse.data);
    } catch (error) {
      console.error('Ошибка при поиске границ:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Кластеризация точек</h1>
      <PointManager 
        onAddPoint={handleAddPoint} 
        onUploadPoints={handleUploadPoints} 
        onDeleteAllPoints={handleDeleteAllPoints} 
        points={points} 
      />
      <ScatterPlot points={points} clusters={clusters} boundaries={boundaries} />
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleClusterize} style={{ marginRight: '10px' }}>Кластеризовать</button>
        <button onClick={handleFindBoundaries}>Найти границы</button>
      </div>
    </div>
  );
};

export default App;