import React from 'react';
import { Floor } from './TowerLogic'; // Adjust the import path
import { EnhancedFloor } from './TowerLogic';

interface TowerProps {
  tower: EnhancedFloor;
}

const Tower: React.FC<TowerProps> = ({ tower }) => {  
  let towerShards = 0.0;
  let towerShardsSkipTen = 0.0;
  let towerShardsSkipTwen = 0.0;
  let towerShardsSkipThirt = 0.0;
  let towerShardsSkipFourt = 0.0;
  for (let i = 0; i <= tower.floor; i++) {
    let shardsOnFloori = 0;
    if (i == tower.floor) {
      shardsOnFloori = i * 10;
    } else {
      shardsOnFloori = 2.5 * i * 10;
    }
    
    towerShards += shardsOnFloori;
  }

  return (
    <div>
      <h2>{tower.kind.toUpperCase()}</h2>
      <p>Current Floor: {tower.floor}</p>
      <p>Next Floor 50 at: {tower.nextfifty}</p>
      <p>Next Tower Reset at: {tower.nextfiftyuntil}</p>
      <p>Estimated Shards: {Math.floor(towerShards / 1)}</p>
    </div>
  );
}; 

export default Tower;
