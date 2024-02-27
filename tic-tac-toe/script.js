import handleClick from './modules/handleClick.mjs'
import reset from './modules/reset.mjs'

const main = document.querySelector("main")
const reset_btn = document.querySelector("button")

function start_game(){
	main.addEventListener("click", handleClick)
}

start_game()

reset_btn.addEventListener("click", function(){
	reset()
	start_game()
})
// add the ability to choose your mark ('X' or 'O')
// when I mark my spot, make a little deley (for ex 500ms) before the machine mark hers
// When someone wins, the lineup that has 3 marks should be crossed
// When no one wins we should display "Draw" and reset the game