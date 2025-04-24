/*
Write a function that takes a comma-separated string of values and returns an array of trimmed strings (no extra whitespace around each entry).
*/
function splitCSV(str) {
  return str
    .split(",")
    .map(item => item.trim());
}
