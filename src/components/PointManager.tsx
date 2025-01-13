import React, { useState } from 'react';

interface Point {
  x: number;
  y: number;
}

interface PointManagerProps {
  onAddPoint: (point: Point) => void;
  points: Point[];
}

const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, points }) => {
  const [newPoint, setNewPoint] = useState<Point>({ x: 0, y: 0 });

  const handleAddPoint = () => {
    onAddPoint(newPoint);
    setNewPoint({ x: 0, y: 0 });
  };

  return (
    <div>
      <h3>Добавить точку</h3>
      <input
        type="number"
        value={newPoint.x}
        onChange={(e) => setNewPoint({ ...newPoint, x: parseFloat(e.target.value) })}
        placeholder="X"
      />
      <input
        type="number"
        value={newPoint.y}
        onChange={(e) => setNewPoint({ ...newPoint, y: parseFloat(e.target.value) })}
        placeholder="Y"
      />
      <button onClick={handleAddPoint}>Добавить</button>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{`(${point.x}, ${point.y})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PointManager;