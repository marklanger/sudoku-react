import boardBuilder from './boardBuilder.js';
import { game1 } from './data.js';

let board;

describe('The boardBuilder function, when built with game 1,', () => {
  beforeAll(() => {
    board = boardBuilder(game1);
  });

  test('should have a cell 0 with a value === ""', () => {
    expect(board[0]['value']).toBe('');
  });

  test('should have a length of 81', () => {
    expect(board.length).toBe(81);
  });
})


