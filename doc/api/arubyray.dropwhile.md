<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [arubyray](./arubyray.md) &gt; [dropWhile](./arubyray.dropwhile.md)

## dropWhile() function

Call `predicate` in order from the begining of `array`<!-- -->, and when it returns `false`<!-- -->, returns a new array which contains the remaining.

<b>Signature:</b>

```typescript
export declare function dropWhile<T>(array: readonly T[], predicate: (x: T) => boolean): T[];
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  array | readonly T\[\] | The target array |
|  predicate | (x: T) =&gt; boolean | A function which will be called with each element in <code>array</code> |

<b>Returns:</b>

T\[\]

A new array

## Example


```typescript
Arubyray.dropWhile([1, 2, 3, 1, 2, 3], (x) => x < 3) // => [3, 1, 2, 3]

```

