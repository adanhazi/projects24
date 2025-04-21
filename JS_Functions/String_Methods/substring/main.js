/*
Challenge 1: Swap Start/End Swap
Write extractBetween(str, a, b) that returns the substring between indices a and b, handling cases where a > b by automatically swapping.
*/
// Solution
function extractBetween(str, a, b) {
  if (a > b) [a, b] = [b, a];
  return str.substring(a, b);
}
