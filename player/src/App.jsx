import React from 'react';
import PlayerList from './components/PlayerList.jsx';


function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Football Players
      </h1>
      <PlayerList />
    </div>
  );
}

export default App;