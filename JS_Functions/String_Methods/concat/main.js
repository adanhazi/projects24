const simpleConcat = (str1, str2) =>{
  return str1.concat(" ", str2);
}

const customGreeting = (name, greeting="Hello") =>{
  return `${greeting} ${name}`;
}

const buildSentence = words =>{
  let sentence = "";
  for (let i = 0; i < words.length; i++){
      sentence = sentence.concat(words[i], " ");
  }
  return sentence;
}

const joinLines = (...lines) =>{
  let line = "";
  for (let i = 0; i < lines.length; i++){
      line = line.concat("\n", lines[i]);
  }
  return line
}

const buildURL = (protocol, domain, path) =>{
  return `${protocol}${domain}${path}`;
}

console.log(simpleConcat("Hello", "World"));
console.log(customGreeting("Alice", "Welcome"));
console.log(customGreeting("Bob"));
console.log(buildSentence(["This", "is", "a", "test"]));
console.log(joinLines("Line 1", "Line 2", "Line 3"));
console.log(buildURL("https://", "example.com", "/about"));