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

const without = function (sourceArray, itemsToRemoveArray) {
  const newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    let ifRemove = false;
    for (let j = 0; j < itemsToRemoveArray.length; j++) {
      if (sourceArray[i] === itemsToRemoveArray[j]) {
        ifRemove = true;
      }
    }

    if (!ifRemove) {
      newArray.push(sourceArray[i]);
    }
  }

  console.log(newArray);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
