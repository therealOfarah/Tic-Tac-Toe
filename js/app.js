/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [1, 1, 1, null, null, null, null, null, null],
  [null, null, null, 1, 1, 1, null, null, null],
  [null, null, null, null, null, null, 1, 1, 1],
  [1, null, null, null, 1, null, null, 1, null],
  [null, 1, null, null, 1, null, null, 1, null],
  [null, null, 1, null, null, 1, null, null, 1],
  [1, null, null, null, 1, null, null, null, 1,],
  [null, null, 1, null, 1, null, 1, null, null,],
]

/*---------------------------- Variables (state) ----------------------------*/
let board=[]
let turn=''
let winner=''


/*------------------------ Cached Element References ------------------------*/
const game = document.querySelector('.board')
const squareEls =document.querySelectorAll('.square')
const arrayOfSquareEls = Array.from(squareEls)
const messageEl =document.querySelector("#message")

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init(evt){
board=[null,null,null,null,null,null,null,null,null]
turn = 1
winner = null
render()
}

init()
function render(){
board.forEach(function(element, index){
    if (element === 1) {
      squareEls[index].textContent="X"
    } else if (element === -1){
      squareEls[index].textContent="O"
    }
  })
  if (winner === null){
    messageEl.textContent = `its ${turn === 1 ? 'X' : 'O' }'s turn`
  }else if(winner === T){
    messageEl.textContent= `Game is a tie`
  }else if (winner === turn){
    messageEl.textContent = `Congrats ${turn} you won`
  }
}

