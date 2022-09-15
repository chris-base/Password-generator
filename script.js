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

console.log("lower: " + lowercaseLetters.length);
console.log("upper: " + uppercaseLetters.length);
console.log("numbers: " + numbers.length);
console.log("symbols: " + symbols.length);

let generatePassword = () => {
  avaliableChars = "";

  if (document.getElementById("uppercaseBox").checked) {
    avaliableChars += uppercaseLetters;
  }

  if (document.getElementById("lowercaseBox").checked) {
    avaliableChars += lowercaseLetters;
  }

  if (document.getElementById("numbersBox").checked) {
    avaliableChars += numbers;
  }

  if (document.getElementById("symbolsBox").checked) {
    avaliableChars += symbols;
  }

  console.log(avaliableChars.charAt(avaliableChars.length - 1));

  password = "";

  for (let i = 0; i < document.getElementById("lengthSlider").value; i++) {
    password = password + avaliableChars.charAt(Math.floor(Math.random() * avaliableChars.length));
  }

  console.log(password);
};

document.getElementById("passwordGenerateButton").addEventListener("click", function () {
  generatePassword();
  document.getElementById("passwordText").innerHTML = password;
});
