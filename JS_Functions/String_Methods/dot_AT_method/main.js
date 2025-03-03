function getFirstChar(str){
  return str.at(0);
}
let getLastChar = str => str.at(-1);
function getCharAt(str, index){
  if (index >= str.length){
      return "Index out of range";
  }
  return str.at(index);
}
function reverseString(str){
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--){
      revstr += str.at(i);
  }
  return revstr;
}
function isPalindrome(str){
  for (let i = 0; i < str.length / 2; i++){
      if (str.at(i) !== str.at(- 1 -i)){
          return false;
      }
  }
   return true;
}
function getMiddleChar(str){
  if (str.length % 2 === 0){
      return str.at(Math.floor(str.length / 2) - 1)
  }
  return str.at(Math.floor(str.length / 2));
}
function iterateChars(str){
  let arr = [];
  for (let i = 0; i < str.length; i++){
      arr[i] = str.at(i);
  }
  return arr;
}
function sumCharCodes(str){
  let sum = 0;
  for (let i = 0; i < str.length; i++){
      sum += str.at(i).charCodeAt()
  }
  return sum;
}
function extractEveryNth(str, n){
  let newstr = "";
 //let skipNum = Math.floor(str.length / 2)
 for (let i = n - 1; i < str.length; i += n){
     newstr += str.at(i)
 }
 return newstr;
}
console.log(getFirstChar("JavaScript"));
console.log(getLastChar("JavaScript"));
console.log(getCharAt("Hello", 1));
console.log(getCharAt("Hello", 10));
console.log(reverseString("abcd"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(getMiddleChar("abcdef"));
console.log(getMiddleChar("abcde"));
console.log(iterateChars("hello")); 
console.log(sumCharCodes("ABC"));
console.log(extractEveryNth("abcdefghij", 2));
console.log(extractEveryNth("abcdefghij", 3));