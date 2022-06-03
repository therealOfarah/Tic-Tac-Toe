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
const arrayOfSquareEls = Array.from(squareEls)
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
function render(){
board.forEach(function(element, index){
    if (element === 1) {
      squareEls[index].textContent="X"
    } else if (element === -1){
      squareEls[index].textContent="O"
    }else if(element === null){
      squareEls[index].textContent=""
    }
  })
  if (winner === null){
    messageEl.textContent = `Its ${turn === 1 ? 'X' : 'O' }'s turn`
  }else if(winner === "T"){
    messageEl.textContent= `Game is a tie`
  }else if (winner === turn){
    messageEl.textContent = `Congrats ${turn === 1 ? 'X' : 'O' } you won`
  }
  
}
render()

function handleClick(evt){
  //with every click it will show in the console which box you clicked
  let sqIdx = evt.target.id.substring(2);
  //when spot is chosen on the board it will count as a turn
  board[sqIdx] = turn
  //changes the value to either 1 or -1
  turn = turn * -1
  // console.log(sqIdx)
  winner = getWinner()
  render()
}

function getWinner() {
  for (let i=0; i < winningCombos.length; i++) {
      let sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]
      if (sum === 3) {
          return 1
      } else  if (sum === -3) {
          return -1
      } else if (board.includes(null) === false) {
          return 'T'
      }
  }
  return null
}
  



// winningCombos.reduce()