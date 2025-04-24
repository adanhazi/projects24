/*
Write a function that takes a comma-separated string of values and returns an array of trimmed strings (no extra whitespace around each entry).
*/
function splitCSV(str) {
  return str
    .split(",")
    .map(item => item.trim());
}

/*
Create a function that returns the first n words from a space-separated sentence. If there are fewer than n words, return them all.
*/
function firstNWords(sentence, n) {
  const words = sentence.trim().split(/\s+/);
  return words.slice(0, n);
}

/*
Implement a function that returns the file extension of a filename string (the substring after the last .). If there is no . or it’s the first character, return "".
*/
function getFileExtension(filename) {
  // No leading dot and at least one dot elsewhere
  const idx = filename.lastIndexOf(".");
  if (idx > 0 && idx < filename.length - 1) {
    return filename.substring(idx + 1);
  }
  return "";
}

/*
Write splitIntoChunks(str, size) that breaks a string into an array of substrings each of length size. The last chunk may be shorter if str.length isn’t a multiple of size.
*/
function splitIntoChunks(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substring(i, i + size));
  }
  return chunks;
}