import React from 'react';
import './App.css';
import { NpcSheetDisplay } from './npc-sheet-display/NpcSheetDisplay';
import { DunegonGenerator } from './dungeon-generator/DungeonsGenerator';

/*

*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NpcSheetDisplay /> */}
        <DunegonGenerator/>
      </header>
    </div>
  );
}

export default App;
