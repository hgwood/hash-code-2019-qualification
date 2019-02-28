/* eslint-env mocha */

const assert = require("assert");
const sortByTagCount = require("./sortByTagCount");

describe("sortByTagCount", function() {
  it("sortByTagCounts", function() {
    assert.deepEqual(sortByTagCount(), undefined);
  });
});
