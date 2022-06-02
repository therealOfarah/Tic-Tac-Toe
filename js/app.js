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
  board.forEach(function(element, index){
    if (board.index=== 1) {
      squareEls[index].textContent="X"
    } else if (board.index === -1){
      squareEls[index].textContent="O"
    }
  })
}
// let T = "tie"
// if (winner === null){
//   turn = turn * - 1 ? -1 : 1
// }else if(winner === T){
//   messageEl = `Game is a tie`
// }


