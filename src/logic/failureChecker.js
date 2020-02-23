import { cellsInRows, cellsInColumns, cellsInSquares } from './data.js';

function boardPassesTests(board){
  return sectionDoesNotFail(board, cellsInRows) &&
         sectionDoesNotFail(board, cellsInColumns) && 
         sectionDoesNotFail(board, cellsInSquares)
};

function sectionDoesNotFail(board, referenceCells){
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
