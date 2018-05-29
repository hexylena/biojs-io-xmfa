# biojs-io-xmfa

[![NPM version](http://img.shields.io/npm/v/biojs-io-xmfa.svg)](https://www.npmjs.org/package/biojs-io-xmfa) 
[![Build Status](https://secure.travis-ci.org/erasche/biojs-io-xmfa.png?branch=master)](http://travis-ci.org/erasche/biojs-io-xmfa) 

> Parse Mauve/progressiveMauve XMFA files

## Getting Started
Install the module with: `npm install biojs-io-xmfa`

```javascript
var parser  = require(‘biojs-io-xmfa’);
```

### `read(url)`

Parses a URL and calls your `parse` method with the returned body.

How to use this method

```javascript
parser.read("https://cdn.rawgit.com/erasche/biojs-io-xmfa/master/test/simple.xmfa", function(err, model) {
  // model is the parsed url
});
```

If callback is undefined, `read` returns a promise.

```
var p = parser.read("https://cdn.rawgit.com/erasche/biojs-io-xmfa/master/test/simple.xmfa");
// ...
p.then(function(model) {
  // model is the parsed url
}, function(err){
  console.error("err happened during downloading", err);
});
```

### `parse(string)`

```javascript

var xmfa_file = fs.readFileSync("/path/to/my.xmfa");
var lcbs = parser.parse(xmfa_file);
```

### Data Format

The data extracted from the XMFA file is available as an Array of LCBs. Each LCB is also an array containing all of the alignments from that LCB.

Example:

```javascript
[ # This is the XMFA file
  [ # This is an LCB
    {
      start: 1,
      end: 5000,
      strand: '+',
      lcb_idx: 1,
      seq: 'ACTG...'
    },
    {
      start: 1000,
      end: 6000,
      strand: '+',
      lcb_idx: 2,
      seq: '-CGG...'
    },
  ]
]
```

Currently only supports reading, and not writing.

## Contributing

Please submit all issues and pull requests to the [erasche/biojs-io-xmfa](http://github.com/erasche/biojs-io-xmfa) repository!

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/erasche/biojs-io-xmfa/issues).

## License
This software is licensed under the Apache 2 license, quoted below.

Copyright (c) 2015, Helena Rasche

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
