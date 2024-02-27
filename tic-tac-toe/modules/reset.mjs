import matrix from './matrix.mjs'

function reset(){
	matrix[0][0] = null
	matrix[1][0] = null
	matrix[2][0] = null
	matrix[3][0] = null
	matrix[4][0] = null
	matrix[5][0] = null
	matrix[6][0] = null
	matrix[7][0] = null

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