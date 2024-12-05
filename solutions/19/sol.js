const getAnswer = () => {
  let countSunday = 0;
  for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) { // Javascript's month is 0-based
      const date = new Date(year, month, 1);
      const dayOfWeek = date.getDay();
      if (dayOfWeek === 0) {
        countSunday++;
      }
    }
  }
  return countSunday;
}
const answer = getAnswer();
console.log(answer);