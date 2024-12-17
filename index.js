const parent = document.getElementById("container")

const loginTitle = document.createElement("p")
loginTitle.innerHTML = "Sign up"
loginTitle.style.fontSize = "60px"
loginTitle.style.fontWeight = "bold"
document.getElementById("container").appendChild(loginTitle)

const firstLabel = document.createElement("p")
firstLabel.innerHTML = "First name"
firstLabel.style.marginLeft = "0"
document.getElementById("container").appendChild(firstLabel)

const firstInput = document.createElement("input")
firstInput.placeholder = "First name"
document.getElementById("container").appendChild(firstInput)

const lastLabel = document.createElement("p")
lastLabel.innerHTML = "Last name"
document.getElementById("container").appendChild(lastLabel)

const lastInput = document.createElement("input")
lastInput.placeholder = "Last name"
document.getElementById("container").appendChild(lastInput)

const submitButton = document.createElement("button")
submitButton.innerHTML = "Sign up"
submitButton.style.color = "white"
submitButton.style.backgroundColor = "green"
submitButton.style.padding = "10px"
submitButton.style.borderRadius = "5px"
document.getElementById("container").appendChild(submitButton)

document.body.style.width = "100%"
document.body.style.textAlign = "center"

