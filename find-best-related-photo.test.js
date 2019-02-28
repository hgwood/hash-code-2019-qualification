/* eslint-env mocha */

const assert = require("assert");
const findBestRelatedPhoto = require("./findBestRelatedPhoto");

describe("findBestRelatedPhoto", function() {
  it("findBestRelatedPhotos", function() {
    assert.deepEqual(findBestRelatedPhoto(), undefined);
  });
});
