let cell = function(){
  this.id = 0;
  this.value = '';
  this.toggled = false;
  this.status = "playable-cell";
  this.border = "";
  this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

function boardBuilder(gameData){
  return gameData.map((item, index) => {
    let boardCell = new cell();
    if (item !== 0) {
      boardCell.value = item;
      boardCell.status = "locked-cell";
    }
    boardCell.id = index;
    boardCell.border = setBorder(index);
    return boardCell;
  });
};

export default boardBuilder;
