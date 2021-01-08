const takeUntil = function (array, predicate) {
  let newArray = [];
  for (let item in array) {
    if (predicate(array[item])) {
      break;
    } else {
      newArray.push(array[item]);
    }
  }
  return newArray;
};

