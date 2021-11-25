//import code 
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



//map.js
const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//test code
// const results1 = map(words, word => word[0]);
// console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']); // => true
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 'z']); // => false
