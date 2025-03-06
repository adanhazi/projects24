const isEmoji = (str, pos) => {
  return str.codePointAt(pos) > 127;
}

const sumCodePoints = str =>{
  let sum = 0;
  for (let i = 0; i < str.length; i++){
      sum += str.codePointAt(i)
  }
  return sum
}

const displayCodePoints = str =>{
  for (let i = 0; i < str.length; i++){
      let cp = str.codePointAt(i)
      console.log(`The code point for ${str.charAt(i)} is : ${cp}`)
      if (cp > 0xFFFF){
          i++;
      }
  }
}

const stringToCodePoints = str =>{
  let arr = [];
  for (let i = 0; i < str.length; i++){
      let cp = str.codePointAt(i)
      arr.push(cp)
      if(cp > 0xFFFF){
          i++
      }
  }
  return arr
}
console.log(isEmoji("A😀B", 1));
console.log(isEmoji("Hello", 1));
console.log(sumCodePoints("ABC"));
displayCodePoints("Hi😀");
console.log(stringToCodePoints("A😀B")); 