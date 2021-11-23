const reverseNumber = (number) => {
  const reversedList = number.toString().split("").reverse().map(Number);
  try {
    if (reversedList.length === 1 || reversedList[0] === 0) {
      throw new Error("Not a reversible");
    } else {
      return +reversedList.join("");
    }
  } catch (err) {
    console.error(`💥 ${err.message}`);
  }
};

const isOdd = (number) => number % 2 === 1;

const listReversible = (upperLimit) => {
  let reversibleNumbers = [];
  for (let i = 0; i < upperLimit; i++) {
    console.log(isOdd(reverseNumber(i)));
  }

  return reversibleNumbers;
};

console.log(listReversible(25));
