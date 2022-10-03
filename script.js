// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
   max = min
   min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)

}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

// Write password to the #password input

function generatePassword() {

  var userInput = window.prompt("How long do you want your Password?")

  // when the user hits cancel it exits out of prompts//
  if (userInput === null) {
    return
  }

  var passwordLength = parseInt(userInput)


// when person doesnt enter a number
if (isNaN(passwordLength)) {
  window.alert("Thats not a number!")
  return
}

if (passwordLength < 8|| passwordLength > 128) {
  window.alert("Password must be between 8 and 128 characters")
  return
}

var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
var userWantsSymbols = window.confirm("Would you like symbols in your Paswword?")
var userWantsLowercase = window.confirm("Would you like Lowercase in your Password?")
var userWantsUppercase = window.confirm("Would you like Uppercase letters in your password?")

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["!", "@", "#", "$", "%", "&", "*"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

var optionsCart = []

for (var i = 0; i < lowercaseList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userWantsNumbers === true) {
  optionsCart.push(numberList)
}

if (userWantsSymbols === true) {
  optionsCart.push(symbolList)
}

if (userWantsLowercase === true) {
  optionsCart.push(lowercaseList)
}

if (userWantsUppercase === true) {
  optionsCart.push(uppercaseList)
}

if (optionsCart.lenght === 0) {
  optionsCart.push(lowercaseList)
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
