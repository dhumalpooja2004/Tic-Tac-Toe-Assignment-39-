const board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = "X";
function renderBoard(){
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((boxElement, i) => {
      if (board[i] === "O") {
        boxElement.innerHTML = '<img  src="player1.png" height="70px" alt="X" />';
      } else if (board[i] === "X") {
        boxElement.innerHTML = '<img src="player2.png"  height="70px" alt="O" />';
      } else {
        boxElement.innerHTML = "";
      }
    });
  };
  renderBoard();

  function selectBox(boxNumber){
    if(board[boxNumber] !== -1){
      alert("Invalid Move")
      return;
    }
    board[boxNumber] =currentPlayer;
    renderBoard();
     
    if(currentPlayer === "X"){
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  

  const currentPlayerElement = document.getElementById("currentplayer");
  currentPlayerElement.innerText =  currentPlayer;
}
function resetBoard(){
 board.fill(-1);
 renderBoard();

currentPlayer = "X";
const currentPlayerElement = document.getElementById("currentplayer");
currentPlayerElement.innerText = currentPlayer; 

}