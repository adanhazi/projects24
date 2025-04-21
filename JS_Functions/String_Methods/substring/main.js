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

/*
Challenge 4: Mask Middle
Write maskMiddle(str, numVisible) that replaces all but the first and last numVisible characters with '*'. If string too short, return str unchanged.
*/
// Solution
function maskMiddle(str, numVisible) {
  let len = str.length;
  let char = '*'
if (len <= 2*numVisible) return str;
const start = str.substring(0, numVisible);
const end = str.substring(len - numVisible);
const middle = char.repeat(len - 2*numVisible);
return start + middle + end;
}

/*
Challenge 5: Prefix/Suffix Checker
Implement betweenIndices(str, sub, start, end) that returns true if sub occurs entirely between start and end (exclusive), otherwise false.
*/
// Solution
function betweenIndices(str, sub, start, end) {
  const segment = str.substring(start, end);
  return segment.includes(sub);
}
