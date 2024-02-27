import handleClick from './modules/handleClick.mjs'
import reset from './modules/reset.mjs'

const main = document.querySelector("main")
const reset_btn = document.querySelector("button")

main.addEventListener("click", handleClick)

reset_btn.addEventListener("click", reset)

// When we click "reset", the click evetListener should be added back to the element "main"
// when the machine "plays" the ui elements should be updated with the result