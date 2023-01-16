const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqualArrays = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(string) {
  const noSpaces = string.split(' ').join('');
  let positionTracker = {};
  for (let i = 0; i < noSpaces.length; i++) {
    if (!Object.keys(positionTracker).includes(noSpaces[i])) {
      positionTracker[noSpaces[i]] = [i];
    } else {
      positionTracker[[noSpaces[i]]].push(i);
    }
  }
  return positionTracker;
};

