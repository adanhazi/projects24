function calculateAverage(numbers) {
  // Write your code here
  if (numbers.length === 0)
      return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
      sum += numbers[i]
  }
  return sum / numbers.length;
}

function vowelsOnly(str) {
  let vowels = '';
  for (let i = 0; i < str.length; i++){
      if (str[i] === 'A' || str[i] === 'a' ||
          str[i] === 'E' || str[i] === 'e' ||
          str[i] === 'I' || str[i] === 'i' ||
          str[i] === 'O' || str[i] === 'o' ||
          str[i] === 'U' || str[i] === 'u'){
              vowels += str[i];
          }
  }
  return vowels;
}
