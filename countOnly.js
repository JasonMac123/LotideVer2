const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let countingObject = {};
  for (const key in itemsToCount) {
    countingObject[key] = itemsToCount[key] ? 0 : undefined;
  }
  for (const name of allItems) {
    if (Object.keys(countingObject).includes(name) && countingObject[name] !== undefined) {
      countingObject[name] += 1;
    }
  }
  for (const countName of Object.keys(countingObject)) {
    if (countingObject[countName] === 0) {
      countingObject[countName] = undefined;
    }
  }
  return countingObject;
};

