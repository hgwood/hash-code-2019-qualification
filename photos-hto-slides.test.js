/* eslint-env mocha */

const assert = require("assert");
const photosHtoSlides = require("./photosHtoSlides");

describe("photosHtoSlides", function() {
  it("photosHtoSlidess", function() {
    assert.deepEqual(photosHtoSlides(), undefined);
  });
});
