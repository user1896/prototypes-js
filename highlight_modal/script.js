function click_btn(){
	const modal = document.getElementById("modal-container")
	modal.style.display = "flex"
}

function click_close_btn(){
	const modal = document.getElementById("modal-container")
	modal.style.display = "none"
}

window.addEventListener("click", function(e){
	const modal = document.getElementById("modal-container")
	const btn = document.getElementById("open-btn")
	if((e.target != modal) && (e.target != btn)){
		modal.style.display = "none"
	}
})

const btn = document.getElementById("open-btn")
btn.addEventListener("click", click_btn)

const close_btn = document.getElementById("close-btn")
close_btn.addEventListener("click", click_close_btn)