import matrix from './matrix.mjs'
import play from './games-logic.mjs'

const main = document.querySelector("main")

console.log(main.children)

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

// create a reset button to reset the matrix