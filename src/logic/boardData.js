let cell = function(){
  this.id = 0;
  this.value = 0;
  this.focused = false;
  this.status = "playable-cell";
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

let board = game1.map((item, index) => {
  let boardCell = new cell();
  boardCell.value = item;
  if (boardCell.value !== 0) {
    boardCell.status = "locked-cell"
  }
  boardCell.id = index;
  return boardCell;
});

// let board = game1.map((item, index) => [index, item]);

export default board;
