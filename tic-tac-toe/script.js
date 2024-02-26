const main = document.querySelector("main")

console.log(main.children)

const matrix = [
	[null],[null],[null],
	[null],['x'],[null],
	['x'],[null],['o']
]

function display(){
	document.getElementById("box0").innerHTML = matrix[0][0]
	document.getElementById("box1").innerHTML = matrix[1][0]
	document.getElementById("box2").innerHTML = matrix[2][0]
	document.getElementById("box3").innerHTML = matrix[3][0]
	document.getElementById("box4").innerHTML = matrix[4][0]
	document.getElementById("box5").innerHTML = matrix[5][0]
	document.getElementById("box6").innerHTML = matrix[6][0]
	document.getElementById("box7").innerHTML = matrix[7][0]
	document.getElementById("box8").innerHTML = matrix[8][0]
}
display()

const lineups = [
	[ matrix[0], matrix[1], matrix[2] ], // lineup 0
	[ matrix[3], matrix[4], matrix[5] ], // lineup 1
	[ matrix[6], matrix[7], matrix[8] ], // lineup 2
	[ matrix[0], matrix[3], matrix[6] ], // lineup 3
	[ matrix[1], matrix[4], matrix[7] ], // lineup 4
	[ matrix[2], matrix[5], matrix[8] ], // lineup 5
	[ matrix[0], matrix[4], matrix[8] ], // lineup 6
	[ matrix[2], matrix[4], matrix[6] ]  // lineup 7
]

function how_many_marks_in_lineup( lineup, playersMark ){
	let countMarks = 0
	for( let i = 0; i < 3; i++ ){
		if( lineup[i][0] && (lineup[i][0] === playersMark) ){
			countMarks++
		}
	}
	return countMarks
}

function count_empty_spots( lineup ){
	let empty_spots = 0
	for( let i = 0; i < 3; i++ ){
		if( !lineup[i][0] ){
			empty_spots++
		}
	}
	return empty_spots
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
	let countMarks = 0
	let empty_spots = 0
	for( let i = 0; i < 8; i++ ){
		const players_current_lineup_countMarks = how_many_marks_in_lineup(lineups[i], playersMark)
		const opponents_current_lineup_countMarks = how_many_marks_in_lineup(lineups[i], opponentsMark)
		const {is_can_be_marked, position_to_mark} = is_lineup_can_be_marked(lineups[i])
		const current_lineup_empty_spots = count_empty_spots(lineups[i])

		// If opponent is about to win (has 2 marks), then we return this lineup to stop him from winning
		if( is_can_be_marked && (opponents_current_lineup_countMarks === 2) ){
			// opponent can have two marks but the third sport is taken by the player, so we check "if(is_can_be_marked)" first
			return {
				chosen_lineup: i,
				position: position_to_mark
			}
		}

		if( is_can_be_marked && 
			// we can have two marks but the third sport is taken by opponent, so we check "if(is_can_be_marked)" first
			(players_current_lineup_countMarks >= countMarks) && 
			// if player has two marks then this lineup should be taken instead of a lineup that has only one mark.
			(current_lineup_empty_spots > empty_spots)){
				// if a player had one mark in the lineup with two empty spots, then it's better than one mark with only one 
				// empty spot (because the oponent took the other).
			empty_spots = current_lineup_empty_spots
			countMarks = players_current_lineup_countMarks
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

function play( playersMark, opponentsMark ){
	const {chosen_lineup, position} = best_lineup_to_mark(playersMark, opponentsMark)
	lineups[chosen_lineup][position][0] = playersMark
}

// const ifWinner = (player) => {

// }