// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var arrayLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var arrayUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var arrayNumericase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var arraySpecialCharacter = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "`",
  "{",
  "|",
  "~",
];

function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;

  function generatePassword() {
    // Password Length Prompt

    var len = window.prompt(
      "Password Criteria: Length of Password (Must be between 8 - 128 Characters"
    );
    len = parseInt(len);

    //IF Llength greater than 8 an dless than 128 and it should be a number
    if (len <= 8 || len >= 128 || isNaN(len)) {
      return alert("Invaild entry");
    }

    //this is positive scenario
    var upperCase = window.confirm(
      "Password Criteria: Would you like UpperCase"
    );

    //LowerCase
    var lowerCase = window.confirm(
      "Password Criteria: Would you like LowerCase"
    );

    //Numeric Value
    var numericCase = window.confirm(
      "Password Criteria: Would you like NumericCase"
    );

    //Special Character
    var specialCase = window.confirm(
      "Password Criteria: Would you like Special Characters"
    );

    var allowedChars = "";

    if (!upperCase && !lowerCase && !numericCase && !specialCase) {
      return alert("No Vaild Password Crietra");
    }

    if (upperCase === true) {
      allowedChars += arrayUpperCase.toString();
    }

    if (lowerCase === true) {
      allowedChars += arrayLowerCase.toString();
    }

    if (numericCase === true) {
      allowedChars += arrayNumericase.toString();
    }

    if (specialCase === true) {
      allowedChars += arraySpecialCharacter.toString();
    }

    var allowedCharLen = allowedChars.length;
    var result = "";
    for (let i = 0; i < len; i++) {
      result += allowedChars.charAt(Math.floor(Math.random() * allowedCharLen));
    }

    return result;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
