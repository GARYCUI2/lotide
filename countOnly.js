

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`"✅✅✅ Assertion Passed:" ${actual} " === " ${expected}`);
  } else {
    console.log(`"🛑🛑🛑 Assertion Failed: ${actual} !== " ${expected}`);
  }

};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let newObj = {};
  for (let item of allItems) {
    if (item in itemsToCount && itemsToCount[item] === true) {
      if (item in newObj) {
        newObj[item] += 1;
      } else {
        newObj[item] = 1;
      }
    }
  }
  return newObj;
};



//test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);