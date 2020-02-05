import React from 'react';
import boardData from '../logic/boardData.js';
import Cell from './Cell.js'

let board = boardData;

export default class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board : board,
      toggled : ''
    };
    this.toggleCell = this.toggleCell.bind(this);
    this.updateValue = this.updateValue.bind(this);
  };

  toggleCell(id, e){
    if (this.state.toggled !== ''){
      let originallyToggledCell = this.state.toggled;
      this.setState(prevState => {
	return board[originallyToggledCell].toggled = !prevState.board[originallyToggledCell].toggled
      })
    }
    this.setState( prevState => {
      return board[id].toggled = !prevState.board[id].toggled
    });
    this.setState( prevState => {
      return { toggled : id }
    });
  };

  updateValue(id, e){
    e.persist();
    if(/[1-9]/.test(e.key)){
      this.setState(prevState => {
	return board[id].value = e.key;
      });
    } else if (e.key === 'Delet' || e.key === 'Backspace'){
      this.setState(prevState => {
        return board[id].value = '';
      });
    }
  };

  render(){
    return (
      <div className="sudoku-board">
	{
	  this.state.board.map((item) => {
	    return(
	      <Cell
	        key={item.id.toString()}
	        id={item.id}
	        className={item.status + ' ' + item.border + ' ' + (item.toggled ? 'toggled' : '')}
	        onClick={(e) => this.toggleCell(item.id, e)}
	        tabIndex='0'
	        onKeyDown={(e) => this.updateValue(item.id, e)}
	        value={item.value}
	      />
	    );
	  })
	}
      </div>
    );
  };
};
