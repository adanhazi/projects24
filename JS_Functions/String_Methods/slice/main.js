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

/*
Challenge 3: Remove N Characters
Implement removeChars(str, n) that removes n characters from the start and n from the end. If 2n ≥ str.length, return "".
*/
// Solutions
function removeChars(str, n) {
  if (str.length <= 2*n)
    return "";
  return str.slice(n, -n)
}

/*
Challenge 4: Slice and Swap
Write swapHalves(str) that splits the string in half and swaps the halves. If odd length, the extra character stays in the middle.
*/
// Solutions
function swapHalves(str) {
  const len = str.length;
  const half = Math.floor(len/2);
  if (len % 2 === 0){
    return str.slice(half) + str.slice(0, half)
} else {
  const left = str.slice(0, half);
  const middle = str.charAt(half);
  const right = str.slice(half+1);
  return right + middle + left;
}
}

/*
Challenge 5: Custom Truncate
Build truncate(str, maxLen) that returns the first maxLen characters followed by "..." if str.length > maxLen, otherwise returns str unchanged.
*/
// Solutions
function truncate(str, maxLen) {
  if (str.length > maxLen){
      str = str.slice(0, maxLen) + '...';
      return str;
  }
  return str;
}