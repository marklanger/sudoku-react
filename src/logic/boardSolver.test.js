import solveBoard from './boardSolver.js';

import boardBuilder from './boardBuilder.js';
import { cellsInSquares, game1, game1solved } from './data.js';

let board1 = boardBuilder(game1);

let board1solved = boardBuilder(game1solved);

describe('The solveBoard function', () => {
  console.log(solveBoard(board1, cellsInSquares));
  test('should return an object', () => {
    solveBoard
  });
});
