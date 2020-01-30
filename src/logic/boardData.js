let cell = function(){
  this.id = 0;
  this.value = '';
  this.toggled = false;
  this.status = "playable-cell";
  this.border = "";
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


let board = game1.map((item, index) => {
  let boardCell = new cell();
  if (item !== 0) {
    boardCell.value = item;
    boardCell.status = "locked-cell";
  }
  boardCell.id = index;
  boardCell.border = setBorder(index);
  return boardCell;
});

export default board;
