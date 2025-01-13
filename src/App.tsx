import React from 'react';

import TowerList from './TowerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Orna Tower Floor Status</h1>
      <div className="TowerBox">
        <TowerList />
      </div>
      <p>Skipping 10 Floors Yields -1k Shards. Skipping 20 Floors Yields -3k Shards. Skipping 30 Floors Yields -6.5k Shards. Skipping 40 Floors Yields -11k Shards.</p>

    </div>
  );
};

export default App;

