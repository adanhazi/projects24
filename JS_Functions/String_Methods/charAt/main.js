const getCharUsingCharAt = (str, index) => {
  if (index >= str.length)
      return 'Index out of range';
  return str.charAt(index);
}

const stringToArrayCharAt = str =>{
  let arr = [];
  for (let i = 0; i < str.length; i++){
      arr[i] = str.charAt(i);
  }
  return arr;
}

const reverseStringCharAt = str =>{
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--){
      revstr += str.charAt(i);
  }
  return revstr;
}

const countOccurrences = (str, char) =>{
  let count = 0;
  for (let i = 0; i < str.length; i++){
      if (str.charAt(i) === char){
          count++;
      }
  }
  return count;
}

const areStringsIdentical = (str1, str2) =>{
  if (str1.length !== str2.length)
      return false;
  for (let i = 0; i < str1.length; i++){
      if (str1.charAt(i) !== str2.charAt(i)){
          return false;
      }
  }
  return true;
}

const replaceVowels = str =>{
  let replace = "";
  for (let i = 0; i < str.length; i++){
      let ch = str.charAt(i)
      if (ch === 'a' ||ch === 'A'||ch === 'e'||ch === 'E'||ch === 'i'||ch === 'I'||ch === 'o'||ch === 'O'||ch === 'u'||ch === 'U'){
          replace += '*';
      } else {
          replace += ch;
  }
  }
return replace;
}

const customSubstring = (str, start, end) =>{
  if (start >= str.length)
      return "Index out of range";
  if (end === undefined){
      let newstr = ""
      for (let i = start; i < str.length; i++){
          newstr += str.charAt(i)
      }
      return newstr;
  }
  if (start && end){
      let newstr = "";
      for (let i = start; i <= end -1; i++){
          newstr += str.charAt(i)
      }
      return newstr;
  }
}
console.log(getCharUsingCharAt("Hello", 1));
console.log(getCharUsingCharAt("Hello", 10));
console.log(stringToArrayCharAt("world"));
console.log(reverseStringCharAt("abcd")); 
console.log(countOccurrences("banana", "a"));
console.log(countOccurrences("banana", "z"));
console.log(areStringsIdentical("test", "test"));
console.log(areStringsIdentical("Test", "test"));
console.log(replaceVowels("Hello World"));
console.log(customSubstring("JavaScript", 4, 10));
console.log(customSubstring("JavaScript", 4));