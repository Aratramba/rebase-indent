'use strict';
/* global module, require */

var detectIndent = require('detect-indent');


/**
 * Rebase indentation
 */

function rebase(lines, base) {
  lines = lines.slice(0);

  if (typeof base !== 'number') {
    base = 0;
  }

  if (base < 0) {
    base = 0;
  }

  if (!lines.length) {
    return lines;
  }

  var indentLevel = detectIndent(lines[0]).indent.length;

  if(indentLevel === base){
    return lines;
  }

  var i = 0;
  var l = lines.length;
  var lineIndent;
  var hasExceeded = false;

  for(; i<l; ++i){
    lineIndent = detectIndent(lines[i]).indent.length;
    if (lineIndent >= indentLevel) {

      // trim line
      lines[i] = lines[i].substring(indentLevel);

      // add new base
      lines[i] = (new Array(base + 1)).join(' ') + lines[i];
    }

    // if indent has passed base indent, set flag
    if(lineIndent > indentLevel) {
      hasExceeded = true;
    }

    // if indent was exceeded and current level is less than base, quit
    if (lineIndent < indentLevel && hasExceeded) {
      break;
    }
  }
  return lines;
}

module.exports = rebase;