const assert = require('chai').assert;
const middle   = require('../middle');

describe("middle", () => {

  it("returns [19, 2] for [1, 5, 19, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 5, 19, 2, 3, 4]), [19, 2]);
  });

  it("returns [19] for [1, 5, 19, 3, 4]", () => {
    assert.deepEqual(middle([1, 5, 19, 3, 4]), [19]);
  });

});