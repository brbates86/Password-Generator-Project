// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomInt(arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}


function randomInt(min, max) {
  if (!max) {
   max = min
   min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)

}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// Write password to the #password input

function generatePassword() {

  
  var userInput = window.prompt("How long do you want your Password?")

 

  var passwordLength = parseInt(userInput)






var userWantsNumbers = window.confirm("Would you like numbers?")
var userWantsSymbols = window.confirm("Would you like symbols?")
var userWantsLowercase = window.confirm("Would you like Lowercase?")
var userWantsUppercase = window.confirm("Would you like Uppercase?")

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["!", "@", "#", "$", "%", "&", "*"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

var optionsCart = []



if (userWantsNumbers = true) {
  optionsCart.push(numberList)
}

if (userWantsSymbols = true) {
  optionsCart.push(symbolList)
}

if (userWantsLowercase = true) {
  optionsCart.push(lowercaseList)
}

if (userWantsUppercase = true) {
  optionsCart.push(uppercaseList)
}



var generatedPassword = ""


for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
}

return generatedPassword
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (!password) return
  if (password) {
  passwordText.value = password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

