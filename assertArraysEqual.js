const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(array1, array2, expected) {
  const actual = eqArrays(array1, array2);
  if (actual === expected) { // checking if eqArrays is true
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`); //if true console log this
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`); //else console log this
  }
};
