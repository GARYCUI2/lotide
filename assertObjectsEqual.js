const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length - 1; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } else {
      return true;
    }
  }

};

const eqObjects = function (object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }

  for (let key1 of array1) {
    if (!array2.includes(key1)) {
      return false;
    }
    if (Array.isArray(object1[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
};



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add 


  let flag = eqObjects(actual, expected);

  if (flag === true) {
    console.log(`"✅✅✅ Assertion Passed:" ${inspect(actual)} " === " ${inspect(expected)}`);
  } else {
    console.log(`"🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== " ${inspect(expected)}`);
  }
};

//test code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);