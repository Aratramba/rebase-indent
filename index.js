'use strict';
/* global module */

var WHITESPACE_REGEX = /^\s*/g;

/**
 * Get indent level of line
 */

function getIndentLevel(line){
  return line.match(WHITESPACE_REGEX)[0].length;
}


/**
 * Rebase indentation
 */

function rebase(lines) {
  lines = lines.slice(0);

  if (!lines.length) {
    return lines;
  }

  var indentLevel = getIndentLevel(lines[0]);

  if(indentLevel === 0){
    return lines;
  }

  var i = 0;
  var l = lines.length;

  for(; i<l; ++i){
    if (getIndentLevel(lines[i]) >= indentLevel) {
      lines[i] = lines[i].substring(indentLevel);
    }
  }
  return lines;
}

module.exports = rebase;