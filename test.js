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


test('rebase to -1', function(assert){
  var actual = rebase(['  div','    div','      div','        p foo'], -1);
  var expected = ['div','  div','    div','      p foo'];

  assert.deepEqual(actual, expected, 'rebase with -1 base');
  assert.end();
});


test('rebase to 0', function(assert){
  var actual = rebase(['  div','    div','      div','        p foo'], 0);
  var expected = ['div','  div','    div','      p foo'];

  assert.deepEqual(actual, expected, 'rebase with 0 base');
  assert.end();
});


test('rebase to 2', function(assert){
  var actual = rebase(['  div','    div','      div','        p foo'], 2);
  var expected = ['  div','    div','      div','        p foo'];

  assert.deepEqual(actual, expected, 'rebase with 2 base');
  assert.end();
});


test('rebase to 4', function(assert){
  var actual = rebase(['  div','    div','      div','        p foo'], 4);
  var expected = ['    div','      div','        div','          p foo'];

  assert.deepEqual(actual, expected, 'rebase with 4 base');
  assert.end();
});


test('rebase to null', function(assert){
  var actual = rebase(['  div','    div','      div','        p foo'], null);
  var expected = ['div','  div','    div','      p foo'];

  assert.deepEqual(actual, expected, 'rebase with null base');
  assert.end();
});


test('rebase to null', function(assert){
  var actual = rebase(['  div','    div','      div','        p foo'], 'foo');
  var expected = ['div','  div','    div','      p foo'];

  assert.deepEqual(actual, expected, 'rebase with string base');
  assert.end();
});


test('stop rebase at block with lower level', function(assert){
  var actual = rebase(['  div','    div','','div','  div']);
  var expected = ['div','  div','','div','  div'];

  assert.deepEqual(actual, expected, 'rebase with base deeper than rest of fragment');
  assert.end();
});