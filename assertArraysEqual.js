
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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

