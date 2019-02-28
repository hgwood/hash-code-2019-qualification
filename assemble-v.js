const assert = require("assert");
const debug = require("debug")("assemble-V");
const _ = require("lodash");

module.exports = function assembleV(photos) {
  sorted = photos.sort((a, b) => {
    return b.tags.length - a.tags.length;
  });

  assembled = [];

  while (sorted.length >= 2) {
    a = sorted.pop();
    b = sorted.shift();
    assembled.push({
      index: a.index + " " + b.index,
      tags: a.tags.concat(b.tags)
    });
  }

  return assembled;
};
