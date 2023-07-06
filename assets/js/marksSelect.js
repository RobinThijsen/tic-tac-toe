const cross = document.getElementById("cross")
const circle = document.getElementById("circle")
const indicator = document.querySelector(".indicator")

const local = localStorage.getItem('player-marks')
if (local != null) {
	if (local == 'circle') {
		indicator.classList.add('active')
		cross.children[0].classList.add("active")
		circle.children[0].classList.add("active")
	}
} else {
	localStorage.setItem('player-marks', 'cross')
}

/**
 * select cross for player
 */
cross.onclick = () => {
	indicator.classList.remove("active")
	cross.children[0].classList.remove("active")
	circle.children[0].classList.remove("active")
	localStorage.setItem('player-marks', 'cross')
}

/**
 * select circle for player
 */
circle.onclick = () => {
	indicator.classList.add("active")
	cross.children[0].classList.add("active")
	circle.children[0].classList.add("active")
	localStorage.setItem('player-marks', 'circle')
}