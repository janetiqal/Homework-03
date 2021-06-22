// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleCharacter = [];
// var numberChoice = ["0","1","2","3","4","5","6","7","8","9"];
// var lowCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n","o","p","q","r","s","t","v","w","x","y", "z"];
// var upperCaseLetters= ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var specialChar = ["$", "@", "!", "?", "^"];

// function generatePasswordChoice (){
//   var length = prompt("Type in the amount of characters you would like in your password. Must select a number between 8 and 128.");
//   if (length< 8){
//     alert("Must select a number greater than 8.");
//     return " ";
//   } else if (length>128){
//     alert("Must select a number less than 128.");
//     return " ";
//   }
//     var yesNumber = confirm("Click OK to include numbers in your password.");
//     var yesUpperCase = confirm("Click OK to include uppercase letters in your password.");
//     var yesSpecialCharacter = confirm("Click OK to include special characters in your password.")
//     var yesLowerCase= confirm("Click OK to include lower case letters in your password.")
//     var passwordSelect = {
//       yesNumber:yesNumber,
//       yesUpperCase : yesUpperCase,
//       yesSpecialCharacter: yesSpecialCharacter,
//       yesLowerCase:yesLowerCase,
//       length:length
//     }
//     return passwordSelect;
// };

// function randomization (array){
//   var rIndex = Math.floor(Math.random() * array.length)
//   var rELement = array[rIndex];
//   return rELement;
// }

// function generatePassword() {
//   var choice = generatePasswordChoice();
//   var result =[]
//   var possibleCharacter=[]
//   var guranteedCharacter=[]
//   if (choice.yesNumber){
//     possibleCharacter=possibleCharacter.concat(numberChoice);
//     gChar.push(randomization(numberChoice))
//   }
//   if (choice.yesLowerCase){
//     possibleCharacter=possibleCharacter.concat(lowCharacters);
//     gChar.push(randomization(lowCharacters))
//   }
//   if (choice.yesSpecialCharacter){
//     possibleCharacter=possibleCharacter.concat(specialChar);
//     gChar.push(randomization(specialChar))
//   }
//   if (choice.yesUpperCase){
//     possibleCharacter=possibleCharacter.concat(upperCaseLetters);
//     gChar.push(randomization(upperCaseLetters))
//   }
//   for(var i = 0;i < choice.length; i++){
//     var myChar = randomization(possibleCharacter);
//     result.push(myChar)
//   }//putting in the guranteed characters user selected
//   for(var i = 0;i < gChar.length; i++){
//     result[i]=gChar[i];
//   }
//   return result.join("");
// }


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
  console.log(numCharacter);
  for (let i = 0; i < numCharacter; i++) {
    possibleCharacter += lowCharacters[Math.floor(Math.random() * lowCharacters.length)]
    }
    number();
    upperCaseCharacters();
    specialCharacters();
    return (possibleCharacter);
    console.log(possibleCharacter); 
};


// function for the user if they would like a number in their password
function number (){
  var numberChoice = [0,1,2,3,4,5,6,7,8,9];
  var yesNumber = confirm("Click OK to include numbers in your password.");
  if (yesNumber === true){
    possibleCharacter += numberChoice[Math.floor(Math.random()*numberChoice.length)];
  } else (possibleCharacter);
};

//function for the user if they would like uppercase characters in their password
function upperCaseCharacters (){
  var upperCaseLetters= ["A","B","C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var yesUpperCase = confirm("Click OK to include uppercase letters in your password.");
  if (yesUpperCase === true){
    possibleCharacter += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  } else
    (possibleCharacter);
};

//function to include special characters 
function specialCharacters (){
  var specialChar = ["$", "@", "!", "?", "^"];
  var yesSpecialCharacter = confirm("Click OK to include special characters in your password.")
  if (yesSpecialCharacter===true){
    possibleCharacter += specialChar[Math.floor(Math.random()* specialChar.length)];
  } else (possibleCharacter);
};


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