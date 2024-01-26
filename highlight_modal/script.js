function click_btn(){
	const modal = document.getElementById("modal-container")
	modal.style.display = "block"
}

function click_close_btn(){
	const modal = document.getElementById("modal-container")
	modal.style.display = "none"
}

const btn = document.getElementById("open-btn")
btn.addEventListener("click", click_btn)

const close_btn = document.getElementById("close-btn")
close_btn.addEventListener("click", click_close_btn)