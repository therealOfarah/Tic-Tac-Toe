/*-------------------------------- Constants --------------------------------*/


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

function render(){
board.forEach(index => {
    if (board.index === 1) {
      squareEls[index].textContent="X"
    } else if (board.index === -1){
      squareEls[index].textContent="O"
    }
  })

if (winner === null){
  turn = turn *  1 ? 1 : -1
  messageEl.textContent = `It's ${turn}'s turn`
}else if(winner === T){
  messageEl.textContent = `Game is a tie`
}else if (winner === turn){
  messageEl.textContent = `Congrats ${turn} has won`
}
}

