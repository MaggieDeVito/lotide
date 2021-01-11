const tail = function(data) {
  return data.slice(1);
};

module.exports = tail;

console.log(tail([1, 2, 3]));
