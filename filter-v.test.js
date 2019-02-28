/* eslint-env mocha */

const assert = require("assert");
const filterV = require("./filterV");

describe("filterV", function() {
  it("filterVs", function() {
    assert.deepEqual(filterV(), undefined);
  });
});
