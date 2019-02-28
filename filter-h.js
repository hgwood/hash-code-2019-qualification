const assert = require("assert");
const debug = require("debug")("filterH");
const _ = require("lodash");

module.exports = function filterH(photos) {
  return photos.filter(p => p.orientation == "H");
};
