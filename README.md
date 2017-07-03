# mocha-json-streamier
Improvement to standard mocha json stream reporter to expose more data.

## Setup

```npm install mocha-json-streamier-reporter```

Then call with...

```mocha --reporter mocha-json-streamier-reporter```

## Sample output
```
[
  "pass",
  {
    "title": "accepts an array of file paths",
    "fullTitle": "Inspector constructor accepts an array of file paths",
    "duration": 1,
    "currentRetry": 0
  }
]
[
  "fail",
  {
    "title": "assigns a default threshold of 30",
    "fullTitle": "Inspector constructor assigns a default threshold of 30",
    "duration": 2,
    "currentRetry": 0,
    "err": {
      "stack": "Error: expected 30 to equal 31\n    at Assertion.assert (node_modules/expect.js/index.js:96:13)\n    at Assertion.be.Assertion.equal (node_modules/expect.js/index.js:216:10)\n    at Assertion.(anonymous function) [as be] (node_modules/expect.js/index.js:69:24)\n    at Context.<anonymous> (spec/inspectorSpec.js:30:39)",
      "message": "expected 30 to equal 31",
```
File, Line and Column are added from the standard reporter...
```
      "file": "spec/inspectorSpec.js",
      "line": 30,
      "column": 39
    },
    "stack": "Error: expected 30 to equal 31\n    at Assertion.assert (node_modules/expect.js/index.js:96:13)\n    at Assertion.be.Assertion.equal (node_modules/expect.js/index.js:216:10)\n    at Assertion.(anonymous function) [as be] (node_modules/expect.js/index.js:69:24)\n    at Context.<anonymous> (spec/inspectorSpec.js:30:39)"
  }
]
```
