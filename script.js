document.getElementById("passwordLengthText").innerHTML = document.getElementById("lengthSlider").value;

let sliderChanged = () => {
  document.getElementById("passwordLengthText").innerHTML = document.getElementById("lengthSlider").value;
};

let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let numbers = "1234567890";

let symbols = "~`! @#$%^&*()_-+={[}]|:;\"'<,>.?/";

console.log("lower: " + lowercaseLetters.length);
console.log("upper: " + uppercaseLetters.length);
console.log("numbers: " + numbers.length);
console.log("symbols: " + symbols.length);

let generatePassword = () => {
  let password = "";

  for (let i = 0; i < document.getElementById("lengthSlider").value; i++) {
    password = password + lowercaseLetters.charAt(Math.floor(Math.random() * 27));
  }

  return password;
};

document.getElementById("passwordGenerateButton").addEventListener("click", function () {
  document.getElementById("passwordText").innerHTML = generatePassword();
});
