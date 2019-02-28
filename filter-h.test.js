/* eslint-env mocha */

const assert = require("assert");
const filterH = require("./filterH");

describe("filterH", function() {
  it("filterHs", function() {
    assert.deepEqual(filterH(), undefined);
  });
});
