const index = require('./index');
const isObject = function(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object;
};

const eqObjects = function(object1, object2) {
  for (const key in object1) {
    if (isObject(object1[key]) && isObject(object2[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!index.eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};
