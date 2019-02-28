const assert = require("assert");
const debug = require("debug")("findBestRelatedPhoto");
const _ = require("lodash");

module.exports = function findBestRelatedPhoto(last, photos) {
  photos.map(p => {
    let intersect = _.intersection(last.tags, p.tags).length;
    let diffA = last.tags.length - intersect;
    let diffB = p.tags.length - intersect;

    p.points = Math.min(intersect, diffA, diffB);
  });

  sorted = photos.sort((a, b) => b.points - a.points);

  return sorted[0];
};
