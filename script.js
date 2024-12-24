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
  checkforWinner();
}
function resetBoard(){
 board.fill(-1);
 renderBoard();

currentPlayer = "X";
const currentPlayerElement = document.getElementById("currentplayer");
currentPlayerElement.innerText = currentPlayer; 

}
    function checkforWinner() {
       
        if (board[0] == "X" && board[2] == "X") {
            alert("Player X Wins");
        }else if (board[3] == "X" && board[4] == "X" && board[5] == "X"){
            alert("Player X Wins"); 
        }else if (board[6] == "X" && board[7] == "X" && board[8] == "X"){
            alert("Player X Wins"); 
        }else if (board[0] == "X" && board[3] == "X" && board[6] == "X"){
            alert("Player X Wins"); 
        }else if (board[1] == "X" && board[4] == "X" && board[7] == "X"){
            alert("Player X Wins"); 
        }else if (board[2] == "X" && board[5] == "X" && board[8] == "X"){
            alert("Player X Wins");
        }else if (board[0] == "X" && board[4] == "X" && board[8] == "X"){
            alert("Player X Wins"); 
        }else if (board[2] == "X" && board[4] == "X" && board[6] == "X"){
            alert("Player X Wins"); 
        }



        if (board[0] == "O" && board[2] == "O") {
            alert("Player O Wins");
        }else if (board[3] == "O" && board[4] == "O" && board[5] == "O"){
            alert("Player O Wins"); 
        }else if (board[6] == "O" && board[7] == "O" && board[8] == "O"){
            alert("Player O Wins"); 
        }else if (board[0] == "O" && board[3] == "O" && board[6] == "O"){
            alert("Player O Wins"); 
        }else if (board[1] == "O" && board[4] == "O" && board[7] == "O"){
            alert("Player O Wins"); 
        }else if (board[2] == "O" && board[5] == "O" && board[8] == "O"){
            alert("Player O Wins");
        }else if (board[0] == "O" && board[4] == "O" && board[8] == "O"){
            alert("Player O Wins"); 
        }else if (board[2] == "O" && board[4] == "O" && board[6] == "O"){
            alert("Player O Wins"); 
        }
    }