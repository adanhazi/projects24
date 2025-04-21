/*
Challenge 1: Remove First & Last
Write removeFirstLast(str) that returns the string without its first and last character. If str length ≤ 2, return "".
*/
// Solution
function removeFirstLast(str) {
  return str.slice(1, -1);
}

/*
Challenge 2: Middle Third
Create middleThird(str) that returns the middle third of a string. If str.length isn’t divisible by 3, round down the third length.
*/
// Solutions
function middleThird(str) {
  let thirdLength = Math.floor(str.length / 3)
  return str.slice(thirdLength, 2*thirdLength);
}