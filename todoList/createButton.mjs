function createButton(btn_class, btn_icon_class){
	// create the button
	const btn = document.createElement("button")
	btn.setAttribute("class", btn_class)

	// create the icon
	const icon = document.createElement("i")
	icon.setAttribute("class", btn_icon_class)

	// append the icon to the button
	btn.appendChild(icon)

	return btn
}

export default createButton