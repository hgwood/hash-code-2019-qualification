const _ = require("lodash/fp");
const assert = require("assert");
const debug = require("debug")("read");
const fs = require("fs");
const jolicitron = require("jolicitron");
const byTags = require("./by-tags");

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
    const result = parseAndValidate(textFromInputFile);
    fs.writeFileSync(cachedFile, JSON.stringify(result));
    debug(`written cached input file to ${cachedFile}`);
    return result;
  }
  return require(`./${cachedFile}`);
};

const parse = inputText => {
  const parse = jolicitron((save, n) => [
    save(),
    n("photos", { indices: true }, "orientation", save(), n("tags"))
  ]);
  const { parsedValue, remaining } = parse(inputText);
  assert.equal(remaining.trim(), "");
  debug("end");
  return parsedValue;
};

const enrich = parserOutput => {
  parserOutput.byTags = byTags(parserOutput);
  return parserOutput;
};

const assertValid = _.tap(parserOutput => {});

const parseAndValidate = _.flow(
  parse,
  enrich,
  assertValid,
  _.tap(() => debug("parsing completed"))
);

module.exports.parse = parse;
