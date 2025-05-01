/*
Challenge 1: formatAccountNumber(num, length)
Format a numeric account number to a fixed width by padding with leading zeros.

function formatAccountNumber(num, length) {
  // e.g. (42, 6) → "000042"
}

Challenge 2: padBothSides(str, totalLength, padChar)
Pad a string evenly on both sides (prefix and suffix) to reach totalLength.
If an odd number of padding characters is needed, put the extra one on the right.

function padBothSides(str, totalLength, padChar) {
  // e.g. ("X", 5, "*") → "**X**"
}


Challenge 3: formatTableRow(cells, widths)
Given an array of strings cells and a matching array of integers widths, return a single string where each cell is padded on the right with spaces to its column width, then joined by " | ".

function formatTableRow(cells, widths) {
  // e.g. (["Name","Age"], [10,3]) → "Name      | Age"
}


Challenge 4: maskLeft(str, visibleCount)
Replace all but the last visibleCount characters of str with '*'.

function maskLeft(str, visibleCount) {
  // e.g. ("1234567890", 4) → "******7890"
}
Challenge 5: safePadStart(str, targetLength, padString)
Return str.padStart(targetLength, padString) if str and padString are strings and targetLength is a non-negative integer; otherwise return str unchanged.

function safePadStart(str, targetLength, padString) {
  // Your code here
}*/


//SOLUTIONS


function formatAccountNumber(num, length) {
  const s = string(num)
  return s.padStart(length, '0');
}

function padBothSides(str, totalLength, padChar) {
  let padNeeded = totalLength - str.length;
  if (padNeeded <= 0) return str;
  const prefix = Math.floor(padNeeded / 2);
  const suffix = padNeeded - prefix;
  return str.padStart(str.length + prefix, padChar).padEnd(totalLength, padChar);
}

function formatTableRow(cells, widths) {
  return cells
  .map((cell, i) => {
    // Use widths[i] if present and a number, else default to cell.length
    const w = Number.isInteger(widths[i]) ? widths[i] : cell.length;
    return cell.padEnd(w, " ");
  })
  .join(" | ");
}

function maskLeft(str, visibleCount) {
  let count = str.length - visibleCount;
  if (count <= 0) return str;
  return str.slice(-visibleCount).padStart(str.length, '*')
}

function safePadStart(str, targetLength, padString) {
  if ((typeof str !== 'string' || typeof padString !== 'string') || !Number.isInteger(targetLength) ||  targetLength < 0) return str;
  return str.padStart(targetLength, padString);
}