/*
Challenge 1: Swap Start/End Swap
Write extractBetween(str, a, b) that returns the substring between indices a and b, handling cases where a > b by automatically swapping.
*/
// Solution
function extractBetween(str, a, b) {
  if (a > b) [a, b] = [b, a];
  return str.substring(a, b);
}

/*
Challenge 2: Remove First N
Create removeFirstN(str, n) that removes the first n characters. If n ≤ 0, return the original string; if n ≥ str.length, return "".
*/
// Solution
function removeFirstN(str, n) {
  if (n <= 0) return str;
  if (n >= str.length) return "";
  return str.substring(n);
}

/*
Challenge 3: Keep Last N
Implement keepLastN(str, n) that returns only the last n characters. If n ≤ 0, return ""; if n ≥ str.length, return the full string.
*/
// Solution
function keepLastN(str, n) {
  if (n <= 0) return "";
  if (n >= str.length) return str;
  let len = str.length;
  return str.substring(len - n)
}

