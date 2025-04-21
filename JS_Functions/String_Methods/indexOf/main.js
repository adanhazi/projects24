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

/*
Challenge 3: Is Substring at Position
Create isAtPosition(str, sub, pos) that returns true if str contains sub starting exactly at index pos, otherwise false. Use .indexOf().
*/
//Solution
function isAtPosition(str, sub, pos) {
  return str.indexOf(sub, pos) === pos;
}

/*
Challenge 4: Count Substring Occurrences
Write countOccurrences(str, sub) that returns the number of times sub appears in str. Use .indexOf() in a loop.
*/
//Solutions
function countOccurrences(str, sub) {
  let count = 0;
  let pos = str.indexOf(sub);
  while (pos !== -1){
      pos = str.indexOf(sub, pos + 1);
      count += 1;
  }
  return count;
}

/*
Challenge 5: Safe IndexOf
Implement safeIndexOf(str, search, from) that returns -1 if either str or search isn't a string; otherwise returns str.indexOf(search, from).
*/
//Solutions
function safeIndexOf(str, search, from) {
  if (typeof str !== 'string' || typeof search !== 'string'){
      return -1;
  }
  return str.indexOf(search, from);
}
