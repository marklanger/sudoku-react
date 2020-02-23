import React from 'react';
import boardBuilder from '../logic/boardBuilder.js';
import solveBoard from '../logic/boardSolver.js';
import { boardPassesTests } from '../logic/failureChecker.js';
import Cell from './Cell.js'
import { game1 } from '../logic/data.js'

let board = boardBuilder(game1);

export default class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board : board,
      toggled : ''
    };
    this.toggleCell = this.toggleCell.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.solveBoard = this.solveBoard.bind(this);
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

  handleKey(id, e){
    e.persist();
    if(board[id]['status'] === "locked-cell"){
      return;
    };
    // if a number, update value of the cell to be the number
    if(/[1-9]/.test(e.key)){
      this.setState(prevState => {
	return board[id].value = e.key;
      });
    } else if (e.key === 'Delete' || e.key === 'Backspace'){
      this.setState(prevState => {
        return board[id].value = '';
      });
    } else if (e.key === 'Enter') {
      this.toggleCell(id, e);
    }
  };

  solveBoard(){
    board = solveBoard(board);
    this.setState(
      {board: board}
    )
  };

  checkForFailure(){
    alert(boardPassesTests(board));
  }

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
              tabIndex={(item.id + 1).toString()}
              onKeyDown={(e) => this.handleKey(item.id, e)}
              value={item.value}
            />
          );
        })
      }
      <button onClick={() => this.solveBoard()}>Solve</button>
      <button onClick={() => this.checkForFailure()}>Check</button>
      </div>
    );
  };
};
