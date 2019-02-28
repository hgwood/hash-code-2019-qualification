/* eslint-env mocha */

const assert = require("assert");
const findSelectedPhoto = require("./findSelectedPhoto");

describe("findSelectedPhoto", function() {
  it("findSelectedPhotos", function() {
    assert.deepEqual(findSelectedPhoto(), undefined);
  });
});
