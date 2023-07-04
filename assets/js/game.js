const gameView = document.getElementById("game-plate")

const addCases = (gameView) => {
	// add game plate to html
	for (let i = 0; i < 9; i++) {
		const div = document.createElement("div")
		div.classList.add("case")
		gameView.append(div)
	}
}

addCases(gameView)
const cases = gameView.children
const reset = document.getElementById("reset")
let playerMark = localStorage.getItem('player-marks')

const quitButton = document.getElementById("quit")
const nextButton = document.getElementById("next")

let other = null

if (playerMark == 'cross') {
	other = 'circle'
} else {
	other = 'cross'
}

let win = false, loose = false, tie = false, i = 0
let object

/**
 *
 * Create a mark specified and add it to the case clicked
 *
 * @param {cases} case clicked
 * @param {markClass} type of mark
 *
 */
const addMarks = (cases, markClass) => {
	const mark = document.createElement("span")
	mark.classList.add(markClass)
	cases.append(mark)
}

/**
 *
 * change class of marks for win
 * @param {cases} cases to change class
 *
 */
const changeMarks = (cases) => {
	cases.classList.add('active')
}

// check if game is saved on localstorage
if (localStorage.getItem('game') != null) {
	let i = 0
	object = JSON.parse(localStorage.getItem('game'))
	object.game.map(o => {
		if (o == 'cross') {
			addMarks(cases[i], 'cross')
		} else if (o == 'circle') {
			addMarks(cases[i], 'circle')
		}
		i++
	})
} else {
	object = {
		game: [false, false, false, false, false, false, false, false, false]
	}
}
console.table(object)

/**
 *
 * function to check if player is closed to win
 * @param {object} the JSON game plate version to store in localStorage
 * @param {cases} an htmlcolletion of the cases
 * @param {marks} marks of the player
 * @param {other} marks of the CPU
 *
 */
const checkIfCloseWin = (object, cases, marks, other) => {
	/* CHECK FIRST CASE POSSIBILITY */
	// check if marks = 
	//
	//   X | X |   
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//     |   |     
	//
	if (object.game[0] == marks && object.game[1] == marks && object.game[2] != other) {
		object.game[2] = other
		addMarks(cases[2], other)

	// check if marks = 
	//
	//   X |   |     
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[0] == marks && object.game[4] == marks && object.game[8] != other) {
		object.game[8] = other
		addMarks(cases[8], other)

	// check if marks = 
	//
	//   X |   |     
	// ____|___|____
	//   X |   |   
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[0] == marks && object.game[3] == marks && object.game[6] != other) {
		object.game[6] = other
		addMarks(cases[6], other)
	
	/* CHECK SECOND CASE POSSIBILITY */
	// check if marks = 
	//
	//     | X | X   
	// ____|___|____
	//     |   |   
	// –––-|–––|––––
	//     |   |   
	//
	} else if (object.game[1] == marks && object.game[2] == marks && object.game[0] != other) {
		object.game[0] = other
		addMarks(cases[0], other)
	
	// check if marks = 
	//
	//     | X |     
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[1] == marks && object.game[4] == marks && object.game[7] != other) {
		object.game[7] = other
		addMarks(cases[7], other)
	/* CHECK THIRD CASE POSSIBILITY */
	// check if marks = 
	//
	//     |   | X   
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[2] == marks && object.game[4] == marks && object.game[6] != other) {
		object.game[6] = other
		addMarks(cases[6], other)
	
	// check if marks = 
	//
	//     |   | X   
	// ____|___|____
	//     |   | X 
	// ––––|–––|–-––
	//     |   |   
	//
	} else if (object.game[2] == marks && object.game[5] == marks && object.game[8] != other) {
		object.game[8] = other
		addMarks(cases[8], other)
	/* CHECK FOURTH CASE POSSIBILITY */
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//   X | X |   
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[3] == marks && object.game[4] == marks && object.game[5] != other) {
		object.game[5] = other
		addMarks(cases[5], other)
	
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//   X |   |   
	// ––––|–––|––––
	//   X |   |   
	//
	} else if (object.game[3] == marks && object.game[6] == marks && object.game[0] != other) {
		object.game[0] = other
		addMarks(cases[0], other)
	/* CHECK FITFTH CASE POSSIBILITY */
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     | X | X 
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[4] == marks && object.game[5] == marks && object.game[3] != other) {
		object.game[3] = other
		addMarks(cases[3], other)
	
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     | X |   
	//
	} else if (object.game[4] == marks && object.game[7] == marks && object.game[1] != other) {
		object.game[1] = other
		addMarks(cases[1], other)
	
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     |   | X 
	//
	} else if (object.game[4] == marks && object.game[8] == marks && object.game[0] != other) {
		object.game[0] = other
		addMarks(cases[0], other)
	/* CHECK SIXTH CASE POSSIBILITY */
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     |   | X 
	// ––––|–––|––––
	//     |   | X 
	//
	} else if (object.game[5] == marks && object.game[8] == marks && object.game[2] != other) {
		object.game[2] = other
		addMarks(cases[2], other)
	/* CHECK SEVETH CASE POSSIBILITY */
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//  X  |   |   
	//
	} else if (object.game[4] == marks && object.game[6] == marks && object.game[2] != other) {
		object.game[2] = other
		addMarks(cases[2], other)
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//  X  | X |   
	//
	} else if (object.game[6] == marks && object.game[7] == marks && object.game[8] != other) {
		object.game[8] = other
		addMarks(cases[8], other)
	/* CHECK EIGTH CASE POSSIBILITY */
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//     | X | X 
	//
	} else if (object.game[7] == marks && object.game[8] == marks && object.game[6] != other) {
		object.game[6] = other
		addMarks(cases[6], other)
		
	} else {
		for (let i = 0; i < cases.length; i++) {
			if (object.game[i] == false) {
				object.game[i] = other
				addMarks(cases[i], other)
				break
			}
		}
	}
}

/**
 *
 * win condition
 * @param {cases} arr of cases of gameplate
 * @param {marks} marks to check
 * @return {boolean} true if marks win, false if not
 *
 */
const checkIfWin = (cases, marks) => {
	/* CHECK FIRST CASE POSSIBILITY */
	// check if marks = 
	//
	//   X | X | X 
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//     |   |     
	//
	if (object.game[0] == marks && object.game[1] == marks && object.game[2] == marks) {
		changeMarks(cases[0])
		changeMarks(cases[1])
		changeMarks(cases[2])
		return true
		
	// check if marks = 
	//
	//     |   |   
	// ____|___|____
	//   X | X | X 
	// ––––|–––|––––
	//     |   |     
	//
	} else if (object.game[3] == marks && object.game[4] == marks && object.game[5] == marks) {
		changeMarks(cases[3])
		changeMarks(cases[4])
		changeMarks(cases[5])
		return true
		
	// check if marks = 
	//
	//     |   |   
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//   X | X | X   
	//
	} else if (object.game[6] == marks && object.game[7] == marks && object.game[8] == marks) {
		changeMarks(cases[6])
		changeMarks(cases[7])
		changeMarks(cases[8])
		return true
		
	// check if marks = 
	//
	//   X |   |   
	// ____|___|____
	//   X |   |   
	// ––––|–––|––––
	//   X |   |     
	//
	} else if (object.game[0] == marks && object.game[3] == marks && object.game[6] == marks) {
		changeMarks(cases[0])
		changeMarks(cases[3])
		changeMarks(cases[6])
		return true
		
	// check if marks = 
	//
	//     | X |   
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     | X |     
	//
	} else if (object.game[1] == marks && object.game[4] == marks && object.game[7] == marks) {
		changeMarks(cases[1])
		changeMarks(cases[4])
		changeMarks(cases[7])
		return true
		
	// check if marks = 
	//
	//     |   | X 
	// ____|___|____
	//     |   | X 
	// ––––|–––|––––
	//     |   | X   
	//
	} else if (object.game[2] == marks && object.game[5] == marks && object.game[8] == marks) {
		changeMarks(cases[2])
		changeMarks(cases[5])
		changeMarks(cases[8])
		return true
		
	// check if marks = 
	//
	//   X |   |   
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     |   | X   
	//
	} else if (object.game[0] == marks && object.game[4] == marks && object.game[8] == marks) {
		changeMarks(cases[0])
		changeMarks(cases[4])
		changeMarks(cases[8])
		return true
		
	// check if marks = 
	//
	//     |   | X 
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//   X |   |     
	//
	} else if (object.game[2] == marks && object.game[4] == marks && object.game[6] == marks) {
		changeMarks(cases[2])
		changeMarks(cases[4])
		changeMarks(cases[6])
		return true
	}
	
	return false
}

/**
 *
 * tie condition
 * @param {object} arr of game plate 
 *
 * @return {boolean} true if tie, false if not
 */
const checkIfTie = (object) => {
	for (let o of object) {
		if (o == false) return false
	}
	return true
}

/**
 *
 * add section in html if win loose or tie
 * @param {text} text of win
 *
 *
 */
const addSectionEnd = (text, playerMark, other) => {
	const sectionWin = document.querySelector(".win-container")
	sectionWin.classList.add('active')
	const h3 = sectionWin.querySelector("h3")
	h3.innerText = text
	const h1 = sectionWin.querySelector("h1")
	h1.innerText = "takes the round"
	if (text != "it's a tie") {
		const span = document.createElement("span")
		if (text == 'you won!') {
			span.classList.add(playerMark)
		} else {
			span.classList.add(other)
		}
		h1.prepend(span)
	} else {
		h1.innerText = 'No one take the round'
	}
}

// loop on cases for event click
for (let i = 0; i < cases.length; i++) {
	
	// event on click on cases (player)
	cases[i].onclick = () => {
		// add marks
		object.game[i] = playerMark
		addMarks(cases[i], playerMark)
		
		// check if player win
		if (checkIfWin(cases, playerMark)) {
			
			addSectionEnd('you won!', playerMark, other)
			const data = JSON.parse(localStorage.getItem('data'))
			data.win++
			localStorage.setItem('data', JSON.stringify(data))
		
		// check if CPU win
		} else if (checkIfWin(cases, other)) {
			
			addSectionEnd('cpu won!', playerMark, other)
			
			const data = JSON.parse(localStorage.getItem('data'))
			data.loose++
			localStorage.setItem('data', JSON.stringify(data))
		
		// check if tie
		} else if (checkIfTie(object.game)) {
			
			addSectionEnd("it's a tie", playerMark, other)
			
			const data = JSON.parse(localStorage.getItem('data'))
			data.tie++
			localStorage.setItem('data', JSON.stringify(data))
		
		// else make cpu moove
		} else {
		
			// loop for CPU play
			for (let j = 0; j < cases.length; j++) {
				if (playerMark == 'cross') {
					checkIfCloseWin(object, cases, 'cross', 'circle')
					break
				} else {
					checkIfCloseWin(object, cases, 'circle', 'cross')
					break
				}
			}
			
			if (checkIfWin(cases, playerMark)) {
				addSectionEnd('you won!', playerMark, other)
				const data = JSON.parse(localStorage.getItem('data'))
				data.win++
				localStorage.setItem('data', JSON.stringify(data))
			} else if (checkIfWin(cases, other)) {
				addSectionEnd('cpu won!', playerMark, other)
				
				const data = JSON.parse(localStorage.getItem('data'))
				data.loose++
				localStorage.setItem('data', JSON.stringify(data))
			} else if (checkIfTie(object.game)) {
				addSectionEnd("it's a tie", playerMark, other)
				
				const data = JSON.parse(localStorage.getItem('data'))
				data.tie++
				localStorage.setItem('data', JSON.stringify(data))
			}
		}
		localStorage.setItem('game', JSON.stringify(object))
		console.table(object)
	}
}

// reset button
reset.onclick = () => {
	localStorage.removeItem('game')
	location.reload()
}

quitButton.onclick = () => {
	localStorage.removeItem('game')
	window.location.href = "/index.html"
}

nextButton.onclick = () => {
	localStorage.removeItem('game')
	location.reload()
}
