import matrix from './matrix.mjs'
import play from './games-logic/play.mjs'
import isWinner from './games-logic/isWinner.mjs'
import postWinning from './postWinning.mjs'

function handleClick(event){
	if( !event.target.innerText ){
		matrix[event.target.id][0] = "X"
		event.target.innerText = "X"
		const is_player_won = isWinner( 'X' )
		if( is_player_won.result )
			postWinning( 'X', is_player_won.lineup, event.target.parentElement )
		else{
			if( play( 'O', 'X' ) ){
				// "play()" returns "true" when it marks a spot successfully, now we check if we won.
				const is_opponent_won = isWinner( 'O' )
				if( is_opponent_won.result )
					postWinning( 'O', is_opponent_won.lineup, event.target.parentElement )
			}
			else{
				// After the user played, the machine couldn't play, so no more available spots, which means a DRAW.
				document.querySelector("h2").innerHTML = "DRAW"
			}
		}
	}
}

export default handleClick