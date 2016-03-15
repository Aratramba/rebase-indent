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

  for(; i<l; ++i){
    if (detectIndent(lines[i]).indent.length >= indentLevel) {

      // trim line
      lines[i] = lines[i].substring(indentLevel);

      // add new base
      lines[i] = (new Array(base + 1)).join(' ') + lines[i];
    }
  }
  return lines;
}

module.exports = rebase;