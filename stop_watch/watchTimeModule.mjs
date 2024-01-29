class WatchTime{
	#seconds
	#minutes
	#hours
	#timeInterval
	#isTimeRunning

	constructor(h = 0, m = 0, s = 0){
		this.#hours = h
		this.#minutes = m
		this.#seconds = s

		this.#isTimeRunning = false
		this.#timeInterval = 0

		this.regulateTimer()
	}

	regulateTimer(){
		while( this.#seconds > 59 ){
			this.#seconds -= 60
			this.#minutes++
		}

		while( this.#minutes > 59 ){
			this.#minutes -= 60
			this.#hours++
		}

		if( this.#hours > 23 ){
			this.#hours = 24
			this.#minutes = 0
			this.#seconds = 0
		}
	}

	showTimer(){
		return `${this.#hours} : ${this.#minutes} : ${this.#seconds}`
	}

	incrementTimer( target_element ){
		this.#seconds++
		this.regulateTimer()
		target_element.innerText = this.showTimer()
	}

	playTimer( target_element ){
		if( this.#isTimeRunning == false ){
			this.#timeInterval = setInterval(function(object_id){
				object_id.incrementTimer( target_element )
			}, 500, this)

			this.#isTimeRunning = true
		}else{
			clearInterval( this.#timeInterval )
			this.#isTimeRunning = false
		}
	}

	resetTimer( target_element ){
		this.#hours = 0
		this.#minutes = 0
		this.#seconds = 0
		target_element.innerText = this.showTimer()
	}

	get getIsTimeRunning(){
		return this.#isTimeRunning
	}
}

export default WatchTime