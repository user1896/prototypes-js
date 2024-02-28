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
			if( play( 'O', 'X' ) ){
				// "play()" returns "true" when it marks a spot successfully, now we check if we won.
				if( isWinner( 'O' ) ){
					document.querySelector("h2").innerHTML = "O WINNER"
					event.target.parentElement.removeEventListener("click", handleClick)
				}
			}
			else{
				// After the user played, the machine couldn't play, so no more available spots, which means a DRAW.
				document.querySelector("h2").innerHTML = "DRAW"
			}
		}
	}
}

export default handleClick