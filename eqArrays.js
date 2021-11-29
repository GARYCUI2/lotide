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

module.exports = eqArrays;