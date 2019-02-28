const assert = require("assert");
const debug = require("debug")("photosVtoSlides");
const _ = require("lodash");

module.exports = function photosVtoSlides(photos, rest) {
  photos = photos.map(p => p.index);
  rest = rest.map(p => p.index);

  let slides = [];

  while (photos.length > 0 && rest.length > 0) {
    slides.push([photos.shift(), rest.shift()]);
  }

  if (photos.length >= 2) {
    slides = slides.concat(_.chunk(photos, 2));
  }

  if (rest.length >= 2) {
    slides = slides.concat(_.chunk(rest, 2));
  }

  return slides;
};
