const assert = require("assert");
const debug = require("debug")("photosVtoSlides");
const _ = require("lodash");

module.exports = function photosVtoSlides(photos) {
  const chunks = _.chunk(photos.map(p => p.index), 2);
  if (chunks.length > 0 && chunks[chunks.length - 1].length == 1) chunks.pop();
  return chunks;
};
