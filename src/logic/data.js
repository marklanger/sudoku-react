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

const game1solved = [
  3,9,8,2,6,5,4,1,7,
  5,4,1,9,8,7,6,3,2,
  7,2,6,4,3,1,5,9,8,
  6,7,5,1,9,4,8,2,3,
  9,8,3,5,2,6,1,7,4,
  2,1,4,8,7,3,9,6,5,
  4,6,2,3,5,9,7,8,1,
  8,5,7,6,1,2,3,4,9,
  1,3,9,7,4,8,2,5,6
];

export { game1, game1solved, cellsInSquares };
