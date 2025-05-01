/*
Challenge 1: startsWithHello(str)
Return true if str begins with "Hello", otherwise false.
*/

//Solutions

function startsWithHello(str) {
  return str.startsWith('Hello')
}

/*
Challenge 2: isValidPrefix(str, prefix, pos)
Return true if str has prefix starting exactly at index pos.
*/

//Solutions

function isValidPrefix(str, prefix, pos) {
  return str.startsWith(prefix, pos);
}

/*
Challenge 3: removePrefix(str, prefix)
If str starts with prefix, return the string without it; otherwise return str unchanged.
*/

//Solutions

function removePrefix(str, prefix) {
  if (str.startsWith(prefix)){
      return str.substring(prefix.length);
  } else {
      return str;
  }
}