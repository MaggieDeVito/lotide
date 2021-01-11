const findKeyByValue = function(object, value) {
  let key;
  for (let i in object) {
    if (object[i] === value) {
      key = i;
    }
  }
  return key;
};

module.exports = findKeyByValue;