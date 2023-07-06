import { addCases, addMarks, checkIfCloseWin, checkIfWin, checkIfTie, addSectionEnd } from "./function.js"

/** 
 *
 * check all condition to end game
 *
 * @return {boolean} check if end or not
 */
const checkAll = (dataType = "data-cpu") => {
	// check if player win
	if (checkIfWin(object, cases, playerMark)) {
		
		addSectionEnd('you won!', playerMark, other)
		let data = JSON.parse(localStorage.getItem(dataType))
		data.win++
		localStorage.setItem(dataType, JSON.stringify(data))
		return true
	// check if CPU win
	} else if (checkIfWin(object, cases, other)) {
		
		addSectionEnd('cpu won!', playerMark, other)
		
		let data = JSON.parse(localStorage.getItem(dataType))
		data.loose++
		localStorage.setItem(dataType, JSON.stringify(data))
		return true
	// check if tie
	} else if (checkIfTie(object.game)) {
		
		addSectionEnd("it's a tie", playerMark, other)
		
		let data = JSON.parse(localStorage.getItem(dataType))
		data.tie++
		localStorage.setItem(dataType, JSON.stringify(data))
		return true
	}
	return false
}

// invit variable const
const gameView = document.getElementById("game-plate"),
	  cases = gameView.children,
	  reset = document.getElementById("reset"),
	  quitButton = document.getElementById("quit"),
	  nextButton = document.getElementById("next"),
	  value = (new URLSearchParams(window.location.search)).get('v')

// init varaible let
let playerMark = localStorage.getItem('player-mark'),
	object,
	other = localStorage.getItem('other-mark'),
	playInt = 0

// add game plate
addCases(gameView)

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

const removeClass = (c) => {
	c.classList.remove("error")
}

if (value == 'cpu') {
	// loop on cases for event click
	for (let i = 0; i < cases.length; i++) {
		
		if (playerMark == 'cross') {
			// event on click on cases (player)
			cases[i].onclick = () => {
				// add marks
				if (object.game[i] == false) {
					object.game[i] = playerMark
					addMarks(cases[i], playerMark)
					
					// check if player win
					if (checkAll()) {
						console.log("win/loose/tie")
					} else {
					
						// loop for CPU play
						for (let j = 0; j < cases.length; j++) {
							checkIfCloseWin(object, cases, 'cross', 'circle')
							break
						}
						
						checkAll()
					}
				} else {
					cases[i].classList.add("error")
				}
				
				localStorage.setItem('game', JSON.stringify(object))
				setTimeout(removeClass, 200, cases[i])
			}
		// in progress
		}/* else {
			for (let i = 0; i < 1; i++) { 
				checkIfCloseWin(object, cases, 'circle', 'cross')
			}
			
			cases[i].onclick = () => {
				// add marks
				object.game[i] = playerMark
				addMarks(cases[i], playerMark)
				
				// check if player win
				if (checkAll()) {
					console.log("win")
				}
				
				localStorage.setItem('game', JSON.stringify(object))
			}
		}*/
	}
} else if (value == 'pvp') {
	console.log("pvp")
	
	for (let i = 0; i < cases.length; i++) {
		
		cases[i].onclick = () => {
			
			if (object.game[i] == false) {
				if (playInt % 2 === 0) {
					object.game[i] = playerMark
					addMarks(cases[i], playerMark)
				} else {
					object.game[i] = other
					addMarks(cases[i], other)
				}
				if (checkAll("data-pvp")) {
					console.log("win/loose/tie")
				}
			} else {
				cases[i].classList.add("error")
			}
			localStorage.setItem('game', JSON.stringify(object))
			setTimeout(removeClass, 200, cases[i])
			playInt++
		}
	}
	
} else {
	window.location.href = "/404.html"
}
/** 
 * reset the game plate
 */
reset.onclick = () => {
	localStorage.removeItem('game')
	location.reload()
}

/** 
 * quit the game plate
 */
quitButton.onclick = () => {
	localStorage.removeItem('game')
	window.location.href = "/index.html"
}

/** 
 * next game
 */
nextButton.onclick = () => {
	localStorage.removeItem('game')
	location.reload()
}
// active css :active pseudo-element on mobile
document.addEventListener("touchstart", function() {},false);