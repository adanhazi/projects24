/*
Challenge 1: First Vowel Position
Write a function firstVowelIndex(str) that returns the index of the first vowel (a, e, i, o, u—case‑insensitive) in the string, or -1 if none are found.
*/
//Solution
function firstVowelIndex(str) {
  str = str.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
const positions = vowels
.map(v => str.indexOf(v))
.filter(pos => pos !== -1);
return positions.length ? Math.min(...positions) : -1
}

/*
Challenge 2: Last Occurrence vs .lastIndexOf()
Without using .lastIndexOf(), write lastOccurrence(str, sub) that returns the last index of sub in str, or -1 if not found.
Hint: Use .indexOf() in a loop, advancing the search start.
*/
//Solutions
function lastOccurrence(str, sub) {
  let lastPos = -1
  let pos = str.indexOf(sub);
  while (pos !== -1){
      lastPos = pos
      pos = str.indexOf(sub, pos + 1);
}
  return lastPos;
}
