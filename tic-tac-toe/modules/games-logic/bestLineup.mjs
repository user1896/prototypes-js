import lineups from '../lineups.mjs'
import how_many_marks_in_lineup from './countMarks.mjs'
import is_lineup_can_be_marked from './isCanBeMarked.mjs'

function best_lineup_to_mark( playersMark, opponentsMark ){
	let chosen_lineup = null
	let position = null
	let players_countMarks = 0
	let opponents_countMarks = 2
	let is_opponent_about_to_win = false

	if( !lineups[1][1][0] ){ // lineups[1][1] represents matrix[4] which is the middle
		// crossing the middle always gives an advantage to win the game, because it makes connection with every spot
		// and we stop the opponent from making this connection. When we do this early game we won't face the
		// problem where the opponent has 2 marks somewhere.
		return {
			chosen_lineup: 1,
			position: 1
		}
	}
	else{
		for( let i = 0; i < 8; i++ ){
			const players_current_lineup_countMarks = how_many_marks_in_lineup(lineups[i], playersMark)
			const opponents_current_lineup_countMarks = how_many_marks_in_lineup(lineups[i], opponentsMark)
			const {is_can_be_marked, position_to_mark} = is_lineup_can_be_marked(lineups[i])
	
			if( is_can_be_marked ){
				// If the player has 2 marks and he is about to win, the opponent could already have taken the third spot, 
				// and the same thing can happen to the opponent, so we always check if "is_can_be_marked == true" first.
	
				// If the player is about to win, then we return immediately
				if( players_current_lineup_countMarks === 2 ){
					return {
						chosen_lineup: i,
						position: position_to_mark
					}
				}
		
				// If the opponent is about to win (has 2 marks), then store this lineup's info
				if( opponents_current_lineup_countMarks === 2 ){
					chosen_lineup = i
					position = position_to_mark
					is_opponent_about_to_win = true
				}
		
				if( (is_opponent_about_to_win === false)
					// if "is_opponent_about_to_win == true" then nothing matters until we find a lineup where we have two marks to
					// take the win, or if we can't win, then we return the lineup where the opponent is about to win to stop him.
					
					&& (players_current_lineup_countMarks >= players_countMarks)
					// if the player has one mark then this lineup should be taken over a lineup that has no marks.
					
					&& (opponents_current_lineup_countMarks < opponents_countMarks)){
						// if the player has one mark in the lineup with two empty spots, then it's better than one mark with only one 
						// empty spot (because the oponent took the other).
					
					players_countMarks = players_current_lineup_countMarks
					opponents_countMarks = opponents_current_lineup_countMarks
					chosen_lineup = i
					position = position_to_mark
				}
			}
		}
	}
	return {
		chosen_lineup,
		position
	}
}

export default best_lineup_to_mark