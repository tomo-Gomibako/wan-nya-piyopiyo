const el = document.querySelector("#display")
const ui = document.querySelector("#panel")

const wnp = ["わん", "にゃー", "ぴよぴよ"]
let n = 0

for(const i in wnp) {
	const button = document.createElement("input")
	button.type = "button"
	button.id = `button_${ i }`
	button.value = wnp[i]
	button.onclick = function() {
		click(i)
	}
	ui.appendChild(button)
}

click(n)

function next() {
	click((n + 1) % wnp.length)
}

function next_reverse() {
	click((n + 2) % wnp.length)
}

function click(i) {
	if(i >= wnp.length) {
		return
	}
	document.querySelector(`#button_${ n }`).setAttribute("style", "")
	n = i
	el.innerText = wnp[i]
	document.querySelector(`#button_${ n }`).setAttribute("style", "display: none;")
}
