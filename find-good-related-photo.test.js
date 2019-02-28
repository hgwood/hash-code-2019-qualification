/* eslint-env mocha */

const assert = require("assert");
const findGoodRelatedPhoto = require("./findGoodRelatedPhoto");

describe("findGoodRelatedPhoto", function() {
  it("findGoodRelatedPhotos", function() {
    assert.deepEqual(findGoodRelatedPhoto(), undefined);
  });
});
