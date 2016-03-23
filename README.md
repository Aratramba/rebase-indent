# Rebase indent
Rebase an array of indented lines based on the first indentation level.

`rebase(lines:Array, newBase:Number, stopAtLowerIndent:String)`

```js
rebase([
'  div',
'    div',
'      div',
'        p foo'
]);

/*
[
'div',
'  div',
'    div',
'      p foo'
];
*/
```

optionally specify a new base indent (number).

```js
rebase([
'div',
'  div'
], 4);

/*
[
'    div',
'      div'
];
*/
```

Optionally set flag to stop when a lower indent level is encountered. This way it only resets the first block.

```js
rebase([
'  div',
'    div',
'',
'div',
'  div'
], 0, true);

// with stop set to true
/*
[
'  div',
'    div',
'',
'div',
'  div'
]
*/

// with stop set to false
/*
[
'div',
'  div',
'',
'div',
'div'
]
*/
```