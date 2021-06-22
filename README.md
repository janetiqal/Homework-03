## Name of Assignment
Homework-03 
# Homework-03
Password Generator Assignment
## Purpose
The Purpose of this assignment has been to use everything we have learned in our Javascript module to create a password generator with multiple prompts. 
## My Experience
The first thing I did was write pseudocode as line comments at the end of my javascript page in order to break down the assignment into smaller pieces. I found I need to write multiple functions in order to achieve the simplest results. 

I opened the index file with a live server and checked the console. Upon checking the console, I saw an error with the the  generatePassword being undefined. I then began to define the function that was being called in the var password on line 11. 

I wrote the function for generatePassword to determine the character length of the password. The password must be a length of 8 to 128 characters. If the user types in a number less than 8 or more than 128 a prompt message shows up in the browser and alerts the user of their error. The function also warns the user to pick a number and not any other character. 

I realized I needed to create a variable on the global scope in order to concatenate the new password with each prompt the user answers. I named this variable possibleCharacters. 
I created function numbers() in order to ask the user if they would like numbers generated in new password. I used the confirm boxes in order to make the conditions statements easier because it assigns the variable a boolean value. I did the same with the function upperCaseLetters(), lowerCaseLetters and function specialCharacters(). If the user clicks confirm, the password would generate with the corresponding character.

The generatePassword function calls on the 4 seperate functions and then a locally scoped variable called password is set equal to the possible character string. The possible character array is randomized in the generatePassword function using the multiple Math methods. The string variable, password is returned. 

I had trouble figuring out how to add the results of the 4 functions together in the generate password function. Using the .push method and the spread operator was one solution for the issue I faced. 

## Link to My Work
https://github.com/janetiqal/Homework-03
## Screenshots of Working Application
<img width="1428" alt="Screen Shot 2021-06-22 at 5 46 57 PM-1" src="https://user-images.githubusercontent.com/84414488/123009667-c50b6680-d382-11eb-9263-09e72e46444a.png">
## Created By
Janet Iqal 