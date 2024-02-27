import lineups from '../lineups.mjs'
import best_lineup_to_mark from './bestLineup.mjs'

function play( playersMark, opponentsMark ){
	const {chosen_lineup, position} = best_lineup_to_mark(playersMark, opponentsMark)
	lineups[chosen_lineup][position][0] = playersMark
}

export default play