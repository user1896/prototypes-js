function how_many_marks_in_lineup( lineup, playersMark ){
	let countMarks = 0
	for( let i = 0; i < 3; i++ ){
		if( lineup[i][0] && (lineup[i][0] === playersMark) ){
			countMarks++
		}
	}
	return countMarks
}

export default how_many_marks_in_lineup