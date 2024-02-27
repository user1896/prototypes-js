import matrix from './matrix.mjs'

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

export default lineups