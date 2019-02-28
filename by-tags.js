const assert = require("assert");
const debug = require("debug")("byTags");
const _ = require("lodash");

module.exports = function byTags(problem) {
  return problem.photos.reduce((allTags, photo) => {
    photo.tags.forEach(tag => {
      allTags[tag] = allTags[tag] || [];
      allTags[tag].push(photo.index);
    });
    return allTags;
  }, {});
};
