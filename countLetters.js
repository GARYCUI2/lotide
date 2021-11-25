const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`"✅✅✅ Assertion Passed:" ${actual} " === " ${expected}`);
  } else {
    console.log(`"🛑🛑🛑 Assertion Failed: ${actual} !== " ${expected}`);
  }

};

const countLetters = function (str) {
  const strArray = str.split('');
  const result = {};
  for (let char of strArray) {
    if (!(char in result)) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }

  }
  console.log(result);

};


countLetters('lhl');