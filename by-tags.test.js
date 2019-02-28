/* eslint-env mocha */

const assert = require("assert");
const byTags = require("./by-tags");

describe("byTags", function() {
  it("byTagss", function() {
    assert.deepEqual(
      byTags({
        photos: [
          { index: 0, orientation: "H", tags: ["cat", "beach", "sun"] },
          { index: 1, orientation: "V", tags: ["selfie", "smile"] },
          { index: 2, orientation: "V", tags: ["garden", "selfie"] },
          { index: 3, orientation: "H", tags: ["garden", "cat"] }
        ]
      }),
      {
        cat: [0, 3],
        beach: [0],
        sun: [0],
        selfie: [1, 2],
        smile: [1],
        garden: [2, 3]
      }
    );
  });
});
