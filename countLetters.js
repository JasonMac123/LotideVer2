const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(string) {
  const noSpaces = string.split(' ').join('');
  let countingObj = {};
  for (const letter of noSpaces) {
    if (!Object.keys(countingObj).includes(letter)) {
      countingObj[letter] = 1;
    } else {
      countingObj[letter] += 1;
    }
  }
  return countingObj;
};

console.log(countLetters("lighthouse in the house"));