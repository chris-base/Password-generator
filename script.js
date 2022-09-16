document.getElementById("passwordLengthText").innerHTML = document.getElementById("lengthSlider").value;

let sliderChanged = () => {
  document.getElementById("passwordLengthText").innerHTML = document.getElementById("lengthSlider").value;
};

let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let symbols = "~`!@#$%^&*()_-+={[}]|:;\"',.?/";
var avaliableChars = "";
var password = "";
var strengthScore = 0;

let generateStrength = () => {
  if (document.getElementById("lengthSlider").value < 10) {
    strengthScore += 1;
  } else if (document.getElementById("lengthSlider").value < 18) {
    strengthScore += 2;
  } else if (document.getElementById("lengthSlider").value > 18) {
    strengthScore += 3;
  }

  if (strengthScore <= 2) {
    // WEAK
    console.log("WEAK");
  } else if (strengthScore <= 4) {
    // MEDIUM
    console.log("MEDIUM");
  } else if (strengthScore <= 6) {
    // STRONG
    console.log("STRONG");
  } else if (strengthScore == 7) {
    // VERY STRONG
    console.log("VERY STRONG");
  }

  console.log("strength score: " + strengthScore);
};

let generatePassword = () => {
  avaliableChars = "";
  strengthScore = 0;

  if (document.getElementById("uppercaseBox").checked) {
    avaliableChars += uppercaseLetters;
    strengthScore += 1;
  }

  if (document.getElementById("lowercaseBox").checked) {
    avaliableChars += lowercaseLetters;
    strengthScore += 1;
  }

  if (document.getElementById("numbersBox").checked) {
    avaliableChars += numbers;
    strengthScore += 1;
  }

  if (document.getElementById("symbolsBox").checked) {
    avaliableChars += symbols;
    strengthScore += 1;
  }

  password = "";

  for (let i = 0; i < document.getElementById("lengthSlider").value; i++) {
    password = password + avaliableChars.charAt(Math.floor(Math.random() * avaliableChars.length));
  }

  generateStrength();
};

document.getElementById("passwordGenerateButton").addEventListener("click", function () {
  generatePassword();
  document.getElementById("passwordText").innerHTML = password;
});
