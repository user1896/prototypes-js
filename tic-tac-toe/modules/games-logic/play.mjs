import lineups from '../lineups.mjs'
import best_lineup_to_mark from './bestLineup.mjs'
import lineupToMatrix from '../lineupToMatrix.mjs'

function play( playersMark, opponentsMark ){
	const {chosen_lineup, position} = best_lineup_to_mark(playersMark, opponentsMark)

	// when "chosen_lineup == null" it means all spots are taking, this can happen when the player plays first and
	// takes the last spot but he doesn't win, so when the machine plays second it will have no spot.
	if( chosen_lineup !== null ){
		lineups[chosen_lineup][position][0] = playersMark
	
		// Now update the DOM element with the corresponding matrix element
		const matrix_position = lineupToMatrix(chosen_lineup, position)
		document.getElementById(matrix_position).innerText = playersMark

		return true
	}
	return false // we didn't mark any spot, so we return 'false', this will be used to determine a 'Draw'
}

export default play