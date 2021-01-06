const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for(let i = 0; i < eqArrays.length; i++)
  if(eqArrays[0] === eqArrays[1]) {
    return true;
  } else {
    return false;
  }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);