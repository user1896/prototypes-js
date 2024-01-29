import createToDoElement from "./createToDo.mjs"

const input = document.querySelector(".input-field input")
const submit = document.querySelector(".input-field button")
const toDoList = document.querySelector(".toDoList")

function fromTextToToDo(){
	if( input.value != "" ){
		// create a toDo element
		const toDo = createToDoElement(input.value)

		// append the toDo element to the toDoList
		toDoList.appendChild(toDo)

		// reset the input field
		input.value = ""
	}
}

// add an event listener when we click the submit button
submit.addEventListener("click", fromTextToToDo)

// or when we press the 'Enter' key while we're typing in the input field
input.addEventListener("keypress", function(event){
	if( event.key == 'Enter' ){
		fromTextToToDo()
	}
})

toDoList.addEventListener("click", function(event){
	// if the target element is the check icon
	if( event.target.classList.contains("fa-check") ){
		const target_paragraph = event.target.parentElement.parentElement.firstElementChild
		// parent of icon is <button>, and parent of <button> is <div class="toDo">, and his first child is the <p> element
		target_paragraph.setAttribute("class", "checkedParagraph")
	}
})

toDoList.addEventListener("click", function(event){
	// if the target element is the delete icon
	if( event.target.classList.contains("fa-trash-can") ){
		const target_toDo = event.target.parentElement.parentElement
		// parent of icon is <button>, and parent of <button> is <div class="toDo">
		toDoList.removeChild(target_toDo)
	}
})