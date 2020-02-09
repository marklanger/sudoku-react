import { boardDoesNotFail } from './failureChecker.js';

function solveBoard(board, refsForSquares){
  for (let id = 0; id < 81; id++){
    if (board[id]['value'] === '' && board[id]['possibleValues'].length === 0){
      board[id]['value'] = '';
      board[id - 1]['value'] = '';
      board[id]['possibleValues'] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      id -= 2;
    }else if (board[id]['value'] === ''){
      board[id]['value'] = board[id]['possibleValues'].pop();
    };

    // if board does fail and there are more numbers to try, try the next number
    if (!boardDoesNotFail(board, refsForSquares) && board[id]['possibleValues'].length > 0){
      board[id]['value'] = '';
      id -= 1;
    // if failure && all numbers have been tried, go back one box and cycle up
    } else if (!boardDoesNotFail(board, refsForSquares) && board[id]['possibleValues'].length === 0){
      board[id]['value'] = '';
      board[id - 1]['value'] = '';
      board[id]['possibleValues'] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      id -= 2;
    };
  };
};

export default solveBoard;
