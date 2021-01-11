const letterPositions = function(sentance) {
  let results = {};

  for (let i = 0; i < sentance.length; i++) {
    const letter = sentance[i];
    if (sentance[i] !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
