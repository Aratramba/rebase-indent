'use strict';
/* global module, require */

var detectIndent = require('detect-indent');


/**
 * Rebase indentation
 */

function rebase(lines) {
  lines = lines.slice(0);

  if (!lines.length) {
    return lines;
  }

  var indentLevel = detectIndent(lines[0]).indent.length;

  if(indentLevel === 0){
    return lines;
  }

  var i = 0;
  var l = lines.length;

  for(; i<l; ++i){
    if (detectIndent(lines[i]).indent.length >= indentLevel) {
      lines[i] = lines[i].substring(indentLevel);
    }
  }
  return lines;
}

module.exports = rebase;