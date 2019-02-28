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
  let slides = [];

  let photosH = filterH(problem.photos);
  let photosV = filterV(problem.photos);

  while (photosH.length > 0 || photosV.length > 0) {
    let allPhotos = photosH.concat(photosV);
    const tag = findMaxTag(allPhotos);
    [photosH, restH] = filterByTag(photosH, tag);
    [photosV, restV] = filterByTag(photosV, tag);
    let slidesH = photosHtoSlides(photosH);
    [slidesV, restV] = photosVtoSlides(photosV, restV);
    slides = slides.concat(slidesH).concat(slidesV);
    //console.log(photosH.length, photosV.length);
    photosH = restH || [];
    photosV = restV || [];
  }

  return slides;
}

//photosH = sortByTagCount(photosH);
module.exports = solve;
