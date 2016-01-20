'use strict';

import assert from 'assert'
import should from 'should'

let plugin    = require('./lib/index'),
    Transform = require('readable-stream/transform')

describe('gulp-ngTemplateUrl', () => {

  it('Should not be null or undefined', () => {
    plugin.should.not.equal(undefined)
    plugin.should.not.equal(null)
  })

  it('It\'s return should not be null or undefined', () => {
    plugin().should.not.equal(undefined)
    plugin().should.not.equal(null)
  })
})
