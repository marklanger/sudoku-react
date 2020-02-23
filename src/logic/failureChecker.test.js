import { boardPassesTests, sectionsDoNotFail } from './failureChecker.js';

import boardBuilder from './boardBuilder.js';
import { cellsInRows, cellsInSquares, game1 } from './data.js';

let board = boardBuilder(game1);

describe('The sectionsDoNotFail function', () => {
  beforeEach(() => {
    board = boardBuilder(game1);
  });
  
  test('should return true for initial board', () => {
    expect(sectionsDoNotFail(board, cellsInRows)).toEqual(true);
  })

  test('should return false if two "1s" in first square', () => {
    board[0]['value'] = 2;
    board[19]['value'] = 2;
    expect(sectionsDoNotFail(board, cellsInSquares)).toEqual(false);
  });

  test('should return false if two "9s" in last square', () => {
    board[62]['value'] = 9;
    board[69]['value'] = 9;
    expect(sectionsDoNotFail(board, cellsInSquares)).toEqual(false);
    board[62]['value'] = '';
    board[69]['value'] = '';
  });
});

describe('The boardPassesTests function', () =>{

  beforeEach(() => {
    board = boardBuilder(game1);
  });

  test('should return true for initial board', () => {
    expect(boardPassesTests(board)).toEqual(true);
  });

  test('should return false if two "1s" in first row', () => {
    board[0]['value'] = 1;
    board[1]['value'] = 1;
    expect(boardPassesTests(board)).toEqual(false);
  });
});
