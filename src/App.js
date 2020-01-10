import React from 'react';
import './App.css';

function Header(){
  return(
    <div className="board-header">
      <h1>Sudoku</h1>
    </div>
  );
};

function Cell(props){
  return(
      <div className="cell">
      {props.number}
      </div>
  );
};

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      boardData : [
      0,0,3,0,2,0,6,0,0,
      9,0,0,3,0,5,0,0,1,
      0,0,1,8,0,6,4,0,0,
      0,0,8,1,0,2,9,0,0,
      7,0,0,0,0,0,0,0,8,
      0,0,6,7,0,8,2,0,0,
      0,0,2,6,0,9,5,0,0,
      8,0,0,2,0,3,0,0,9,
      0,0,5,0,1,0,3,0,0
      ]
    };
  };

  render(){
    return (
      <div className="sudoku-board">
	{
	  this.state.boardData.map((item) => {
	    if(item !== 0){
	      return <Cell number={item} />
	    } else {
	      return <Cell number=" " />;
	    }
	  })
	}
      </div>
    );
  };
};

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
