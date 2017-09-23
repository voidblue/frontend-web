var board = document.querySelectorAll("#board span");
board[0].owncolor = 'black'
board[1].owncolor = 'white'
board[2].owncolor = 'black'
board[3].owncolor = 'white'
board[4].owncolor = 'white'
board[5].owncolor = 'black'
board[6].owncolor = 'white'
board[7].owncolor = 'black'
board[8].owncolor = 'black'
board[9].owncolor = 'white'
board[10].owncolor = 'black'
board[11].owncolor = 'white'
board[12].owncolor = 'white'
board[13].owncolor = 'black'
board[14].owncolor = 'white'
board[15].owncolor = 'black'

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
