import React from 'react';
import board from '../logic/boardData.js';
import Cell from './Cell.js'

let boardData = board;

export default class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      boardData : boardData,
      toggled : ''
    };
    this.toggleCell = this.toggleCell.bind(this);
  };

  toggleCell(id, e){
    if (this.state.toggled !== ''){
      let originallyToggledCell = this.state.toggled;
      this.setState(prevState => {
	return boardData[originallyToggledCell].toggled = !prevState.boardData[originallyToggledCell].toggled
      })
    }
    this.setState( prevState => {
      return boardData[id].toggled = !prevState.boardData[id].toggled
    });
    this.setState( prevState => {
      return { toggled : id }
    });
  };

  render(){
    return (
      <div className="sudoku-board">
	{
	  this.state.boardData.map((item) => {
	    return(
	      <Cell
	        key={item.id.toString()}
	        id={item.id}
	        className={item.status + ' ' + (item.toggled ? 'toggled' : '')}
	        onClick={(e) => this.toggleCell(item.id, e)}
	        value={item.value}
	      />
	    );
	  })
	}
      </div>
    );
  };
};
