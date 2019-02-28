const assert = require("assert");
const debug = require("debug")("sortByTagCount");
const _ = require("lodash");

module.exports = function sortByTagCount(photos) {
  const sorted = photos.sort((a, b) => {
    const aTags = a.tags.length;
    const bTags = a.tags.length;
    return bTags - aTags;
  });
  return sorted;
};
