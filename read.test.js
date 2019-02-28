/* eslint-env mocha */

const assert = require("assert");
const { parse } = require("./read");

describe("parse", function() {
  it("parses correctly", function() {
    const textFromInputFile = `
    4
H 3 cat beach sun
V 2 selfie smile
V 2 garden selfie
H 2 garden cat
    `;
    assert.deepEqual(parse(textFromInputFile), {
      photos: [
        { index: 0, orientation: "H", tags: ["cat", "beach", "sun"] },
        { index: 1, orientation: "V", tags: ["selfie", "smile"] },
        { index: 2, orientation: "V", tags: ["garden", "selfie"] },
        { index: 3, orientation: "H", tags: ["garden", "cat"] }
      ]
    });
  });
});
