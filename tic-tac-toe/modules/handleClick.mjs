import matrix from './matrix.mjs'
import play from './games-logic/play.mjs'
import isWinner from "./games-logic/isWinner.mjs"

function handleClick(event){
	if( !event.target.innerText ){
		matrix[event.target.id][0] = "X"
		event.target.innerText = "X"
		if( isWinner( 'X' ) ){
			document.querySelector("h2").innerHTML = "X WINNER"
			event.target.parentElement.removeEventListener("click", handleClick)
		}
		else{
			play( 'O', 'X' )
			if( isWinner( 'O' ) ){
				document.querySelector("h2").innerHTML = "O WINNER"
				event.target.parentElement.removeEventListener("click", handleClick)
			}
		}
	}
}

export default handleClick