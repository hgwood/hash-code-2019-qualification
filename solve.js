const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

const filterByTag = require("./filter-by-tag");
const filterH = require("./filter-h");
const photosToId = require("./photos-to-id");

function solve(problem, file) {
  let photosH = filterH(problem.photos);
  const tag = photosH[0].tags[0];
  photosH = filterByTag(photosH, tag);
  return photosToId(photosH).map(p => [p]);
}

module.exports = solve;
