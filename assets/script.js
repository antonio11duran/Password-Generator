// Assignment Code
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

var charLength = "";
var upperQuestion;
var numberQuestion;
var specialQuestion;

function generatePassword() {
        var charLength = parseInt(prompt("Please choose a password length between 8-128 characters:"));

        if (charLength < 8 || charLength > 128 || charLength === " ") {
            alert("Please choose a password length between 8-128.");
            var charLength = parseInt(prompt("Please choose a password length between 8-128 characters:"));
        } else {
            alert("You chose a length of " + charLength);
        }

    var lowercaseQuestion = confirm("Would you like to include lowercase letters?");
    var upperQuestion = confirm("Would you like to include uppercase letters?");
    var numberQuestion = confirm("Would you like to inlcude numbers?");
    var specialQuestion = confirm("Would you like special to include characters?");
    
    if (!lowercaseQuestion && !upperQuestion && !numberQuestion && !specialQuestion) {
        alert("Please select one of the parameters.");
        var lowercaseQuestion = confirm("Would you like to include lowercase letters?");
        var upperQuestion = confirm("Would you like to include uppercase letters?");
        var numberQuestion = confirm("Would you like to inlcude numbers?");
        var specialQuestion = confirm("Would you like special to include characters?");
    }

    var charChoice = [];
    
    if (lowercaseQuestion) {
        charChoice = charChoice.concat(lowercase)
    };

    if (upperQuestion) {
        charChoice = charChoice.concat(uppercase)
    };

    if (numberQuestion) {
        charChoice = charChoice.concat(numeric)
    };

    if (specialQuestion) {
        charChoice = charChoice.concat(special)
    };

    console.log(charChoice);

    var retVal = "";

    for (var i = 0; i < charLength; i++) {
        retVal = retVal + charChoice[Math.floor(Math.random() * charChoice.length)];
        console.log(retVal);
    };
    return retVal;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
