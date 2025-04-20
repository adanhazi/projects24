function endsWithExclamation(str) {
  return str.endsWith('!');
}

function isImageFile(filename) {
  return (
      filename.endsWith(".jpg") ||
      filename.endsWith(".jpeg") ||
      filename.endsWith(".png") ||
      filename.endsWith(".gif")
      )
}

function endsWithTruncated(str, search, len) {
  return str.endsWith(search, len)
}

function isQuestion(sentence) {
  return sentence.trim().endsWith('?');
}

function safeEndsWith(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string'){
      return false;
  }
  return str.endsWith(search);
}

console.log(endsWithExclamation("Hello!"));
console.log(endsWithExclamation("Hello"));
console.log(isImageFile("pic.jpg"));   // true
console.log(isImageFile("pic.jpeg"));  // true
console.log(isImageFile("pic.png"));   // true
console.log(isImageFile("pic.gif"));   // true
console.log(isImageFile("pic.bmp"));   // false
console.log(endsWithTruncated("JavaScript", "Java", 4));    // true
console.log(endsWithTruncated("JavaScript", "JavaS", 5));   // true
console.log(endsWithTruncated("TypeScript", "Script", 10)); // true
console.log(endsWithTruncated("TypeScript", "Type", 4));    // true
console.log(isQuestion("Is this a question?"));      // true
console.log(isQuestion("Is this a question?   "));   // true
console.log(isQuestion("This is not a question."));  // false
console.log(safeEndsWith("hello", "lo"));   // true
console.log(safeEndsWith("hello", 123));    // false
console.log(safeEndsWith(123, "3"));        // false