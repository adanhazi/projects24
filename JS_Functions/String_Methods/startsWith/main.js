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

/*
Challenge 4: validateUsername(username)
A valid username must start with a letter (A–Z or a–z). Return true if valid, false otherwise.
Hint: Use .startsWith() combined with checking the first character code.
*/

//Solutions

function validateUsername(username) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  return letters.some(letter => username.startsWith(letter));
}

/*
Challenge 5: safeStartsWith(str, search, pos)
Return false if either str or search isn’t a string; otherwise behave like .startsWith().
*/

//Solutions

function safeStartsWith(str, search, pos) {
  if (typeof str !== 'string' || typeof search !== 'string') return false;
  return str.startsWith(search, pos);
}