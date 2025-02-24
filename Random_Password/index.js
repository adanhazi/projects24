// Random Password Generator
function passwordGenerator(){
  /*const passwordLength = 10;
  const includeLowerCase = true;
  const includeUpperCase = false;
  const includeNumbers = false;
  const includeSymbols = true;*/

  const textBox = document.getElementById('textBox');
  const length = document.getElementById('length');
  const lowerCaseBtn = document.getElementById('lowerCaseBtn');
  const upperCaseBtn = document.getElementById('upperCaseBtn');
  const numbersBtn = document.getElementById('numbersBtn');
  const symbolsBtn = document.getElementById('symbolsBtn'); 
  const result = document.getElementById('result');
  //const genBtn = document.getElementById('genBtn');

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

  let allowedChars = "";
  let password = "";

  allowedChars += lowerCaseBtn.checked ? lowerCase : "";
  allowedChars += upperCaseBtn.checked ? upperCase : "";
  allowedChars += numbersBtn.checked ? numbers : "";
  allowedChars += symbolsBtn.checked ? symbols : "";

  if (length.value <= 0){
    result.textContent = `(Password length must be at least 1)`;
    return;
  }
  if (allowedChars.length === 0){
    result.textContent = `(At least 1 set of characters must be selected)`;
    textBox.value = "";
    return;
  }

  for (let i = 0; i < length.value; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  textBox.value = password;
}