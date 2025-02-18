//Random Number Generator

const myBtn = document.getElementById('myBtn');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
min = 1;
max = 6;
let random1;
let random2;
let random3;

myBtn.onclick = () => {
  random1 = Math.floor(Math.random() * max) + min;
  label1.textContent = random1;

  random2 = Math.floor(Math.random() * max) + min;
  label2.textContent = random2;

  random3 = Math.floor(Math.random() * max) + min;
  label3.textContent = random3;
}