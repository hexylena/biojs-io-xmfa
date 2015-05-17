/*
 * biojs-io-xmfa
 * https://github.com/erasche/biojs-io-xmfa
 *
 * Copyright (c) 2015 Eric Rasche
 * Licensed under the Apache 2 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var xmfa = require('../');

describe('biojs-io-xmfa module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(xmfa.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      xmfa.hello('biojs').should.equal("hello biojs");
    });
  });
});
