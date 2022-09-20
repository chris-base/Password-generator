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

let resetStrengthNodes = () => {
  document.getElementById("strengthText").innerHTML = "";

  document.getElementById("sn1").style.backgroundColor = "transparent";
  document.getElementById("sn1").style.borderColor = "#fff";

  document.getElementById("sn2").style.backgroundColor = "transparent";
  document.getElementById("sn2").style.borderColor = "#fff";

  document.getElementById("sn3").style.backgroundColor = "transparent";
  document.getElementById("sn3").style.borderColor = "#fff";

  document.getElementById("sn4").style.backgroundColor = "transparent";
  document.getElementById("sn4").style.borderColor = "#fff";
};

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

  resetStrengthNodes();
  generateStrength();
};

document.getElementById("passwordGenerateButton").addEventListener("click", function () {
  generatePassword();
  document.getElementById("passwordText").innerHTML = password;
});

document.getElementById("passwordCopyImg").addEventListener("click", function () {
  // copyFunc()
  console.log("click");
  document.getElementById("passwordCopyImg").style.backgroundImage = "url(./public/doneImg.svg)";
  document.getElementById("passwordCopyImg").style.filter = "invert(100%) sepia(0%) saturate(7500%) hue-rotate(39deg) brightness(103%) contrast(99%)";

  setTimeout(() => {
    document.getElementById("passwordCopyImg").style.backgroundImage = "url(./public/contentImg.svg)";
    document.getElementById("passwordCopyImg").style.filter =
      "brightness(0) saturate(100%) invert(99%) sepia(37%) saturate(7321%) hue-rotate(162deg) brightness(104%) contrast(101%)";
  }, 2000);
});
