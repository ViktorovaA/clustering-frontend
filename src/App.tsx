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
//       // Сбрасываем состояния точек, кластеров и границ
//       setPoints([]);
//       setClusters([]);
//       setBoundaries([]);
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
//   const [maxDistance, setMaxDistance] = useState<number>(1.0); // Параметр кластеризации

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
//       // Сбрасываем состояния точек, кластеров и границ
//       setPoints([]);
//       setClusters([]);
//       setBoundaries([]);
//     } catch (error) {
//       console.error('Ошибка при удалении всех точек:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию с параметром maxDistance
//       const clustersResponse = await axios.post<Cluster[]>('/clusters', null, {
//         params: { maxDistance },
//       });
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

//   // Обработчик изменения параметра maxDistance
//   const handleMaxDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setMaxDistance(Number(event.target.value));
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
//         <label>
//           Параметр кластеризации (расстояние):
//           <input 
//             type="number" 
//             value={maxDistance} 
//             onChange={handleMaxDistanceChange} 
//             style={{ marginLeft: '10px' }}
//           />
//         </label>
//         <button onClick={handleClusterize} style={{ marginLeft: '10px' }}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries} style={{ marginLeft: '10px' }}>Найти границы</button>
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
//   const [maxDistance, setMaxDistance] = useState<number>(1.0); // Параметр кластеризации

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
//       // Сбрасываем состояния точек, кластеров и границ
//       setPoints([]);
//       setClusters([]);
//       setBoundaries([]);
//     } catch (error) {
//       console.error('Ошибка при удалении всех точек:', error);
//     }
//   };

//   // Обработчик кластеризации
//   const handleClusterize = async () => {
//     try {
//       // Отправляем запрос на кластеризацию с параметром maxDistance
//       const clustersResponse = await axios.post<Cluster[]>('/clusters', null, {
//         params: { maxDistance },
//       });
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

//   // Обработчик изменения параметра maxDistance
//   const handleMaxDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setMaxDistance(Number(event.target.value));
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Кластеризация точек</h1>

//       {/* Окошко с кластерами и их точками */}
//       <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', maxHeight: '200px', overflowY: 'auto' }}>
//         <h3>Кластеры и их точки:</h3>
//         {clusters.length > 0 ? (
//           clusters.map((cluster, index) => (
//             <div key={index} style={{ marginBottom: '10px' }}>
//               <strong>Кластер {index + 1}:</strong>
//               <span>
//                 {cluster.points.map((point, idx) => (
//                   ` (${point.x}, ${point.y})${idx < cluster.points.length - 1 ? ',' : ''}`
//                 ))}
//               </span>
//             </div>
//           ))
//         ) : (
//           <div>Кластеры не найдены.</div>
//         )}
//       </div>

//       {/* Кнопки и параметр кластеризации */}
//       <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <label>
//           Параметр кластеризации (расстояние):
//           <input 
//             type="number" 
//             value={maxDistance} 
//             onChange={handleMaxDistanceChange} 
//             style={{ marginLeft: '10px', width: '80px' }}
//           />
//         </label>
//         <button onClick={handleClusterize}>Кластеризовать</button>
//         <button onClick={handleFindBoundaries}>Найти границы</button>
//       </div>

//       <div style={{ display: 'flex', gap: '20px' }}>
//         {/* Левая часть: PointManager с прокруткой для точек */}
//         <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', overflowY: 'auto', maxHeight: '600px' }}>
//           <PointManager 
//             onAddPoint={handleAddPoint} 
//             onUploadPoints={handleUploadPoints} 
//             onDeleteAllPoints={handleDeleteAllPoints} 
//             points={points} 
//           />
//         </div>

//         {/* Правая часть: график */}
//         <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
//           <ScatterPlot points={points} clusters={clusters} boundaries={boundaries} />
//         </div>
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
  const [maxDistance, setMaxDistance] = useState<number>(1.0); // Параметр кластеризации

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
      // Отправляем запрос на кластеризацию с параметром maxDistance
      const clustersResponse = await axios.post<Cluster[]>('/clusters', null, {
        params: { maxDistance },
      });
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

  // Обработчик изменения параметра maxDistance
  const handleMaxDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxDistance(Number(event.target.value));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Кластеризация точек</h1>

      {/* Окошко с кластерами и их точками */}
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '20px', maxHeight: '200px', overflowY: 'auto' }}>
        <h3>Кластеры и их точки:</h3>
        {clusters.length > 0 ? (
          clusters.map((cluster, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong>Кластер {index + 1}:</strong>
              <ul style={{ margin: '5px 0 0 20px', padding: 0 }}>
                {cluster.points.map((point, idx) => (
                  <li key={idx}>{`(${point.x}, ${point.y})`}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div>Кластеры не найдены.</div>
        )}
      </div>

      {/* Кнопки и параметр кластеризации */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label>
          Параметр кластеризации (расстояние):
          <input 
            type="number" 
            value={maxDistance} 
            onChange={handleMaxDistanceChange} 
            style={{ marginLeft: '10px', width: '80px' }}
          />
        </label>
        <button onClick={handleClusterize}>Кластеризовать</button>
        <button onClick={handleFindBoundaries}>Найти границы</button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Левая часть: PointManager с прокруткой для точек */}
        <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', overflowY: 'auto', maxHeight: '600px' }}>
          <PointManager 
            onAddPoint={handleAddPoint} 
            onUploadPoints={handleUploadPoints} 
            onDeleteAllPoints={handleDeleteAllPoints} 
            points={points} 
          />
        </div>

        {/* Правая часть: график */}
        <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
          <ScatterPlot points={points} clusters={clusters} boundaries={boundaries} />
        </div>
      </div>
    </div>
  );
};

export default App;