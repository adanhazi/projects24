const charToCode = (str, index) =>{
  if (index >= str.length)
      return "Index out of range";
  return str.charCodeAt(index);
}

const sumCharCodes = str =>{
   let sum = 0;
   for (let i = 0; i < str.length; i++){
       sum += str.charCodeAt(i);
   }
   return sum;
}

const isUpperCaseAt = (str, index) =>{
   let value = str.charCodeAt(index)
   if (value >= 64 && value <= 90)
      return true;
  return false;
}

const compareCharCodeSums = (str1, str2) =>{
   let sum1 = 0;
   let sum2 = 0;
   for (let i = 0; i < str1.length; i++){
       sum1 += str1.charCodeAt(i);
   }
   for (let j = 0; j < str2.length; j++){
       sum2 += str2.charCodeAt(j);
   }
   if (sum1 > sum2){
      return 1; 
   } else if (sum2 > sum1){
       return -1;
   } else {
       return 0;
   }
}

const countCodesAbove = (str, threshold) =>{
   let count = 0;
   for (let i = 0; i < str.length; i++){
       if (str.charCodeAt(i) > threshold)
          count++;
   }
   return count;
}

console.log(charToCode("hello", 1));
console.log(charToCode("hello", 10));
console.log(sumCharCodes("ABC"));
console.log(isUpperCaseAt("Hello", 0));
console.log(isUpperCaseAt("Hello", 1));
console.log(compareCharCodeSums("ABC", "ABD"));
console.log(compareCharCodeSums("Hello", "World"));
console.log(countCodesAbove("JavaScript", 90));
console.log(countCodesAbove("Hello", 70));