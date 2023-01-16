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

const middle = function(array) {
  let newArray = [];
  if (array.length < 3) {
    return newArray;
  }
  const midPoint = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return newArray = array.slice(midPoint, midPoint + 2);
  }
  return newArray = array[midPoint];
};

