const pickBy = require('lodash');

// ^\s*at .* \(([^\(\)]+):([0-9]+):([0-9]+)\)

function extractModuleLineAndColumn(stackTrace) {
  var matches = /^\s*at .* \(([^\(\)]+):([0-9]+):([0-9]+)\)/gm.exec(stackTrace);
  if (matches === null) {
    return {};
  }
  return {
    file: matches[1],
    line: parseIntOrUndefined(matches[2]),
    column: parseIntOrUndefined(matches[3]),
  };
}

function parseIntOrUndefined(numberString) {
  const lineNumber = parseInt(numberString);
  if (isNaN(lineNumber)) {
    return undefined;
  }
  return lineNumber;
}

module.exports = { extractModuleLineAndColumn };
