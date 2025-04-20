function hasLetterA(str) {
  return str.includes('a');
}

function isGreeting(str) {
  str = str.toLowerCase();
  return str.includes("hello");
}

function containsAllKeywords(str, keywords) {
  for (const k of keywords){
      if (!str.includes(k)){
        return false;
      }
  }
  return true;
}

function includesFromPosition(str, search, pos) {
  return str.includes(search, pos);
}

function filterByKeyword(arr, keyword) {
  return arr.filter(f => f.includes(keyword));
}

function safeIncludes(str, search) {
  if (typeof str !== 'string' || typeof search !== 'string'){
      return false;
  }
  return str.includes(search);
}