// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 
  var userInput = prompt("How many charactors do you want in your password? (number between 8-126)")

  var passwordCharactors = parseInt (userInput)

  if(isNaN(passwordCharactors)) {
    alert("that is not a number!")
    return
  } 

  if (passwordCharactors < 8 || passwordCharactors > 128) {
    alert ("password length must be between 8 and 126 charactors")
    return
  }

  var userNumbers = confirm("do you want numbers in your password?")
  var userSymbols = confirm("do you want symbols in your password?")
  var userUpercase = confirm("do you want to upercase letters in your password?")
  var userLowercase = confirm("do you want to lowercase letters in your password?")

  var numberList = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ] 
  var sysmbols = [ "!", "@" , "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]
  var upercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var userCharactors = {}

  if (userNumbers === true) {
    numberList.push(userCharactors)
  }

  if (userSymbols === true) {
    sysmbols.push(userCharactors)
  }

  if (userUpercase === true) {
    upercase.push(userCharactors)
  }

  if (userLowercase === true) {
    lowercase.push(userCharactors)
  }


  retun ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
