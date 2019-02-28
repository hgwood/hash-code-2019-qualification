/* eslint-env mocha */

const assert = require("assert");
const photosVtoSlides = require("./photosVtoSlides");

describe("photosVtoSlides", function() {
  it("photosVtoSlidess", function() {
    assert.deepEqual(photosVtoSlides(), undefined);
  });
});
