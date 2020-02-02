import React from 'react';
import Board from './components/Board.js';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <GameDirections />
    </div>
  );
}

function Header(){
  return(
    <div className="board-header">
      <h1>Sudoku</h1>
    </div>
  );
};

function GameDirections(){
  return(
    <div className="directions">
    <h3>Directions</h3>
    <p>
    Each row, column, and square of nine tiles needs to contain the digits 1-9.<br />
    There may be no repeated digits in any row, column, or square.
    </p>
    <ul>
    <li>Select a tile and add a number.</li>
    <li>Gray tiles are the starting tiles.</li>
    <li>Press Backspace or Delete to remove a number.</li>
    <li>Click the "check" button to check for issues.</li>
    </ul>
    </div>
  );
};

export default App;
