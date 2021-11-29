// TEST/ASSERTION FUNCTIONS
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function (array) {
  let newArray = [];
  if (array.length < 2) {
    return newArray;
  }

  let long = array.length;
  if (long % 2 !== 0) {
    newArray.push(array[Math.floor(long / 2)]);
  } else {
    newArray.push(array[(long / 2) - 1]);
    newArray.push(array[long / 2]);
  }
  return newArray;
};
module.exports = middle;





