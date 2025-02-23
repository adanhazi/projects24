// Random Password Generator
function passwordGenerator(){
  const passwordLength = 10;
  const includeLowerCase = true;
  const includeUpperCase = false;
  const includeNumbers = false;
  const includeSymbols = true;

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowerCase : "";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  const textBox = document.getElementById('textBox');
  const result = document.getElementById('result');
  //const genBtn = document.getElementById('genBtn');

  if (passwordLength <= 0){
    result.textContent = `(Password length must be at least 1)`;
  }
  if (allowedChars.length === 0){
    result.textContent = `(At least 1 set of characters must be selected)`;
  }

  for (let i = 0; i < passwordLength; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  textBox.value = password;
}