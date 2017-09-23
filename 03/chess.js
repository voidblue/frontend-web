var board = document.querySelectorAll("#board span");
var k = 0;
var colors = [];
colors[0] = 'black';
colors[1] = 'white';
for(var i = 0 ; i < 4 ; i++){
  var colorpos = 0;
  if (i%2 == 0){
    colorpos = 1;
  }
  for(var j = 0; j < 4 ; j++){
    board[k].owncolor = colors[colorpos];
    k++;
    if (colorpos == 1) colorpos--;
    else colorpos++;
  }
}

for (var i = 0 ; i < board.length ; i++){
  board[i].style.backgroundColor = board[i].owncolor;
}

var before;


function changeBG(event){
  if (before){
    before.style.backgroundColor = before.owncolor;
  }
  event.target.style.backgroundColor = 'red';
  before = event.target;
}

for(var i=0; i<board.length ; i++){
    board[i].addEventListener('click', changeBG)
}
