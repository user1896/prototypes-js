import lineups from '../lineups.mjs'
import how_many_marks_in_lineup from './countMarks.mjs'
import is_lineup_can_be_marked from './isCanBeMarked.mjs'

function best_lineup_to_mark( playersMark, opponentsMark ){
	let chosen_lineup = 0
	let position = 0
	let players_countMarks = 0
	let opponents_countMarks = 2
	let is_opponent_about_to_win = false
	for( let i = 0; i < 8; i++ ){
		const players_current_lineup_countMarks = how_many_marks_in_lineup(lineups[i], playersMark)
		const opponents_current_lineup_countMarks = how_many_marks_in_lineup(lineups[i], opponentsMark)
		const {is_can_be_marked, position_to_mark} = is_lineup_can_be_marked(lineups[i])

		// If the player is about to win, then we return immediately
		if( is_can_be_marked && (players_current_lineup_countMarks === 2) ){
		// The player can have two marks while the opponent has the third spot, so we check if "is_can_be_marked" first
			return {
				chosen_lineup: i,
				position: position_to_mark
			}
		}

		// If the opponent is about to win (has 2 marks), then store this lineup's info
		if( is_can_be_marked && (opponents_current_lineup_countMarks === 2) ){
			// opponent can have two marks but the third spot is taken by the player, so we check "if(is_can_be_marked)" first
			chosen_lineup = i
			position = position_to_mark
			is_opponent_about_to_win = true
		}

		if( (is_opponent_about_to_win === false)
			// if "is_opponent_about_to_win == true" then nothing matters until we find a lineup where we have two marks to
			// take the win, or if we can't win, then we return the lineup where the opponent is about to win to stop him.
			
			&& is_can_be_marked
			// we can have two marks but the third spot could be taken by the opponent, so we check "if(is_can_be_marked)" first
			
			&& (players_current_lineup_countMarks >= players_countMarks)
			// if the player has one mark then this lineup should be taken over a lineup that has no marks.
			
			&& (opponents_current_lineup_countMarks < opponents_countMarks)){
				// if the player has one mark in the lineup with two empty spots, then it's better than one mark with only one 
				// empty spot (because the oponent took the other).
			
			players_countMarks = players_current_lineup_countMarks
			opponents_countMarks = opponents_current_lineup_countMarks
			chosen_lineup = i
			position = position_to_mark
			if( ((i === 1) || (i === 4) || (i === 6) || (i === 7)) && !lineups[i][1][0] ){
				// if we're at a lineup that crose the middle of the matrix, and if the middle is empty, because the player will
				// have move advantage if we cross the middle of the matrix to win the game.
				position = 1
			}
		}
	}
	return {
		chosen_lineup,
		position
	}
}

export default best_lineup_to_mark