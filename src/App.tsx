import React, { useState } from 'react';
import ScatterPlot from './components/ScatterPlot';
import PointManager from './components/PointManager';
// Axios is used for sending HTTP requests to the server.
import axios from 'axios';

// axios.defaults.baseURL = process.env.BACKEND_API_BASE_URL;

interface Point {
  x: number;
  y: number;
  cluster?: number;
  isBoundary?: boolean;
}

const App: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);

  const handleAddPoint = (point: Point) => {
    setPoints([...points, point]);
  };

  const handleClusterize = async () => {
    // This method sends a POST request to the server to clusterize points.
    // If the request is successful, the server returns the clustered points,
    // which are then updated in the state using setPoints.
    // In case of an error, it logs the error to the console.
    try {
      const response = await axios.post('/api/clusterize', { points });
      const clusteredPoints = response.data;
      setPoints(clusteredPoints);
    } catch (error) {
      console.error('Error clustering points:', error);
    }
  };

  const handleFindBoundaries = async () => {
    // This method sends a POST request to the server to find boundary points.
    // If the request is successful, it updates the state with the boundary points.
    // In case of an error, it logs the error to the console.
    try {
      const response = await axios.post('/api/find-boundaries', { points });
      const boundaryPoints = response.data;
      setPoints(boundaryPoints);
    } catch (error) {
      console.error('Error finding boundaries:', error);
    }
  };

  return (
    <div>
      <h1>Кластеризация точек</h1>
      <PointManager onAddPoint={handleAddPoint} points={points} />
      <ScatterPlot data={points} />
      <button onClick={handleClusterize}>Кластеризовать</button>
      <button onClick={handleFindBoundaries}>Найти границы</button>
    </div>
  );
};

export default App;