// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleCharacter = [];

function generatePassword() {
  var numCharacter = prompt("Type in the amount of characters you would like in your password. Must select a number between 8 and 128.");
  if (numCharacter< 8){
    alert("Must select a number greater than 8.");
    return " ";
  } else if (numCharacter>128){
    alert("Must select a number less than 128.");
    return " ";
  }
  console.log(numCharacter);
  let password= "";
  choices("Number");
  choices("Lowercase");
  choices("Uppercase");
  choices("Special Characters");
    console.log(possibleCharacter);
  for (let i = 0; i < numCharacter; i++) {
    password += possibleCharacter[Math.floor(Math.random() * possibleCharacter.length)]
    }
    return password;
};

function choices (choice) {
  const numberChoice = [0,1,2,3,4,5,6,7,8,9];
  const upperCaseLetters= ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowerCaseLetters= ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map(char => char.toLowerCase());
  var specialChar = ["$", "@", "!", "?", "^"];

  const confirmChoice = confirm(`Click OK to include ${choice} in your password.`);

  if (choice === "Number" && confirmChoice) {
    possibleCharacter.push(...numberChoice) 
  } else if (choice === "Lowercase" && confirmChoice) {
    possibleCharacter.push(...lowerCaseLetters) 
  } else if (choice === "Uppercase" && confirmChoice) {
    possibleCharacter.push(...upperCaseLetters) 
  } else if (choice === "Special Characters" && confirmChoice) {
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