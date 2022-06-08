/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],

]

/*---------------------------- Variables (state) ----------------------------*/
let board=[]
let turn=''
let winner=''


/*------------------------ Cached Element References ------------------------*/
const gameBoard = document.querySelector('.board')
const squareEls =document.querySelectorAll('.square')
const messageEl =document.querySelector("#message")
const resetBtnEl = document.querySelector("#resetBtnEl")
/*----------------------------- Event Listeners -----------------------------*/
gameBoard.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
function init(evt){
board=[null,null,null,null,null,null,null,null,null]
turn = 1
winner = getWinner()
render()
}

init()
function render() {
  board.forEach(function (element, index) {
    if (element === 1) {
      squareEls[index].textContent = "🐱"
    } else if (element === -1) {
      squareEls[index].textContent = "🐶"
    } else if (element === null) {
      squareEls[index].textContent = ""
    }
  })
  if (winner === null) {
    messageEl.textContent = `Its ${turn === 1 ? '🐱' : '🐶'}'s turn`
  } else if (winner === "T") {
    messageEl.textContent = `Game is a tie`
  } else {  // <== else statement works better here (if the other two conditions fail, we default to this)
    messageEl.textContent = `Congrats ${turn === -1 ? '🐱' : '🐶'} you won`
  }
}

// If condition checks two things before allowing a click.
// the square must be empty
// and the winner must be null
function handleClick(evt) {
  let sqIdx = evt.target.id.substring(2);
  if (!board[sqIdx] && winner === null) {
    board[sqIdx] = turn
    turn = turn * -1
    winner = getWinner()
    render()
  }
}

function getWinner() {
  for (let i=0; i < winningCombos.length; i++) {
      if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]===3) {
          return 1
      } else  if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
          return -1
      } 
    }
    if (!board.includes(null)) { 
      return "T"
      }
      return null
    }