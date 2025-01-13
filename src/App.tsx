import React from 'react';

import TowerList from './TowerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Celestial Tower Floor Status</h1>
      <div className="TowerBox">
        <TowerList />
      </div>
      <p>Skipping 10 Floors Yields 98%. Skipping 20 Floors Yields 91%. Skipping 30 Floors Yields 79%. Skipping 40 Floors Yields 64%.</p>

    </div>
  );
};

export default App;

