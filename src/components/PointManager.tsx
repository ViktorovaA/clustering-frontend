// import React, { useState } from 'react';

// interface Point {
//   x: number;
//   y: number;
// }

// interface PointManagerProps {
//   onAddPoint: (point: Point) => void;
//   points: Point[];
// }

// const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, points }) => {
//   const [newPoint, setNewPoint] = useState<Point>({ x: 0, y: 0 });

//   const handleAddPoint = () => {
//     onAddPoint(newPoint);
//     setNewPoint({ x: 0, y: 0 });
//   };

//   return (
//     <div>
//       <h3>Добавить точку</h3>
//       <input
//         type="number"
//         value={newPoint.x}
//         onChange={(e) => setNewPoint({ ...newPoint, x: parseFloat(e.target.value) })}
//         placeholder="X"
//       />
//       <input
//         type="number"
//         value={newPoint.y}
//         onChange={(e) => setNewPoint({ ...newPoint, y: parseFloat(e.target.value) })}
//         placeholder="Y"
//       />
//       <button onClick={handleAddPoint}>Добавить</button>
//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{`(${point.x}, ${point.y})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PointManager;





// import React, { useState } from 'react';
// import { Point } from '../types'; // Импортируем общий интерфейс

// interface PointManagerProps {
//   onAddPoint: (point: Point) => void;
//   points: Point[];
// }

// const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, points }) => {
//   const [newPoint, setNewPoint] = useState<Point>({ id: Date.now(), x: 0, y: 0 });

//   const handleAddPoint = () => {
//     onAddPoint(newPoint);
//     setNewPoint({ id: Date.now(), x: 0, y: 0 }); // Генерируем новый id для следующей точки
//   };

//   return (
//     <div>
//       <h3>Добавить точку</h3>
//       <input
//         type="number"
//         value={newPoint.x}
//         onChange={(e) => setNewPoint({ ...newPoint, x: parseFloat(e.target.value) })}
//         placeholder="X"
//       />
//       <input
//         type="number"
//         value={newPoint.y}
//         onChange={(e) => setNewPoint({ ...newPoint, y: parseFloat(e.target.value) })}
//         placeholder="Y"
//       />
//       <button onClick={handleAddPoint}>Добавить</button>
//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{`(${point.x}, ${point.y})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PointManager;









// import React, { useState } from 'react';
// import { Point } from '../types';

// interface PointManagerProps {
//   onAddPoint: (point: Point) => void;
//   points: Point[];
// }

// const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, points }) => {
//   const [newPoint, setNewPoint] = useState<Point>({ id: Date.now(), x: 0, y: 0 });

//   const handleAddPoint = () => {
//     onAddPoint(newPoint);
//     setNewPoint({ id: Date.now(), x: 0, y: 0 });
//   };

//   return (
//     <div>
//       <h3>Добавить точку</h3>
//       <input
//         type="number"
//         value={newPoint.x}
//         onChange={(e) => setNewPoint({ ...newPoint, x: parseFloat(e.target.value) })}
//         placeholder="X"
//       />
//       <input
//         type="number"
//         value={newPoint.y}
//         onChange={(e) => setNewPoint({ ...newPoint, y: parseFloat(e.target.value) })}
//         placeholder="Y"
//       />
//       <button onClick={handleAddPoint}>Добавить</button>
//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{`(${point.x}, ${point.y})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PointManager;







// import React, { useState } from 'react';
// import { Point } from '../types';

// interface PointManagerProps {
//   onAddPoint: (point: Point) => void;
//   points: Point[];
// }

// const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, points }) => {
//   const [newPoint, setNewPoint] = useState<Point>({ id: Date.now(), x: 0, y: 0 });

//   const handleAddPoint = () => {
//     onAddPoint(newPoint);
//     setNewPoint({ id: Date.now(), x: 0, y: 0 });
//   };

//   return (
//     <div>
//       <h3>Добавить точку</h3>
//       <input
//         type="number"
//         value={newPoint.x}
//         onChange={(e) => setNewPoint({ ...newPoint, x: parseFloat(e.target.value) })}
//         placeholder="X"
//       />
//       <input
//         type="number"
//         value={newPoint.y}
//         onChange={(e) => setNewPoint({ ...newPoint, y: parseFloat(e.target.value) })}
//         placeholder="Y"
//       />
//       <button onClick={handleAddPoint}>Добавить</button>
//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{`(${point.x}, ${point.y})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PointManager;




// import React, { useState } from 'react';
// import { Point } from '../types';

// interface PointManagerProps {
//   onAddPoint: (point: Point) => void;
//   points: Point[];
// }

// const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, points }) => {
//   const [newPoint, setNewPoint] = useState<Point>({ id: Date.now(), x: 0, y: 0 });

//   const handleAddPoint = () => {
//     onAddPoint(newPoint);
//     setNewPoint({ id: Date.now(), x: 0, y: 0 });
//   };

//   return (
//     <div>
//       <h3>Добавить точку</h3>
//       <input
//         type="number"
//         value={newPoint.x}
//         onChange={(e) => setNewPoint({ ...newPoint, x: parseFloat(e.target.value) })}
//         placeholder="X"
//       />
//       <input
//         type="number"
//         value={newPoint.y}
//         onChange={(e) => setNewPoint({ ...newPoint, y: parseFloat(e.target.value) })}
//         placeholder="Y"
//       />
//       <button onClick={handleAddPoint}>Добавить</button>
//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{`(${point.x}, ${point.y})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PointManager;





// хороший готовый
// import React, { useState } from 'react';
// import { Point } from '../types';

// interface PointManagerProps {
//   onAddPoint: (point: Point) => void;
//   onUploadPoints: (file: File) => void;
//   points: Point[];
// }

// const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, onUploadPoints, points }) => {
//   const [newPoint, setNewPoint] = useState<Point>({ id: Date.now(), x: 0, y: 0 });

//   const handleAddPoint = () => {
//     onAddPoint(newPoint);
//     setNewPoint({ id: Date.now(), x: 0, y: 0 });
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       onUploadPoints(file);
//     }
//   };

//   return (
//     <div>
//       <h3>Добавить точку</h3>
//       <input
//         type="number"
//         value={newPoint.x}
//         onChange={(e) => setNewPoint({ ...newPoint, x: parseFloat(e.target.value) })}
//         placeholder="X"
//       />
//       <input
//         type="number"
//         value={newPoint.y}
//         onChange={(e) => setNewPoint({ ...newPoint, y: parseFloat(e.target.value) })}
//         placeholder="Y"
//       />
//       <button onClick={handleAddPoint}>Добавить</button>

//       <h3>Загрузить точки из JSON</h3>
//       <input type="file" accept=".json" onChange={handleFileUpload} />

//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{`(${point.x}, ${point.y})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PointManager;








// import React, { useState } from 'react';
// import { Point } from '../types';

// interface PointManagerProps {
//   onAddPoint: (point: Point) => void;
//   onUploadPoints: (file: File) => void;
//   onDeleteAllPoints: () => void;
//   points: Point[];
// }

// const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, onUploadPoints, onDeleteAllPoints, points }) => {
//   const [newPoint, setNewPoint] = useState<Point>({ id: Date.now(), x: 0, y: 0 });

//   const handleAddPoint = () => {
//     onAddPoint(newPoint);
//     setNewPoint({ id: Date.now(), x: 0, y: 0 });
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       onUploadPoints(file);
//     }
//   };

//   return (
//     <div>
//       <h3>Добавить точку</h3>
//       <input
//         type="number"
//         value={newPoint.x}
//         onChange={(e) => setNewPoint({ ...newPoint, x: parseFloat(e.target.value) })}
//         placeholder="X"
//       />
//       <input
//         type="number"
//         value={newPoint.y}
//         onChange={(e) => setNewPoint({ ...newPoint, y: parseFloat(e.target.value) })}
//         placeholder="Y"
//       />
//       <button onClick={handleAddPoint}>Добавить</button>

//       <h3>Загрузить точки из JSON</h3>
//       <input type="file" accept=".json" onChange={handleFileUpload} />

//       <button 
//         onClick={onDeleteAllPoints} 
//         style={{ 
//           marginTop: '10px', 
//           backgroundColor: 'pink', 
//           color: 'black', 
//           border: 'none', 
//           padding: '5px 10px', 
//           borderRadius: '5px', 
//           cursor: 'pointer' 
//         }}
//       >
//         Удалить все точки
//       </button>

//       <ul>
//         {points.map((point, index) => (
//           <li key={index}>{`(${point.x}, ${point.y})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PointManager;




import React, { useState } from 'react';
import { Point } from '../types';

interface PointManagerProps {
  onAddPoint: (point: Point) => void;
  onUploadPoints: (file: File) => void;
  onDeleteAllPoints: () => void;
  points: Point[];
}

const PointManager: React.FC<PointManagerProps> = ({ onAddPoint, onUploadPoints, onDeleteAllPoints, points }) => {
  const [newPoint, setNewPoint] = useState<Point>({ id: Date.now(), x: 0, y: 0 });

  const handleAddPoint = () => {
    onAddPoint(newPoint);
    setNewPoint({ id: Date.now(), x: 0, y: 0 });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadPoints(file);
    }
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

      <h3>Загрузить точки из JSON</h3>
      <input type="file" accept=".json" onChange={handleFileUpload} />

      <button 
        onClick={onDeleteAllPoints} 
        style={{ 
          marginTop: '10px', 
          backgroundColor: 'pink', 
          color: 'black', 
          border: 'none', 
          padding: '5px 10px', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Удалить все точки
      </button>

      <ul>
        {points.map((point, index) => (
          <li key={index}>{`(${point.x}, ${point.y})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PointManager;




