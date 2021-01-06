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

//the middle function should return an array with only the
//middle element(s) of the provided array.
//This means the length of the returned elements could vary


const middle = function(array) {

  let mid = Math.floor(array.length / 2);

  if (array.length <= 2) { // checks array length
    return []; // returns empty array
  } else if (array.length % 2 !== 0) { // checks array length and checks that array is odd
    return [array[mid]];
  } else { // checks array length and checks that array is even
    return [array[mid - 1], array[mid]];
  }
};

console.log(middle([1, 5, 19, 2, 3, 4]));