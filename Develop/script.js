// Assignment Code
var generateBtn = document.querySelector("#generate");


// This function is what happens when we click the genrate password button
function generatePassword(passwordHolder) {
 // promt a message to the user asking for a number
  var userInput = prompt("How many charactors do you want in your password? (number between 8-126)")
// parseint will turn a sting into a interger (number) if it cant, then it turns it into a IsNaN) (is not a number)
  var passwordCharactors = parseInt (userInput)
// if the user input can not be turned into a number with paseInt, then user gets a alert and it returned to bottom of this whole function
  if(isNaN(passwordCharactors)) {
    alert("that is not a number!")
    return;
  } 
// if user input (which now has to be a number) is less then 8 or more than 128, then user is alerted a returned to end
  if (passwordCharactors < 8 || passwordCharactors > 128) {
    alert ("password length must be between 8 and 126 charactors")
    return;
  }
// confirm crates true or false vars for user to decide (booleins)
  var userNumbers = confirm("do you want numbers in your password?")
  var userSymbols = confirm("do you want symbols in your password?")
  var userUpercase = confirm("do you want to upercase letters in your password?")
  var userLowercase = confirm("do you want to lowercase letters in your password?")
// possiable lists for the vars we just created
  var numberList = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ] 
  var sysmbols = [ "!", "@" , "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]
  var upercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// one var that will hold all lists with true vaules
  var userCharactors = []
// algorithm to add lists to the main list that contains all true vaules.         main list gets side lists pushed with.push.     mainlist.push(sidepush)
  if (userNumbers === true) {
   var userCharactors = userCharactors.concat(numberList);
  }

  if (userSymbols === true) {
    var userCharactors = userCharactors.concat(sysmbols);
  }

  if (userUpercase === true) {
    var userCharactors = userCharactors.concat(upercase);
  }

  if (userLowercase === true) {
    var userCharactors = userCharactors.concat(lowercase);
  }


if (userCharactors.length < 4) {
  alert("Please set at least one symbol/charactor")
  return;
}
  
//place holder is where the password will be set to after "for" statement
var passwordHolder = [];


// first line here will add only the amount of charactors set by user
//secound line pushes random charactors from userCharactors into passwordHolder
for(var i = 0; i < userInput; i++){
  passwordHolder.push(userCharactors[Math.floor(Math.random()*userCharactors.length)]);
}

//just for me to see in the console
console.log(passwordHolder.join(""));

// will return the generatePassword with the passwordHolder var.        .join("") will add all the stings in the var together without , or spaces
  return passwordHolder.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
