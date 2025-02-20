const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = () => {
  if (myCheckBox.checked){
    subResult.textContent = `You have subscribed!`;
  } else {
    subResult.textContent = `You have not subscribed!`;
  }
  if (visaBtn.checked){
    paymentResult.textContent = `You are paying with visa card`;
  } else if (mastercardBtn.checked){
    paymentResult.textContent = `You are paying with mastercard`;
  } else if (paypalBtn.checked) {
    paymentResult.textContent = `You are paying with paypal`;
  } else {
    paymentResult.textContent = `You must select a payment type`;
  }
}
