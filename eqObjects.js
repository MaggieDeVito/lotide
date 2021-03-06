const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let value in object1) {
    if ((object1[value]) !== (object2[value])) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;