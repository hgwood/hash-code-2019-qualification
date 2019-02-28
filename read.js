const _ = require("lodash/fp");
const assert = require("assert");
const debug = require("debug")("read");
const fs = require("fs");
const jolicitron = require("jolicitron");

module.exports = function read(filePath) {
  const cachedFile = `${filePath.split(".")[0]}.in.json`;
  try {
    fs.accessSync(cachedFile);
    debug(`using cached ${cachedFile}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      debug(
        `not using cached input file because it does not exist at: ${cachedFile}`
      );
    } else {
      debug(`not using cached input file because:`, err);
    }
    const textFromInputFile = fs.readFileSync(filePath, "utf8");
    debug(`read ${textFromInputFile.length} chars from ${filePath}`);
    const result = module.exports.parse(textFromInputFile);
    fs.writeFileSync(cachedFile, JSON.stringify(result));
    debug(`written cached input file to ${cachedFile}`);
    return result;
  }
  return require(`./${cachedFile}`);
};

const parse = inputText => {
  const parse = jolicitron((save, n) => [
    save(),
    n("photos", "orientation", save(), n("tags"))
  ]);
  const { parsedValue, remaining } = parse(inputText);
  assert.equal(remaining.trim(), "");
  debug("end");
  return parsedValue;
};

const assertValid = _.tap(parserOutput => {});

const parseAndValidate = _.flow(
  parse,
  assertValid,
  _.tap(() => debug("parsing completed"))
);

module.exports.parse = parse;
