const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2, expected) {
  const actual = eqArrays(array1, array2);
  if (actual === expected) { // checking if eqArrays is true
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`); //if true console log this
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`); //else console log this
  }
};

module.exports = assertArraysEqual;
