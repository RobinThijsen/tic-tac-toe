const cross = document.getElementById("cross"),
	  circle = document.getElementById("circle"),
	  indicator = document.querySelector(".indicator"),
	  blueButton = document.querySelector(".blue-button"),
	  orangeButton = document.querySelector(".orange-button")

let i = document.createElement("i")
i.className = "fa-solid fa-person-digging"

const local = localStorage.getItem('player-mark')
if (local != null) {
	if (local == 'circle') {
		indicator.classList.add('active')
		cross.children[0].classList.add("active")
		circle.children[0].classList.add("active")
		
		blueButton.innerText = "working on"
		blueButton.href = "#"
		blueButton.prepend(i)
		blueButton.classList.add("not-active")
		
		orangeButton.classList.add("none")

	}
} else {
	localStorage.setItem('player-mark', 'cross')
	localStorage.setItem('other-mark', 'circle')
	
	orangeButton.classList.remove("none")
}

/**
 * select cross for player
 */
cross.onclick = () => {
	indicator.classList.remove("active")
	cross.children[0].classList.remove("active")
	circle.children[0].classList.remove("active")
	
	localStorage.setItem('player-mark', 'cross')
	localStorage.setItem('other-mark', 'circle')
	
	blueButton.href = "/game.html?v=cpu"
	blueButton.innerText = "new game (vs cpu)"
	blueButton.classList.remove("not-active")
	
	orangeButton.classList.remove("none")
}

/**
 * select circle for player
 */
circle.onclick = () => {
	indicator.classList.add("active")
	cross.children[0].classList.add("active")
	circle.children[0].classList.add("active")
	
	localStorage.setItem('player-mark', 'circle')
	localStorage.setItem('other-mark', 'cross')
	
	blueButton.innerText = "working on"
	blueButton.href = "#"
	blueButton.prepend(i)
	blueButton.classList.add("not-active")
	
	orangeButton.classList.add("none")
}