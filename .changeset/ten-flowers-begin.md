---
'good-snow-tire-demo': major
---

BREAKING CHANGE: Remove addition function

This library's API will be taking a new direction: subtraction instead of addition.

Please update your imports from:

```ts
import { sum, subtract } from '../src';
```

to

```ts
import { subtract } from '../src';
```
