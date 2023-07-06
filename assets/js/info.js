let dataCPU = JSON.parse(localStorage.getItem('data-cpu'))
let dataPVP = JSON.parse(localStorage.getItem('data-pvp'))
const userNameLocal = localStorage.getItem('userName')
let userName = localStorage.getItem('userName')

const cpuContainer = document.querySelector(".stats-cpu")
const pvpContainer = document.querySelector(".stats-pvp")
const userNameInput = document.getElementById("userName")
userNameInput.value = userNameLocal

const changeButton = document.getElementById("change")
const deleteButton = document.getElementById("delete")

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

/** 
 *
 * add stats on stat section
 * @param {HTMLElement} parents container of stats
 * @param {json<[number]>} data json array of value
 *
 */
const addStats = (parents, data, arr) => {
	const paras = parents.children,
		  em1 = document.createElement("em"),
		  em2 = document.createElement("em"),
		  em3 = document.createElement("em")

	paras[0].innerText = arr[0]
	em1.innerText = data.win
	paras[0].append(em1)
	
	paras[1].innerText = arr[1]
	em2.innerText = data.tie
	paras[1].append(em2)
	
	paras[2].innerText = arr[2]
	em3.innerText = data.loose
	paras[2].append(em3)
}

addStats(cpuContainer, dataCPU, ["win vs cpu: ", "tie vs cpu: ", "loose vs cpu: "])
addStats(pvpContainer, dataPVP, ["(X) player 1 win: ", "tie: ", "(O) player 2 win: "])

/**
 * Change user name
 */
changeButton.onclick = () => {
	localStorage.setItem('userName', userNameInput.value)
}

/**
 * reset user dataCPU
 */
deleteButton.onclick = () => {
	dataCPU = {
		win: 0,
		tie: 0,
		loose: 0
	}
	
	localStorage.setItem('dataCPU', JSON.stringify(dataCPU))
	localStorage.setItem('dataPVP', JSON.stringify(dataCPU))
	
	userName = "GUEST_"
	
	for (let i = 0; i < 8; i++) {
		userName += random(0, 9)
		localStorage.setItem('userName', userName)
	}
	
	location.reload()
}