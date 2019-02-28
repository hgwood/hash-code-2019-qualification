/* eslint-env mocha */

const assert = require("assert");
const filterByTag = require("./filterByTag");

describe("filterByTag", function() {
  it("filterByTags", function() {
    assert.deepEqual(filterByTag(), undefined);
  });
});
