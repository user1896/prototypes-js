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
// when I mark my spot, make a little deley (for ex 500ms) before the machine mark hers
// animate the marks and the cross-line
// add the ability to choose your mark ('X' or 'O')