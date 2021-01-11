const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

assertArraysEqual(middle([1, 5, 19, 2, 3, 4]), [19, 2], true);

