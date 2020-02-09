import { boardPassesTests, rowsDoNotFail, columnsDoNotFail, squaresDoNotFail } from './failureChecker.js';

import boardBuilder from './boardBuilder.js';
import { game1 } from './data.js';

let board = boardBuilder(game1);

describe('The rowsDoNotFail function', () =>{

  beforeEach(() => {
    board = boardBuilder(game1);
  });

  test('should return true for initial board', () => {
    expect(rowsDoNotFail(board)).toEqual(true);
  });

  test('should return false if two "1s" in first row', () => {
    board[0]['value'] = 1;
    board[1]['value'] = 1;
    expect(rowsDoNotFail(board)).toEqual(false);
  });
});

describe('The columnsDoNotFail function', () =>{

  beforeEach(() => {
    board = boardBuilder(game1);
  });

  test('should return true for initial board', () => {
    expect(columnsDoNotFail(board)).toEqual(true);
  });

  test('should return false if two "2s" in first column', () => {
    board[0]['value'] = 1;
    board[18]['value'] = 1;
    expect(columnsDoNotFail(board)).toEqual(false);
  });

  test('should return false if two "9s" in last column', () => {
    board[8]['value'] = 9;
    board[80]['value'] = 9;
    expect(columnsDoNotFail(board)).toEqual(false);
  });
});

describe('The squaresDoNotFail function', () => {
  beforeEach(() => {
    board = boardBuilder(game1);
  });
  
  test('should return true for initial board', () => {
    expect(squaresDoNotFail(board)).toEqual(true);
  })

  test('should return false if two "1s" in first square', () => {
    board[0]['value'] = 2;
    board[19]['value'] = 2;
    expect(squaresDoNotFail(board)).toEqual(false);
  });

  test('should return false if two "9s" in last square', () => {
    board[62]['value'] = 9;
    board[69]['value'] = 9;
    expect(squaresDoNotFail(board)).toEqual(false);
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
