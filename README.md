# Rebase indent
Rebase an array of indented lines based on the first indentation level.

```js
rebase(['  div','    div','      div','        p foo']);
// ['div','  div','    div','      p foo'];
```

optionally specify a new base.

```js
rebase(['div','  div'], 4);
// ['    div','      div'];
```