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