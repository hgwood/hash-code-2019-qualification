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
        { orientation: "H", tags: ["cat", "beach", "sun"] },
        { orientation: "V", tags: ["selfie", "smile"] },
        { orientation: "V", tags: ["garden", "selfie"] },
        { orientation: "H", tags: ["garden", "cat"] }
      ]
    });
  });
});
