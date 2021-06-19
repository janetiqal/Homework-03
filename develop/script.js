// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = " ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  

// on click: series of prompts pop up for pass word criteria
  // prompt.('Password criteria is..')

// user selects which criteria to include

//user decides how long the password is

// user chooses character types in password
  // (lowercase, uppercase, numeric, and/or special characters)

// each prompt answered-- input is validated and at least one character type is selected

//when all prompts answered, password is generated
//password is either an alert or written on page 