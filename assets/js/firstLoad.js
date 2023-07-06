const data = JSON.parse(localStorage.getItem('data'))
let userName = localStorage.getItem('userName')
/**
 *
 * generate a random num between min and max
 * @param {number} min
 * @param {number} max
 * @return {number} random
 */
const random = (min, max) => {
	return Math.floor((Math.random() * max) + min)
}

if (data == null) {
	let stats = {
		win: 0,
		tie: 0,
		loose: 0
	}
	localStorage.setItem('data', JSON.stringify(stats))
}

if (userName == null) {
	userName = "GUEST_"
	
	for (let i = 0; i < 8; i++) {
		userName += random(1, 10)
		localStorage.setItem('userName', userName)
	}
}