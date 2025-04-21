/*
Challenge 1: Remove First & Last
Write removeFirstLast(str) that returns the string without its first and last character. If str length ≤ 2, return "".
*/
// Solution
function removeFirstLast(str) {
  return str.slice(1, -1);
}