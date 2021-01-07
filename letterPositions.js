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

// function that will return all indices in the string
// where the characters are found

console.log(letterPositions("lighthouse in the house"));
