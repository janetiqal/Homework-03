// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleCharacter = [];

function generatePassword() {
  var numCharacter = prompt("Type in the amount of characters you would like in your password. Must select a number between 8 and 128.");
  if (numCharacter< 8|| numCharacter > 128){
    alert("Must select a number greater than 8 and less than 128.");
    return "";
  } 
  console.log(numCharacter);
  let password="";
  number();
  upperCaseCharacters();
  specialCharacters();
  lowerCaseCharacters();
  console.log(possibleCharacter);
  for (let i = 0; i < numCharacter; i++) {
    password += possibleCharacter[Math.floor(Math.random() * possibleCharacter.length)]
    }
    return password;
    
};


// function for the user if they would like a number in their password
// using spread operator, the "...", puts the seperate arrays into one array
function number (){
  var numberChoice = [0,1,2,3,4,5,6,7,8,9];
  var yesNumber = confirm("Click OK to include numbers in your password.");
  if (yesNumber){
    possibleCharacter.push(...numberChoice) 
  } 
};

//function for the user if they would like uppercase characters in their password
function upperCaseCharacters (){
  var upperCaseLetters= ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var yesUpperCase = confirm("Click OK to include uppercase letters in your password.");
  if (yesUpperCase){
    possibleCharacter.push(...upperCaseLetters)
  } 
};

//function to include lower case letters
function lowerCaseCharacters (){
  var lowerCaseLetters= ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map(c=>c.toLowerCase());
  var yesLowerCase = confirm("Click OK to include Lowercase letters in your password.");
  if (yesLowerCase ){
    possibleCharacter.push(...lowerCaseLetters)
  } 
};


//function to include special characters 
function specialCharacters (){
  var specialChar = ["$", "@", "!", "?", "^"];
  var yesSpecialCharacter = confirm("Click OK to include special characters in your password.")
  if (yesSpecialCharacter){
    possibleCharacter.push(...specialChar)
  } 
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  