/*
Challenge 1: Last Vowel Position
Write a function lastVowelIndex(str) that returns the index of the last vowel (a, e, i, o, u, case‑insensitive) in str, or -1 if none.
*/
//Solutions
function lastVowelIndex(str) {
  str = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let positions = vowels
  .map(v => str.lastIndexOf(v))
  .filter(pos => pos !== -1);
  return positions.length ? Math.max(...positions) : -1;
}

/*
Challenge 2: Last Occurrence with Limit
Implement limitedLastIndexOf(str, sub, limit) that returns the last index of sub at or before limit. If limit is out of range (<0), return -1.
*/
//Solutions
function limitedLastIndexOf(str, sub, limit) {
  if (limit < 0)
    return -1
  return str.lastIndexOf(sub, limit);
}

/*
Challenge 3: Is Substring at End
Write endsWithSub(str, sub) that returns true if str ends with sub, but without using .endsWith(). Use .lastIndexOf() to check.
*/
//Solutions
function endsWithSub(str, sub) {
  let index = str.lastIndexOf(sub);
  return index !== -1 && index === str.length - sub.length;
}

