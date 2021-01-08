const findKey = function(object, solution) {
  let key;
  for (let i in object) {
    if (solution(object[i])) {
      key = i;
      break;
    }
  } return key;
};