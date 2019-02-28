const assert = require("assert");
const debug = require("debug")("findGoodRelatedPhoto");
const _ = require("lodash");

module.exports = function findGoodRelatedPhoto(last, photos, count) {
  let found = photos.find(p => {
    let intersect = _.intersection(last.tags, p.tags).length;
    let diffA = last.tags.length - intersect;
    let diffB = p.tags.length - intersect;

    return Math.min(intersect, diffA, diffB) >= count;
  });

  //console.log(found);

  if (!found) found = photos.pop();
  else {
    photos.splice(photos.indexOf(found), 1);
  }
  return found;
};
