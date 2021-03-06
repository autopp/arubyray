<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [arubyray](./arubyray.md) &gt; [permutation](./arubyray.permutation.md)

## permutation() function

Returns a new array which contains `n`<!-- -->-permutations of elemenets of `array`<!-- -->.

<b>Signature:</b>

```typescript
export declare function permutation<T>(array: readonly T[], n: number): T[][];
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  array | readonly T\[\] | The target array |
|  n | number | Size of permutation |

<b>Returns:</b>

T\[\]\[\]

A new array with permutations

## Example


```typescript
Arubyray.permutation([1, 2, 3], 2) // => [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]

```

