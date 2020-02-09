import { cellsInSquares } from './data.js';

function boardPassesTests(board){
  return squaresDoNotFail(board) &&
         rowsDoNotFail(board) && 
         columnsDoNotFail(board)
};

function rowsDoNotFail(board){
  // go through each row and see if any two values are the same
  for(let row = 0; row < 9; row++){
    let listOfUsedVals = [];
    for(let cell = 0; cell < 9; cell++){
      let id = row * 9 + cell;
      if(listOfUsedVals.includes(board[id]['value'])){
	return false;
      }
      if(board[id]['value'] !== ''){
	listOfUsedVals.push(board[id]['value']);
      };
    };
  };
  return true;
};

function columnsDoNotFail(board){
  let testBoard = {...board};
  // go through each column and see if any two values are the same
  for(let col = 0; col < 9; col++){
    let listOfUsedVals = [];
    for(let cell = 0; cell < 9; cell++){
      let id = col + (cell * 9);
      if(listOfUsedVals.includes(testBoard[id]['value'])){
	return false;
      }
      if(testBoard[id]['value'] !== ''){
	listOfUsedVals.push(testBoard[id]['value']);
      };
    };
  };
  return true;
};

function squaresDoNotFail(board){
  const refsForSquares = cellsInSquares;
  for (let squareId = 1; squareId < 10; squareId++){
    let listOfUsedVals = [];
    for (let boxRef = 0; boxRef < 9; boxRef++){
      let id = refsForSquares[squareId][boxRef];
      if(listOfUsedVals.includes(board[id]['value'])) {
	return false;
      };
      if (board[id]['value'] !== ''){
        listOfUsedVals.push(board[id]['value']);
      };
    };
  };
  return true
};

export {
  boardPassesTests,
  rowsDoNotFail,
  columnsDoNotFail,
  squaresDoNotFail
};
