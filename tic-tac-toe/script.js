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

/*
# What is done:

# games-logic:

bestLineup => in hooks: usePositionToMark
countMarks => in games-logic
isCanBeMarked => in games-logic
isWinner => in hooks: useWinner
play => in hooks: usePlay


# other modules:

crossLineup : in components: CrossLineup.js
handleClick => mixed logic in Grid.js and Spot.js
lineups => in hooks: useLineups.js
lineupToMatrix => in utils
matrix => in context: matrixContext.js
postWinning: mixed logic in App.js and calling crossLineup
reset => in components: ResetButton.js

*/