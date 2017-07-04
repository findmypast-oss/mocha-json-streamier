const assert = require('assert');
const { extractModuleLineAndColumn } = require('../lib/parse-stack-trace');

describe('Works with a stack trace', function() {
  it('should return a module name and line number from a stack trace.', function() {
    const stackTrace = `
    Error: Something unexpected has occurred.
        at main (c:/Users/Me/Documents/MyApp/app.js:9:15)
        at Object. (c:/Users/Me/Documents/MyApp/app.js:17:1)
        at Module._compile (module.js:460:26)
        at Object.Module._extensions..js (module.js:478:10)
        at Module.load (module.js:355:32)
        at Function.Module._load (module.js:310:12)
        at Function.Module.runMain (module.js:501:10)
        at startup (node.js:129:16)
        at node.js:814:3
        at Context.<undefined> (c:/Users/Me/Documents/MyApp/app.js:9:15)`;
    assert.deepEqual(extractModuleLineAndColumn(stackTrace), {
      file: 'c:/Users/Me/Documents/MyApp/app.js',
      line: 9,
      column: 15,
    });
  });
  it('should return a module name and line number from a stack trace.', function() {
    const stackTrace =
      'AssertionError: Package.json includes dependencies  which are not\n      imported in the code. If you have removed their usage, you\n      should also remove them from package.json by running:\n        yarn remove .\n    at Context.<anonymous> (test/support/depcheck.spec.js:53:10)';
    assert.deepEqual(extractModuleLineAndColumn(stackTrace), {
      file: 'test/support/depcheck.spec.js',
      line: 53,
      column: 10,
    });
  });

  it('should return an empty object if there is no stacktrace.', function() {
    const stackTrace = `
    Error: Something unexpected has occurred.
        at node.js:814:3`;
    assert.deepEqual(extractModuleLineAndColumn(stackTrace), {});
  });
});
