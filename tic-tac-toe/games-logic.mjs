import lineups from './lineups.mjs'

function how_many_marks_in_lineup( lineup, playersMark ){
	let countMarks = 0
	for( let i = 0; i < 3; i++ ){
		if( lineup[i][0] && (lineup[i][0] === playersMark) ){
			countMarks++
		}
	}
	return countMarks
}

function is_lineup_can_be_marked( lineup ){
	for( let i = 0; i < 3; i++ ){
		if( !lineup[i][0] ){
			return {
				is_can_be_marked: true,
				position_to_mark: i
			}
		}
	}
	return {
		is_can_be_marked: false,
		position_to_mark: null
	}
}

function best_lineup_to_mark( playersMark, opponentsMark ){
	let chosen_lineup = 0
	let position = 0
	let players_countMarks = 0
	let opponents_countMarks = 2
	for( let i = 0; i < 8; i++ ){
		const players_current_lineup_countMarks = how_many_marks_in_lineup(lineups[i], playersMark)
		const opponents_current_lineup_countMarks = how_many_marks_in_lineup(lineups[i], opponentsMark)
		const {is_can_be_marked, position_to_mark} = is_lineup_can_be_marked(lineups[i])
		// const current_lineup_empty_spots = count_empty_spots(lineups[i])

		// If opponent is about to win (has 2 marks), then we return this lineup to stop him from winning
		if( is_can_be_marked && (opponents_current_lineup_countMarks === 2) ){
			// opponent can have two marks but the third spot is taken by the player, so we check "if(is_can_be_marked)" first
			return {
				chosen_lineup: i,
				position: position_to_mark
			}
		}

		if( is_can_be_marked
			// we can have two marks but the third spot could be taken by the opponent, so we check "if(is_can_be_marked)" first
			&& (players_current_lineup_countMarks >= players_countMarks)
			// if player has two marks then this lineup should be taken instead of a lineup that has only one mark.
			
			&& (opponents_current_lineup_countMarks < opponents_countMarks)){
				// if a player had one mark in the lineup with two empty spots, then it's better than one mark with only one 
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

const isWinner = (playersMark, chosen_lineup) => {
	let countMarks = 0
	for( let i = 0; i < 3; i++ ){
		if(lineups[chosen_lineup][i][0] === playersMark )
			countMarks++
	}
	if(countMarks === 3)
		return true
	else
		return false
}

function play( playersMark, opponentsMark ){
	const {chosen_lineup, position} = best_lineup_to_mark(playersMark, opponentsMark)
	lineups[chosen_lineup][position][0] = playersMark
	if( isWinner( playersMark, chosen_lineup ) )
		document.querySelector("h2").innerHTML = "WINNER"
}

export default play