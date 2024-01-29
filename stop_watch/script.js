import WatchTime from "./watchTimeModule.mjs"

let myTimer = new WatchTime(5, 159, 159)

const timer = document.getElementsByClassName("timer")[0]
timer.innerText = myTimer.showTimer()

const play = document.getElementsByClassName("play")[0]
play.addEventListener("click",function(){
	// change button style
	play.classList.toggle("playing")

	// change button icon
	if( myTimer.getIsTimeRunning == false ){
		play.innerHTML = '<i class="fa-solid fa-pause"></i>'
	}else{
		play.innerHTML = '<i class="fa-solid fa-play"></i>'
	}
	// start the timer on the element "timer"
	myTimer.playTimer( timer )
})

const reset = document.getElementsByClassName("reset")[0]
reset.addEventListener("click",function(){
	myTimer.resetTimer( timer )
})