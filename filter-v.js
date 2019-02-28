const assert = require("assert");
const debug = require("debug")("filterV");
const _ = require("lodash");

module.exports = function filterV(photos) {
  return photos.filter(p => p.orientation == "V");
};
