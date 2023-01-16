const assertEqual = require('./assertEqual');

const tail = function(array) {
  const tailArray = array[array.length - 1];
  return tailArray;
};

module.exports = tail;