// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordOptions() {
  var specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "?",
    "~",
  ];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var upperCase = [
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
  var lowerCase = [
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
  // Variable to store length of password from user input
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number");
    return null;
  } else if (!length) {
    alert("This needs a value");
  } else if (length < 8 || length > 128) {
    // length = parseInt(prompt("Please choose between 8 and 128 characters."));
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    "Click OK to confirm including Special Characters."
  );
  var hasUpperCase = confirm(
    "Click OK to confirm including at least one Upper Case letter."
  );
  var hasLowerCase = confirm(
    "Click OK to confirm including at least one Lower Case letter."
  );
  var hasNumbers = confirm(
    "Click OK to confirm including at least one Number."
  );
  //conditional statement if user selects cancel for the selections
  if (!hasSpecialCharacters && !hasUpperCase && !hasLowerCase && !hasNumbers) {
    alert("Please select password criteria to continue.");
  }
  //office hours with TA jeremy xu
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasUpperCase: hasUpperCase,
    hasSpecialCharacters: hasSpecialCharacters,
  };

  return passwordOptions;
}

// Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  console.log(randElement);
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];

  // Array of character types
  var specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "?",
    "~",
  ];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var upperCase = [
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
  var lowerCase = [
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
  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Check if an options object exists, if not exit the function
  if (!options) return null;

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }
  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(lowerCase));
  }
  // console.log(possibleCharacters);
  // console.log(guaranteedCharacters);

  // add two for loops here - Office hours with TA Jeremy Xu
  //one passing user input - possible
  for (var i = 0; i < options.length; i++) {
    var passwordChar = getRandom(possibleCharacters);
    // console.log(passwordChar);
    result.push(passwordChar);
  }
  //tutoring session with sam cordova
  //one that passes through guaranteed char.
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    //var guaranteedChar = (guaranteedCharacters);
    // console.log(guarnteedChar);
    result[i] = guaranteedCharacters[i];
  }
  // Transform the result into a string and pass into writePassword
  console.log(result);
  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
