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

  document.getElementById("strengthText").innerHTML = "";

  document.getElementById("sn1").style.backgroundColor = "transparent";
  document.getElementById("sn1").style.borderColor = "#38ff42";

  document.getElementById("sn2").style.backgroundColor = "#38ff42";
  document.getElementById("sn2").style.borderColor = "#38ff42";

  document.getElementById("sn3").style.backgroundColor = "#38ff42";
  document.getElementById("sn3").style.borderColor = "#38ff42";

  document.getElementById("sn4").style.backgroundColor = "#transparent";
  document.getElementById("sn4").style.borderColor = "#38ff42";

  if (strengthScore <= 2 && strengthScore !== 0) {
    // WEAK
    document.getElementById("strengthText").innerHTML = "WEAK";

    document.getElementById("sn1").style.backgroundColor = "#fa4a2a";
    document.getElementById("sn1").style.borderColor = "#fa4a2a";
  } else if (strengthScore <= 4) {
    // MEDIUM
    document.getElementById("strengthText").innerHTML = "MEDIUM";

    document.getElementById("sn1").style.backgroundColor = "#fa922a";
    document.getElementById("sn1").style.borderColor = "#fa922a";

    document.getElementById("sn2").style.backgroundColor = "#fa922a";
    document.getElementById("sn2").style.borderColor = "#fa922a";
  } else if (strengthScore <= 6) {
    // STRONG
    document.getElementById("strengthText").innerHTML = "STRONG";

    document.getElementById("sn1").style.backgroundColor = "#a5ff5c";
    document.getElementById("sn1").style.borderColor = "#a5ff5c";

    document.getElementById("sn2").style.backgroundColor = "#a5ff5c";
    document.getElementById("sn2").style.borderColor = "#a5ff5c";

    document.getElementById("sn3").style.backgroundColor = "#a5ff5c";
    document.getElementById("sn3").style.borderColor = "#a5ff5c";
  } else if (strengthScore == 7) {
    // VERY STRONG
    document.getElementById("strengthText").innerHTML = "VERY STRONG";

    document.getElementById("sn1").style.backgroundColor = "#38ff42";
    document.getElementById("sn1").style.borderColor = "#38ff42";

    document.getElementById("sn2").style.backgroundColor = "#38ff42";
    document.getElementById("sn2").style.borderColor = "#38ff42";

    document.getElementById("sn3").style.backgroundColor = "#38ff42";
    document.getElementById("sn3").style.borderColor = "#38ff42";

    document.getElementById("sn4").style.backgroundColor = "#38ff42";
    document.getElementById("sn4").style.borderColor = "#38ff42";
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
