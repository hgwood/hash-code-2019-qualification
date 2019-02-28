/* eslint-env mocha */

const assert = require('assert')
const photosToId = require('./photosToId')

describe('photosToId', function () {
  it('photosToIds', function () {
    assert.deepEqual(
      photosToId(),
      undefined)
  })
})
