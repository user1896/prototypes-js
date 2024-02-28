import matrix from './matrix.mjs'

function reset(){
	const line = document.getElementById("line")
	const diagonal_line = document.getElementById("diagonal-line")

	line.classList.remove(
		"display-line", "cross-line-0", "cross-line-2",
		"cross-line-3", "cross-line-4", "cross-line-5"
	)

	diagonal_line.classList.remove(
		"display-line", "cross-diagonal-line-1", "cross-diagonal-line-2"
	)

	matrix[0][0] = null
	matrix[1][0] = null
	matrix[2][0] = null
	matrix[3][0] = null
	matrix[4][0] = null
	matrix[5][0] = null
	matrix[6][0] = null
	matrix[7][0] = null
	matrix[8][0] = null

	document.getElementById("0").innerText = ""
	document.getElementById("1").innerText = ""
	document.getElementById("2").innerText = ""
	document.getElementById("3").innerText = ""
	document.getElementById("4").innerText = ""
	document.getElementById("5").innerText = ""
	document.getElementById("6").innerText = ""
	document.getElementById("7").innerText = ""
	document.getElementById("8").innerText = ""

	document.querySelector("h2").innerHTML = "Play"
}

export default reset