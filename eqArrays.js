const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) { // has to have parameters otherwise its undefined
  for(let i = 0; i < array1.length; i++) { // loops through eqArrays parameters (not sure if needed)
  if(array1[i] !== array2[i]) { // checking if array at index 0 is equal to index at 1
    return false; // if they are equal, return this
  } 
} return true 
}
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);