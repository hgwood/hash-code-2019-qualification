const assert = require("assert");
const debug = require("debug")("photosToId");
const _ = require("lodash");

module.exports = function photosToId(photos) {
  return photos.map(p => p.index);
};
