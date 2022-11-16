---
'good-snow-tire-demo': major
---

Deprecate add function

In our first major release, `good-snow-tire-demo` is removing the `add` function.

This means that imports that look like this

```js
import { add, subtract, multiply, divide } from '../src';
```

should be updated to reflect this change:

```js
import { subtract, multiply, divide } from '../src';
```
