function toggle_answer(id){
	id.classList.toggle("hide")
}

const content_container = document.getElementsByClassName("content-container")

for (const container of content_container) {
	const question = container.children[0]
	const answer = container.children[1]

	question.addEventListener("click",function(){
		toggle_answer(answer)
	})
}