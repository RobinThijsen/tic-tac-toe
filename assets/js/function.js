/**
 * Create a new case
 * @param {HTMLElement} gameView containers of all cases
 *
 */
export const addCases = (gameView) => {
	// add game plate to html
	for (let i = 0; i < 9; i++) {
		const div = document.createElement("div")
		div.classList.add("case")
		gameView.append(div)
	}
}

/**
 *
 * Create a mark specified and add it to the case clicked
 * @param {HTMLElement} cases element clicked
 * @param {string} markClass type of mark
 *
 */
export const addMarks = (cases, markClass) => {
	const mark = document.createElement("span")
	mark.classList.add(markClass)
	cases.append(mark)
}

/**
 *
 * change class of marks for win
 * @param {HTMLCollection} cases to change class
 *
 */
export const changeMarks = (cases) => {
	cases.classList.add('active')
}

/**
 *
 * function to check if player is closed to win
 * @param {json} object the JSON game plate version to store in localStorage
 * @param {HTMLCollection} cases an htmlcolletion of the cases
 * @param {string} marks of the player
 * @param {string} other of the CPU
 *
 */
export const checkIfCloseWin = (object, cases, marks, other) => {
	
	/* ============================ */
	/* CHECK FIRST LINE POSSIBILITY */
	/* ============================ */
	
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
	//   X |   | X 
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//     |   |     
	//
	} else if (object.game[0] == marks && object.game[2] == marks && object.game[1] != other) {
		object.game[1] = other
		addMarks(cases[1], other)
		
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
	
	
	
	/* ============================= */
	/* CHECK SECOND LINE POSSIBILITY */
	/* ============================= */
	
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
	//   X |   | X 
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[3] == marks && object.game[5] == marks && object.game[4] != other) {
		object.game[4] = other
		addMarks(cases[4], other)
	
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



	/* ============================ */
	/* CHECK THIRD LINE POSSIBILITY */
	/* ============================ */
	
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
		
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//  X  |   | X 
	//
	} else if (object.game[6] == marks && object.game[8] == marks && object.game[7] != other) {
		object.game[7] = other
		addMarks(cases[7], other)
	
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
	
	
	
	/* =========================== */
	/* CHECK FIRST COL POSSIBILITY */
	/* =========================== */
	
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
	
	// check if marks = 
	//
	//   X |   |     
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//   X |   |   
	//
	} else if (object.game[0] == marks && object.game[6] == marks && object.game[3] != other) {
		object.game[3] = other
		addMarks(cases[3], other)
		
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//   X |   |   
	// ––––|–––|––––
	//   X |   |   
	//
	} else if (object.game[3] == marks && object.game[6] == marks && object.game[0] != other) {
		object.game[0] = other
		addMarks(cases[0], other)
	
	
	
	/* ============================ */
	/* CHECK SECOND COL POSSIBILITY */
	/* ============================ */
	
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
	
	// check if marks = 
	//
	//     | X |     
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//     | X |   
	//
	} else if (object.game[1] == marks && object.game[7] == marks && object.game[4] != other) {
		object.game[4] = other
		addMarks(cases[4], other)
		
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     | X |   
	//
	} else if (object.game[4] == marks && object.game[7] == marks && object.game[1] != other) {
		object.game[1] = other
		addMarks(cases[1], other)
	
	
	
	/* =========================== */
	/* CHECK THIRD COL POSSIBILITY */
	/* =========================== */
	
	// check if marks = 
	//
	//     |   | X   
	// ____|___|____
	//     |   | X 
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[2] == marks && object.game[5] == marks && object.game[8] != other) {
		object.game[8] = other
		addMarks(cases[8], other)
	
	// check if marks = 
	//
	//     |   | X   
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//     |   | X 
	//
	} else if (object.game[2] == marks && object.game[8] == marks && object.game[5] != other) {
		object.game[5] = other
		addMarks(cases[5], other)
		
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     |   | X 
	// ––––|–––|––––
	//     |   | X 
	//
	} else if (object.game[5] == marks && object.game[8] == marks && object.game[2] != other) {
		object.game[2] = other
		addMarks(cases[2], other)
	
	
	
	/* ============================= */
	/* CHECK FIRST DIAGO POSSIBILITY */
	/* ============================= */
	
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
	//     |   |   
	// ––––|–––|––––
	//   X |   |   
	//
	} else if (object.game[2] == marks && object.game[6] == marks && object.game[4] != other) {
		object.game[4] = other
		addMarks(cases[4], other)
		
	// check if marks = 
	//
	//     |   |     
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//   X |   |   
	//
	} else if (object.game[4] == marks && object.game[6] == marks && object.game[2] != other) {
		object.game[2] = other
		addMarks(cases[2], other)
	
	
	
	/* ============================== */
	/* CHECK SECOND DIAGO POSSIBILITY */
	/* ============================== */
	
	// check if marks = 
	//
	//  X  |   |      
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//     |   | X 
	//
	} else if (object.game[0] == marks && object.game[8] == marks && object.game[4] != other) {
		object.game[4] = other
		addMarks(cases[4], other)
	
	// check if marks = 
	//
	//   X |   |    
	// ____|___|____
	//     | X |   
	// ––––|–––|––––
	//     |   |   
	//
	} else if (object.game[0] == marks && object.game[4] == marks && object.game[8] != other) {
		object.game[8] = other
		addMarks(cases[8], other)
		
	// check if marks = 
	//
	//   X |   |     
	// ____|___|____
	//     |   |   
	// ––––|–––|––––
	//     |   | X 
	//
	} else if (object.game[0] == marks && object.game[8] == marks && object.game[4] != other) {
		object.game[4] = other
		addMarks(cases[4], other)
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
 * @param {HTMLCollection} cases arr of cases of gameplate
 * @param {string} marks to check
 * @return {boolean} true if marks win, false if not
 *
 */
export const checkIfWin = (object, cases, marks) => {
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
 * @param {HTMLCollection} object arr of game plate 
 * @return {boolean} true if tie, false if not
 *
 */
export const checkIfTie = (object) => {
	for (let o of object) {
		if (o == false) return false
	}
	return true
}

/**
 *
 * add section in html if win loose or tie
 * @param {string} text of end game
 * @param {string} playerMark mark of player
 * @param {string} other mark of CPU
 *
 */
export const addSectionEnd = (text, playerMark, other) => {
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
