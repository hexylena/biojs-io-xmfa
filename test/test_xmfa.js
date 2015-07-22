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


var simple = fs.readFileSync(__dirname + "/simple.xmfa");
var emptyl = fs.readFileSync(__dirname + "/empty-lcb-seq.xmfa");

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

    var emptyl_ref = [
      [
        {
          start: 301,
          end: 420,
          strand: '+',
          lcb_idx: 1
        },
        {
          start: 540,
          end: 660,
          strand: '+',
          lcb_idx: 3
        },
        {
          start: 540,
          end: 660,
          strand: '+',
          lcb_idx: 4
        }
      ]
    ];

    var parsed_simple = xmfa.parse(simple.toString());
    var parsed_emptyl = xmfa.parse(emptyl.toString());

    // Remove sequence data
    for(var lcb_idx in parsed_simple){
      for(var lcb_seq_idx in parsed_simple[lcb_idx]){
        delete parsed_simple[lcb_idx][lcb_seq_idx]['seq'];
      }
    }

    for(var lcb_idx in parsed_emptyl){
      for(var lcb_seq_idx in parsed_emptyl[lcb_idx]){
        delete parsed_emptyl[lcb_idx][lcb_seq_idx]['seq'];
      }
    }

    // Run comparison
    it('correct data: simple', function(){
        assert.deepEqual(parsed_simple, reference);
    });

    it('correct data: lcb with one empty sequence', function(){
        assert.deepEqual(parsed_emptyl, emptyl_ref);
    });
  });
});
