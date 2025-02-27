//length
let greeting = "Hello, world!";
console.log(greeting.length); // 13

//Indexed Access as “Properties”
let str = "JavaScript";
console.log(str[0]); // "J"
console.log(str[4]); // "S"

//3. Inherited Properties from String’s Prototype
//3.1. constructor
let sample = "learn";
console.log(sample.constructor === String); // true

//3.2. [Symbol.iterator]
let text = "iterate";
for (const char of text) {
  console.log(char);
}
// This logs each character: "i", "t", "e", "r", "a", "t", "e"
