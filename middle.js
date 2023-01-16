const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;