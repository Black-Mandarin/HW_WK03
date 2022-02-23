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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    // Password Length Prompt

    var len = window.prompt(
      "Password Criteria: Length of Password (Must be between 8 - 128 Characters"
    );
    len = parseInt(len);

    //IF Llength greater than 8 an dless than 128 and it should be a number
    if(len >= 8 && len <= 128 && !isNaN(len)) {
      
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

      var allowedChars = '';

      if(!upperCase && !lowerCase && !numericCase && !specialCase){
        alert("No Vaild Password Crietra")
      }
      else {
       if( upperCase === true ) { allowedChars += arrayUpperCase.toString()
       }
       else {
         if( lowerCase === true) {allowedChars += arrayLowerCase.toString()
       }
       else{
         if(numericCase === true) {allowedChars += arrayNumericase.toString()
       }
       else{
         if(specialCase === true) {allowedChars += arrayspecialCase.toString()
       }
       else  {
        //negative scenario
        window.alert("Invaild Length");
      }     
    }

    var allowedCharLen = allowedChars.length;
    for (i = 0; i < len; i ++){
      result += allowedChars.charAt(Math.floor(Math.random() * allowedCharLen));
    }

}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword){
   passwordText.textContent = writePassword(allowedCharLen)};
