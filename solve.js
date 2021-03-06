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
const findRelatedPhoto = require("./find-related-photo");
const findGoodRelatedPhoto = require("./find-good-related-photo");
const findBestRelatedPhoto = require("./find-best-related-photo");
const assembleV = require("./assemble-v");

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
  if (file.startsWith("b")) {
    let [photos, rest] = _.partition(problem.photos, p => p.tags.length >= 2);

    let selected = [photos.shift()];

    while (photos.length > 0) {
      if (photos.length % 100 == 0) console.log(photos.length);
      let last = selected[selected.length - 1];
      let next = findRelatedPhoto(last, photos);
      selected.push(next);
    }

    selectedSlides = photosHtoSlides(selected);
    restSlides = photosHtoSlides(rest);

    return selectedSlides.concat(restSlides);
  }

  if (file.startsWith("c")) {
    let photosV = filterV(problem.photos);
    let photosH = filterH(problem.photos);
    assembledV = assembleV(photosV);

    let photos = photosH.concat(assembledV);
    let selected = [photos.pop()];

    while (photos.length > 0) {
      if (photos.length % 100 == 0) console.log(photos.length);
      let last = selected[selected.length - 1];
      let next = findBestRelatedPhoto(last, photos);
      photos.splice(photos.indexOf(next), 1);
      selected.push(next);
    }

    selectedSlides = photosHtoSlides(selected);

    return selectedSlides;
  }

  if (file.startsWith("d")) {
    let photosV = filterV(problem.photos);
    let photosH = filterH(problem.photos);
    assembledV = assembleV(photosV);

    photos = photosH.concat(assembledV);
    let selected = [photos.pop()];

    while (photos.length > 0) {
      console.log(photos.length);
      let last = selected[selected.length - 1];
      let next = findGoodRelatedPhoto(last, photos, 4);
      photos.splice(photos.indexOf(next), 1);
      selected.push(next);
    }

    selectedSlides = photosHtoSlides(selected);

    return selectedSlides;
  }

  if (file.startsWith("e")) {
    //let [photos, rest] = _.partition(problem.photos, p => p.tags.length >= 2);

    let photos = problem.photos;
    photos = assembleV(photos);

    let selected = [photos.shift()];

    while (photos.length > 0) {
      if (photos.length % 100 == 0) console.log(photos.length);
      let last = selected[selected.length - 1];
      let next = findGoodRelatedPhoto(last, photos, 9);
      selected.push(next);
    }

    selectedSlides = photosHtoSlides(selected);

    return selectedSlides;
  }

  if (file.startsWith("a")) {
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
      photosH = restH || [];
      photosV = restV || [];
    }

    return slides;
  }
}

//photosH = sortByTagCount(photosH);
module.exports = solve;
