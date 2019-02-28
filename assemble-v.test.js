/* eslint-env mocha */

const assert = require('assert')
const assemble-V = require('./assemble-V')

describe('assemble-V', function () {
  it('assemble-Vs', function () {
    assert.deepEqual(
      assemble-V(),
      undefined)
  })
})
