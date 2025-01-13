import React, { useEffect, useState } from 'react';
import Tower from './Tower';
import { getEnhancedTowerFloors, EnhancedFloor } from './TowerLogic'; // Adjust the import path

const TowerList: React.FC = () => {
  const [floors, setFloors] = useState<EnhancedFloor[]>([]);

  useEffect(() => {
    const updateFloors = () => {
      const currentTime = new Date();
      setFloors(getEnhancedTowerFloors(currentTime));
    };

    updateFloors();
    const interval = setInterval(updateFloors, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tower-container">
    {floors.map((tower, index) => (
      <div key={index} className="tower-box">
        <Tower tower={tower} />
      </div>
    ))}
    </div>
  );
};

export default TowerList;
