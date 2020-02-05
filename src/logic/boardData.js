let cell = function(){
  this.id = 0;
  this.value = '';
  this.toggled = false;
  this.status = "playable-cell";
  this.border = "";
  this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

const game1 = [
   0,0,3,0,2,0,6,0,0,
   9,0,0,3,0,5,0,0,1,
   0,0,1,8,0,6,4,0,0,
   0,0,8,1,0,2,9,0,0,
   7,0,0,0,0,0,0,0,8,
   0,0,6,7,0,8,2,0,0,
   0,0,2,6,0,9,5,0,0,
   8,0,0,2,0,3,0,0,9,
   0,0,5,0,1,0,3,0,0
];

const cellsInSquares = {
  1: [0, 1, 2, 9, 10, 11, 18, 19, 20],
  2: [3, 4, 5, 12, 13, 14, 21, 22, 23],
  3: [6, 7, 8, 15, 16, 17, 24, 25, 26],
  4: [27, 28, 29, 36, 37, 38, 45, 46, 47],
  5: [30, 31, 32, 39, 40, 41, 48, 49, 50],
  6: [33, 34, 35, 42, 43, 44, 51, 52, 53],
  7: [54, 55, 56, 63, 64, 65, 72, 73, 74],
  8: [57, 58, 59, 66, 67, 68, 75, 76, 77],
  9: [60, 61, 62, 69, 70, 71, 78, 79, 80]
};

function setBorder(id){
  const cellsWithRightBorder = [2,5,11,14,20,23,29,32,38,41,47,50,56,59,65,68,74,77]
  const cellsWithBottomBorder = [18,19,20,21,22,23,24,25,26,45,46,47,48,49,50,51,52,53]
  if(cellsWithRightBorder.includes(id) && cellsWithBottomBorder.includes(id)){
    return "right-border bottom-border"
  }else if(cellsWithRightBorder.includes(id)){
    return "right-border"
  }else if(cellsWithBottomBorder.includes(id)){
    return "bottom-border"
  }
};

function solveBoard(board, refsForSquares){
  for (let id = 0; id < 81; id++){
    if (board[id]['value'] == '' && board[id]['possibleValues'].length == 0){
      board[id]['value'] = '';
      board[id - 1]['value'] = 0;
      board[id]['possibleValues'] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      id -= 2;
    }else if (board[id]['value'] == 0){
      board[id]['value'] = board[id]['possibleValues'].pop();
    };

    // if board does fail and there are more numbers to try, try the next number
    if (boardDoesNotFail(board, refsForSquares) && board[id]['possibleValues'].length > 0){
      board[id]['value'] = 0;
      id -= 1;
    // if failure && all numbers have been tried, go back one box and cycle up
    } else if (boardDoesNotFail(board, refsForSquares) && board[id]['possibleValues'].length == 0){
      board[id]['value'] = '';
      board[id - 1]['value'] = '';
      board[id]['possibleValues'] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      id -= 2;
    };
  };
};

function boardDoesNotFail(board, cellsInSquares){
  return squaresDoNotFail(board, cellsInSquares) &&
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
  // go through each column and see if any two values are the same
  for(let col = 0; col < 9; col++){
    let listOfUsedVals = [];
    for(let cell = 0; cell < 9; cell++){
      let id = col + (cell * 9);
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

function squaresDoNotFail(board, refsForSquares){
  for (let squareId = 1; squareId < 10; squareId++){
    let listOfUsedVals = [];
    for (let boxRef = 0; boxRef < 9; boxRef++){
      let id = refsForSquares[squareId][boxRef];
      if(listOfUsedVals.includes(board[id]['value'])) {
	return false;
      };
      if (board[id]['value'] !== 0){
        listOfUsedVals.push(board[id]['value']);
      };
    };
  };
  return true
};

let boardData = game1.map((item, index) => {
  let boardCell = new cell();
  if (item !== 0) {
    boardCell.value = item;
    boardCell.status = "locked-cell";
  }
  boardCell.id = index;
  boardCell.border = setBorder(index);
  return boardCell;
});

export default boardData;
