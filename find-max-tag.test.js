/* eslint-env mocha */

const assert = require("assert");
const findMaxTag = require("./findMaxTag");

describe("findMaxTag", function() {
  it("findMaxTags", function() {
    assert.deepEqual(findMaxTag(), undefined);
  });
});
