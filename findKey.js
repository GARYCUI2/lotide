//import code
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`"✅✅✅ Assertion Passed:" ${actual} " === " ${expected}`);
  } else {
    console.log(`"🛑🛑🛑 Assertion Failed: ${actual} !== " ${expected}`);
  }

};

//find key code

const findKey = function (allItems, callBack) {
  const allKeys = Object.keys(allItems);
  for (let i of allKeys) {
    if (callBack(allItems[i])) {
      return i;
    }
  }
};
//test code

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");
