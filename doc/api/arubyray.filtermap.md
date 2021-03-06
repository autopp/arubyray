<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [arubyray](./arubyray.md) &gt; [filterMap](./arubyray.filtermap.md)

## filterMap() function

Like `Array.prototype.map`<!-- -->, but `null` and `undefined` are omitted from the result.

<b>Signature:</b>

```typescript
export declare function filterMap<T, U>(array: T[], callbackfn: (x: T, index: number, array: T[]) => U): U[];
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  array | T\[\] | The target array |
|  callbackfn | (x: T, index: number, array: T\[\]) =&gt; U | Same as callback of <code>Array.prototype.map</code> |

<b>Returns:</b>

U\[\]

Same as `Array.prototype.map`<!-- -->, except `null` and `undefined` are omitted

## Example


```typescript
Arubyray.filterMap([{ v: 1 }, { v: null }, { v: undefined }, { v: 2 }], (x) => x.v) // => [1, 2]

```

