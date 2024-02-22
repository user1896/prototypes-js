const main = document.querySelector("main")

console.log(main.children)

const matrix = [
	['x'],[null],[null],
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

console.log( how_many_marks_in_lineup( lineups[6], 'x' ) )

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

console.log( is_lineup_can_be_marked(lineups[6]) )

function best_lineup_to_mark( playersMark ){
	let chosen_lineup = 0
	let position = 0
	let countMarks = 0
	for( let i = 0; i < 8; i++ ){
		const tmp_countMarks = how_many_marks_in_lineup(lineups[i], playersMark)
		const {is_can_be_marked, position_to_mark} = is_lineup_can_be_marked(lineups[i])

		if( (tmp_countMarks > countMarks) && (is_can_be_marked === true) ){
			countMarks = tmp_countMarks
			chosen_lineup = i
			position = position_to_mark
		}
	}
	return {
		chosen_lineup,
		position
	}
}

console.log( best_lineup_to_mark('x') )

function play( playersMark ){
	const {chosen_lineup, position} = best_lineup_to_mark(playersMark)
	lineups[chosen_lineup][position][0] = playersMark
}

// play('x')
// debugger
play('o')
// we need to count for when there are more free spaces in a lineup
// also count for when the opponent has 2, so we need to stop him from winning
display()

const ifWinner = (player) => {

}