
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


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`"✅✅✅ Assertion Passed:" ${actual} " === " ${expected}`);
  } else {
    console.log(`"🛑🛑🛑 Assertion Failed: ${actual} !== " ${expected}`);
  }

};



//new code

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  const senArray = sentence.split('');
  console.log(senArray);
  for (let i = 0; i < senArray.length; i++) {
    if (senArray[i] === " ") {
      continue;
    }
    if (!(senArray[i] in results)) {
      results[senArray[i]] = [];
      results[senArray[i]].push(i);
    } else {
      results[senArray[i]].push(i);
    }
  }


  return results;
};


//test code
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);