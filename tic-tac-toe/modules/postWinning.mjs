import crossLineup from './crossLineup.mjs'
import handleClick from './handleClick.mjs'

function postWinning( winners_mark, lineup, main_grid ){
	// update the Dom to display the winner
	document.querySelector("h2").innerHTML = winners_mark + " WINNER"

	// cross the 3 marks' lineup
	crossLineup( lineup )

	// remove interactivity after winning until we click the button "reset"
	main_grid.removeEventListener("click", handleClick)
}

export default postWinning