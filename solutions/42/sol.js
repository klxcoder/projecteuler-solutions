const getWordValue = (word) => {
  const A = "A".charCodeAt(0);
  return word.split('').reduce((sum, char) => sum + char.charCodeAt(0) - A + 1, 0);
}

const fs = require("fs");

function readFirstLine(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  return data.split("\n")[0] || null;
}

console.log(readFirstLine("words.txt"));

console.log(getWordValue("SKY"));