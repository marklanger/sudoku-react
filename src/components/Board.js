import React from 'react';
import Cell from './Cell.js';
import board from '../logic/boardData.js';

let boardData = board;

export default class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      boardData : boardData
    };
  };

  render(){
    return (
      <div className="sudoku-board">
	{
	  this.state.boardData.map((item) => {
	    return(
	      <Cell id={item.id} number={item.value} key={item.id.toString()} status={item.status} />
	    );
	  })
	}
      </div>
    );
  };
};
