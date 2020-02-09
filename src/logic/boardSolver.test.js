import solveBoard from './boardSolver.js';

import boardBuilder from './boardBuilder.js';
import { game1, game1solved } from './data.js';

let board1 = boardBuilder(game1);

let board1solved = boardBuilder(game1solved);

describe('The solveBoard function', () => {
  test('should return an object', () => {
    expect(typeof solveBoard(board1)).toBe('object');
  });
});
