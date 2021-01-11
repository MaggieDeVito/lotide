const without = function(source, itemsToRemove) {
  
  let newArray = [];
  itemsToRemove = itemsToRemove.toString();
  
  for (let item of source) {
    if (item !== itemsToRemove) {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = without;