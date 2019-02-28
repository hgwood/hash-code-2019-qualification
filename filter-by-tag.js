const assert = require("assert");
const debug = require("debug")("filterByTag");
const _ = require("lodash");

module.exports = function filterByTag(photos, tag) {
  return _.partition(photos, p => p.tags.includes(tag));
};
