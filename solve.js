const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

const filterByTag = require("./filter-by-tag");
const filterH = require("./filter-h");

function solve(problem, file) {
  let photosH = filterH(problem.photos);
  const tag = photosH.tags[0];
  photosH = filterByTag(photosH, tag);
  return photosH;
}

module.exports = solve;
