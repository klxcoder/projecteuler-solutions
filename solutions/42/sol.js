const getWordValue = (word) => {
  const A = "A".charCodeAt(0);
  return word.split('').reduce((sum, char) => sum + char.charCodeAt(0) - A + 1, 0);
}

console.log(getWordValue("SKY"));