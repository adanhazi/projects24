const myText = document.getElementById('myText');
const myBtn = document.getElementById('myBtn');
const resultElement = document.getElementById('resultElement');
let age;

myBtn.onclick = () => {
  age = myText.value;
  age = Number(age);
  if (age >= 100){
    resultElement.textContent = `You TOO OLD to enter this site`;
  } else if (age === 0){
    resultElement.textContent = `You can't enter. You were just born`;
  } else if (age >= 18){
    resultElement.textContent = `You old enough to enter this site`;
  } else if (age < 0){
    resultElement.textContent = `You can't be below 0`;
  } else {
    resultElement.textContent = `You must be 18+ to enter this site`;
  }
}