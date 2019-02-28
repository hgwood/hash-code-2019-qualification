const assert = require("assert");
const debug = require("debug")("findSelectedPhoto");
const _ = require("lodash");

module.exports = function findRelatedPhoto(last, photos, count = 1) {
  let found = photos.find(
    p => _.intersection(last.tags, p.tags).length >= count
  );

  //console.log(found);

  if (!found) found = photos.pop();
  else {
    photos.splice(photos.indexOf(found), 1);
  }
  return found;
};
