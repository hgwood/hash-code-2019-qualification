const assert = require("assert");
const debug = require("debug")("findMaxTag");
const _ = require("lodash");

module.exports = function findMaxTag(photos) {
  const tags = {};
  photos.map(p => {
    p.tags.map(t => {
      if (!tags[t]) tags[t] = 0;
      tags[t]++;
    });
  });
  const entries = Object.entries(tags);
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
};
