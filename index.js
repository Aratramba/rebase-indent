'use strict';
/* global module, require */

var detectIndent = require('detect-indent');


/**
 * Rebase indentation
 */

function rebase(lines, newBase, stopAtLowerIndent) {

  if (typeof lines === 'string') {
    lines = lines.split('\n');
  }

  lines = lines.slice(0);

  if (typeof newBase !== 'number') {
    newBase = 0;
  }

  if (newBase < 0) {
    newBase = 0;
  }

  if (!lines.length) {
    return lines;
  }

  var baseIndent = detectIndent(lines[0]).indent.length;

  if(baseIndent === newBase){
    return lines;
  }

  var i = 0;
  var l = lines.length;
  var lineIndent;

  for(; i<l; ++i){
    if (lines[i].trim() === '') {
      continue;
    }

    lineIndent = detectIndent(lines[i]).indent.length;

    if (lineIndent >= baseIndent) {

      // trim line
      lines[i] = lines[i].substring(baseIndent);

      // add new base
      lines[i] = (new Array(newBase + 1)).join(' ') + lines[i];
    }

    if (stopAtLowerIndent) {
      if (lineIndent < baseIndent) {
        break;
      }
    }
  }
  return lines;
}

module.exports = rebase;