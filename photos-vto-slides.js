const assert = require("assert");
const debug = require("debug")("photosVtoSlides");
const _ = require("lodash");

module.exports = function photosVtoSlides(photos) {
  return _.chunk(photos.map(p => p.index), 2);
};
