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