// Assignment Code
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var password = document.getElementById("password)");

var passwordLength = function () {
    var charLength = parseInt(prompt("Please choose a password length between 8-128 characters:"));

    if (charLength < 8 || charLength > 128 || charLength === " ") {
        alert("Please choose a password length between 8-128.");
        return passwordLength;
    } else {
        alert("You chose a length of " + charLength)
    }
}
function generatePassword() {
    passwordLength();
    var password = "";
    var charChoice = lowercase;
    var upperQuestion = confirm("Would you like uppercase letters?");
    var numberQuestion = confirm("Would you like numbers?");
    var specialQuestion = confirm("Would you like special characters?");
    
    if (upperQuestion) {
        charChoice = charChoice.concat(uppercase)
    };

    if (numberQuestion) {
        charChoice = charChoice.concat(numeric)
    };

    if (specialQuestion) {
        charChoice = charChoice.concat(special)
    };

    for (var i = 0; i < passwordLength.charLength; i++) {
        var randomNumber = Math.floor(Math.random() * charChoice.length);
        password += charChoice.substring(randomNumber, randomNumber + 1);
    };
    document.getElementById("password").value = password;
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
