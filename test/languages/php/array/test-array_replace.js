// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_replace = require('/Users/kvz/code/phpjs/src/php/array/array_replace.js')

describe('php.array.array_replace.js', function () {
  it('should pass example 1', function (done) {
    array_replace(["orange", "banana", "apple", "raspberry"], {0 : "pineapple", 4 : "cherry"}, {0:"grape"})
    var expected = {0: 'grape', 1: 'banana', 2: 'apple', 3: 'raspberry', 4: 'cherry'}
    var result = array_replace(["orange", "banana", "apple", "raspberry"], {0 : "pineapple", 4 : "cherry"}, {0:"grape"})
    expect(result).to.deep.equal(expected)
    done()
  })
})