'use strict';
/* global module, require */

var detectIndent = require('detect-indent');


/**
 * Rebase indentation
 */

function rebase(lines, newBase) {

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

  var blockBase = baseIndent;

  for(; i<l; ++i){
    if (lines[i].trim() === '') {
      continue;
    }

    lineIndent = detectIndent(lines[i]).indent.length;

    if (lineIndent <= blockBase) {
      blockBase = lineIndent;
    }

    lines[i] = lines[i].substring(blockBase);
    lines[i] = (new Array(newBase + 1)).join(' ') + lines[i];
  }
  return lines;
}

module.exports = rebase;