import lineups from '../lineups.mjs'
import best_lineup_to_mark from './bestLineup.mjs'
import lineupToMatrix from '../lineupToMatrix.mjs'

function play( playersMark, opponentsMark ){
	const {chosen_lineup, position} = best_lineup_to_mark(playersMark, opponentsMark)
	lineups[chosen_lineup][position][0] = playersMark
	
	// Now update the DOM element with the corresponding matrix element
	const matrix_position = lineupToMatrix(chosen_lineup, position)
	document.getElementById(matrix_position).innerText = playersMark
}

export default play