// TEST/ASSERTION FUNCTIONS
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`"✅✅✅ Assertion Passed:" ${actual} " === " ${expected}`);
  } else {
    console.log(`"🛑🛑🛑 Assertion Failed: ${actual} !== " ${expected}`);
  }

};

const assertArraysEqual = function (array1, array2) {
  let flag = true;
  if (array1.length !== array2.length) {
    flag = false;

  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      flag = false;
    } else {
      flag = true;
    }
  }

  if (flag === true) {
    console.log(`"✅✅✅ Assertion Passed:" ${array1} " === " ${array2}`);
  } else {
    console.log(`"🛑🛑🛑 Assertion Failed: ${array1} !== " ${array2}`);
  }
};

// ACTUAL FUNCTION
const middle = function (array) {
  let newArray = [];
  if (array.length < 2) {
    return newArray;
  }

  let long = array.length;
  if (long % 2 !== 0) {
    newArray.push(array[long / 2]);
  } else {
    newArray.push(array[(long / 2) - 1]);
    newArray.push(array[long / 2]);
  }
  console.log(newArray);
};

// TEST CODE

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]


