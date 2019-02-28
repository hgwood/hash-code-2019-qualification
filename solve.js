const debug = require("debug")("solve");
const _ = require("lodash");
const gridUtils = require("./grid-utils");

const filterH = require("./filter-h");
const filterV = require("./filter-v");
const filterByTag = require("./filter-by-tag");
const findMaxTag = require("./find-max-tag");
const sortByTagCount = require("./sort-by-tag-count");
const photosHtoSlides = require("./photos-hto-slides");
const photosVtoSlides = require("./photos-vto-slides");

/**
 * @typedef {object} Photo
 * @property {number} index
 * @property {"H" | "V"} orientation
 * @property {Array<String>} tags
 *
 * @typedef {object} PhotoCollection
 * @property {Array<Photo>} photos
 *
 * @typedef {Array<[number] | [number, number]>} Slideshow
 */

/**
 *
 * @param {PhotoCollection} problem
 * @param {string} file
 * @returns {Slideshow}
 */
function solve(problem, file) {
  let photosH = filterH(problem.photos);
  let photosV = filterV(problem.photos);
  const tag = findMaxTag(problem.photos);
  [photosH, restH] = filterByTag(photosH, tag);
  [photosV, restV] = filterByTag(photosV, tag);
  //photosH = sortByTagCount(photosH);
  let slidesH = photosHtoSlides(photosH);
  let slidesV = photosVtoSlides(photosV);
  let slidesRestH = photosHtoSlides(restH);
  let slidesRestV = photosVtoSlides(restV);
  return slidesH
    .concat(slidesV)
    .concat(slidesRestH)
    .concat(slidesRestV);
}

module.exports = solve;
