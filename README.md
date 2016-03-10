# Rebase indent
Rebase a code block based on the first indentation level.

```jade
    div
        | foo
```

```js
rebase(['  div','    div','      div','        p foo']);
// ['div','  div','    div','      p foo'];
```