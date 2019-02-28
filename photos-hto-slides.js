const assert = require("assert");
const debug = require("debug")("photosHtoSlides");
const _ = require("lodash");

module.exports = function photosHtoSlides(photos) {
  return photos.map(p => [p.index]);
};
