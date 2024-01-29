import createButton from "./createButton.mjs"

function createToDoElement(inputValue){
	// doTo div container
	const toDo = document.createElement("div")
	toDo.setAttribute("class", "toDo")

	// doTo paragraph
	const p = document.createElement("p")
	const ptext = document.createTextNode(inputValue)
	p.appendChild(ptext)

	// Check button
	const check_button = createButton("check", "fa-solid fa-check")

	// delete button
	const delete_button = createButton("delete", "fa-solid fa-trash-can")

	// append "p", "check_button", and "delete_button" to <div class="toDo">
	toDo.appendChild(p)
	toDo.appendChild(check_button)
	toDo.appendChild(delete_button)

	return toDo
}

export default createToDoElement