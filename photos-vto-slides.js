const assert = require("assert");
const debug = require("debug")("photosVtoSlides");
const _ = require("lodash");

module.exports = function photosVtoSlides(photos, rest) {
  let slides = [];

  while (photos.length > 0 && rest.length > 0) {
    slides.push([photos.shift(), rest.shift()]);
  }

  if (photos.length >= 2) {
    slides = slides.concat(_.chunk(photos));
  }

  if (rest.length >= 2) {
    slides = slides.concat(_.chunk(rest));
  }

  return slides;
};
