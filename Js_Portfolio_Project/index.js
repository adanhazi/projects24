import { readFileSync } from "fs";

//1. read the JSON file
const data = readFileSync("./messages.json", "utf-8");

//2. parse it into a javascript object
const { codingQuotes } = JSON.parse(data);

//3. Grab a random qoute
function getRandomQoute(){
  const randomIndex = Math.floor(Math.random() * codingQuotes.length);
  return codingQuotes[randomIndex];
}

//4. print the random qoute
console.log(getRandomQoute());