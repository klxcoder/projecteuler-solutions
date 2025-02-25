const getWordValue = (word) => {
  const A = "A".charCodeAt(0);
  return word.split('').reduce((sum, char) => sum + char.charCodeAt(0) - A + 1, 0);
}

const fs = require("fs");

function readFirstLine(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  return data.split("\n")[0] || null;
}

const getAnswer = () => {
  const firstLine = readFirstLine("words.txt");
  const words = firstLine.split(",").map(word => word.slice(1, word.length - 1));
  const wordValues = []
  let maxWordValue = 0;
  for (const word of words) {
    const wordValue = getWordValue(word);
    if (wordValue > maxWordValue) {
      maxWordValue = wordValue;
    }
    wordValues.push(wordValue);
  }
  const triangleNumbers = []
  for (let n = 1; ; n++) {
    const triangleNumber = n * (n + 1) / 2;
    if (triangleNumber > maxWordValue) {
      break;
    }
    triangleNumbers.push(triangleNumber)
  }
  return wordValues.reduce((count, wordValue) => triangleNumbers.includes(wordValue) ? count + 1 : count, 0);
}

const answer = getAnswer();
console.log(answer);