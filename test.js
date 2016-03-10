'use strict';
/* global require */

var test = require('tape');
var rebase = require('./index');


test('rebase', function(assert){
  var actual = rebase(['  div','    div','      div','        p foo']);
  var expected = ['div','  div','    div','      p foo'];

  assert.deepEqual(actual, expected, 'rebase should reset indents to its base level');
  assert.end();
});

test('rebase ignore', function(assert){
  var actual = rebase(['div','  div','    div','      p foo']);
  var expected = ['div','  div','    div','      p foo'];

  assert.deepEqual(actual, expected, 'rebase should not reset anything');
  assert.end();
});

test('rebase empty', function(assert){
  var actual = rebase([]);
  var expected = [];

  assert.deepEqual(actual, expected, 'rebase should return empty array');
  assert.end();
});

test('rebase tab', function(assert){
  var actual = rebase([' div','    div','      div']);
  var expected = ['div','   div','     div'];

  assert.deepEqual(actual, expected, 'rebase should reset indents if they are tabs');
  assert.end();
});


test('rebase outdented attributes', function(assert){
  var actual = rebase('  a(href=""\ntitle=""\n)\n    | foo'.split('\n')).join('\n');
  var expected = 'a(href=""\ntitle=""\n)\n  | foo';

  assert.deepEqual(actual, expected, 'rebase should work with outdented attributes');
  assert.end();
});
