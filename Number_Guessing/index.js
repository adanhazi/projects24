//Number Guessing

const min = 1;
const max = 100;
const ans = Math.floor(Math.random() * (max - min) + min);

let guess;
let attempts = 0;
let running = true;

while(running){

  guess = prompt(`Guess a number between ${min} - ${max}`);
  guess = Number(guess);

  if (isNaN(guess)){
    prompt(`Please enter a valid number`);
  } else if (guess < min || guess > max){
    prompt('Please enter a valid number')
  } else {
    attempts++;
    if (guess < ans){
      console.log('TOO LOW, PLS TRY AGAIN');
    } else if (guess > ans){
      console.log('TOO HIGH, PLS TRY AGAIN');
    } else {
      console.log(`CORRECT! You got it right after ${attempts} attempts`);
      running = false;
    }
  }
}