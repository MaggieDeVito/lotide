const eqArrays = function(array1, array2) { // has to have parameters otherwise its undefined
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) { // loops through eqArrays parameters (not sure if needed)
    if (array1[i] !== array2[i]) { // checking if array at index 0 is equal to index at 1
      return false; // if they arent equal, return this
    }
  } return true;
};

module.exports = eqArrays;