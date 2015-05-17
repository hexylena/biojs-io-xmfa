/*
 * biojs-io-xmfa
 * https://github.com/erasche/biojs-io-xmfa
 *
 * Copyright (c) 2015 Eric Rasche
 * Licensed under the Apache 2 license.
 */


// @see http://chaijs.com/api/assert/
var assert = require("assert");
var fs = require("fs");

// requires your main app (specified in index.js)
var xmfa = require('../');


var body = fs.readFileSync(__dirname + "/simple.xmfa");
describe('biojs-io-xmfa module', function(){
  describe('#parse()', function(){
    var reference = [
      [ { start: 1,
          end: 5670,
          strand: '+',
          lcb_idx: 1 },
        { start: 1,
          end: 5670,
          strand: '+',
          lcb_idx: 2 } ],
      [ { start: 5671,
          end: 9940,
          strand: '-',
          lcb_idx: 1 },
        { start: 7141,
          end: 11410,
          strand: '+',
          lcb_idx: 2 } ],
      [ { start: 9941,
          end: 14910,
          strand: '+',
          lcb_idx: 1 } ],
      [ { start: 5671,
          end: 7140,
          strand: '+',
          lcb_idx: 2 } ],
      [ { start: 11411,
          end: 12880,
          strand: '+',
          lcb_idx: 2 } ] ];
    var parsed = xmfa.parse(body.toString());

    // Remove sequence data
    for(var lcb_idx in parsed){
      for(var lcb_seq_idx in parsed[lcb_idx]){
        delete parsed[lcb_idx][lcb_seq_idx]['seq'];
      }
    }

    // Run comparison
    it('correct data', function(){
        assert.deepEqual(parsed, reference);
    });
  });
});
