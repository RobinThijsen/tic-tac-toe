const data = JSON.parse(localStorage.getItem('data'))
const userNameLocal = localStorage.getItem('userName')
let userName = localStorage.getItem('userName')

const em1 = document.createElement("em")
const em2 = document.createElement("em")
const em3 = document.createElement("em")

const statsContainer = document.querySelector(".stats")
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

const paras = statsContainer.children
paras[0].innerText = "win vs cpu : "
em1.innerText = data.win
paras[0].append(em1)

paras[1].innerText = "tie vs cpu : "
em2.innerText = data.tie
paras[1].append(em2)

paras[2].innerText = "loose vs cpu : "
em3.innerText = data.loose
paras[2].append(em3)

/**
 * Change user name
 */
changeButton.onclick = () => {
	localStorage.setItem('userName', userNameInput.value)
}

/**
 * reset user data
 */
deleteButton.onclick = () => {
	data.win = 0
	data.tie = 0
	data.loose = 0
	localStorage.setItem('data', JSON.stringify(data))
	userName = "GUEST_"
	
	for (let i = 0; i < 8; i++) {
		userName += random(1, 10)
		localStorage.setItem('userName', userName)
	}
	
	location.reload()
}