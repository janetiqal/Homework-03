// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleCharacter = [];

function generatePassword() {
  var lowCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n","o","p","q","r","s","t","v","w","x","y", "z"];
  var numCharacter = prompt("Type in the amount of characters you would like in your password. Must select a number between 8 and 128.");
  if (numCharacter< 8){
    alert("Must select a number greater than 8.");
    return " ";
  } else if (numCharacter>128){
    alert("Must select a number less than 128.");
    return " ";
  }
  // }else if (numCharacter == a){
  //   alert("Must select a number");
  //   return " ";
  // } thought i needed this code if users tried selected letters or characters instead of numbers?
  console.log(numCharacter);
  for (let i = 0; i < numCharacter; i++) {
    possibleCharacter += lowCharacters[Math.floor(Math.random() * lowCharacters.length)]
    }
    number();
    upperCaseCharacters();
    return (possibleCharacter);
    console.log(possibleCharacter); 
};


//function for the user if they would like a number in their password
function number (){
  var numberChoice = [0,1,2,3,4,5,6,7,8,9];
  var yesNumber = confirm("Click OK if you'd like to include numbers in your password.");
  if (yesNumber === true){
    possibleCharacter += numberChoice[Math.floor(Math.random()*numberChoice.length)];
  } else (possibleCharacter);
};


//function for the user if they would like uppercase characters in their password
function upperCaseCharacters (){
  var upperCaseLetters= ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var yesUpperCase = confirm("Would you like to include uppercase letters in your password?");
  if (yesUpperCase === true){
    possibleCharacter += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
  } else
    (possibleCharacter);
};

//function to include special characters 
specialCharacters = () =>




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  



// let specialCharacter = ["$", "@", "!", "?", "^"];
// let numCharacter = window.prompt("Type in the amount of characters you would like in your password. Must select a number between 8 and 128.");
// console.log(numCharacter);
//  for (let i = 0; i <numCharacter.length; i++){
//  }
//  return(specialCharacter[Math.floor(Math.random()*specialCharacter.length)])
//  console.log(specialCharacter);



// user selects which criteria to include

//user decides how long the password is

// user chooses character types in password
  // (lowercase, uppercase, numeric, and/or special characters)

// each prompt answered-- input is validated and at least one character type is selected

//when all prompts answered, password is generated
//password is either an alert or written on page 