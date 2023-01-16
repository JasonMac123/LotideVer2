const flatten = function(array) {
  let newArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      newArray = newArray.concat(flatten(element));
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};
