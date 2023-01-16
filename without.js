const without = function(array, removeItems) {
  const filtered = array.filter(element => removeItems.includes(element) === false);
  return filtered;
};

