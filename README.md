# Arubyray: array utilities in Ruby

Arubyray contains array utilities which are provided Ruby's Array class.

You can use this utilities as both function and method.

## Usage

```typescript
import * as Arubyray from 'arubyray'

Arubyray.combination([1, 2, 3], 2) // => [[1, 2], [1, 3], [2, 3]]
```

Full function list is [here](doc/api/arubyray.md).

With `arubyray/extension`, you can use utilities as method of Array.

```typescript
import 'arubyray/extension'

[1, 2, 3].combination(2) // same as `Arubyray.combination([1, 2, 3], 2)`
```

Note: `arubyray/extension` mutates `Array.prototype` at runtime. So once import `arubyray/extension`, the extension is enabled everywhere.

## License

[Apache License 2.0](LICENSE)
