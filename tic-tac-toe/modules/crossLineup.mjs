function crossLineup( lineup ){
	const line = document.getElementById("line")
	const diagonal_line = document.getElementById("diagonal-line")
	
	if( lineup < 6 ){
		line.classList.add("display-line")
	}
	else{
		diagonal_line.classList.add("display-line")
	}
	
	switch( lineup ){
		case 0: line.classList.add("cross-line-0"); break
		case 2: line.classList.add("cross-line-2"); break
		case 3: line.classList.add("cross-line-3"); break
		case 4: line.classList.add("cross-line-4"); break
		case 5: line.classList.add("cross-line-5"); break
		case 6: diagonal_line.classList.add("cross-diagonal-line-1"); break
		case 7: diagonal_line.classList.add("cross-diagonal-line-2"); break
	}
}

export default crossLineup