/**
 * Deletes all elements from `array`.
 * @param array - The target array
 * @returns `array`
 * @example
 * ```typescript
 * const array = [1, 2, 3]
 * Arubyray.clear(array)
 * array.length // => 0
 * ```
 * @public
 */
export function clear<T>(array: Array<T>): T[] {
  array.length = 0
  return array
}

/**
 * Returns a new array with same elemenets of `array` except `null` or `undefined`.
 * @param array - The target array
 * @returns A new array
 * @example
 * ```typescript
 * Arubyray.compact([1, null, 2, undefined, 3]) // => [1, 2, 3]
 * ```
 * @public
 */
export function compact<T>(array: readonly T[]): T[] {
  const result: T[] = []
  for (const x of array) {
    if (x !== null && x !== undefined) {
      result.push(x)
    }
  }

  return result
}

/**
 * Returns a new array which contains `n`-combinations of elemenets of `array`.
 * @param array - The target array
 * @param n - Size of combination
 * @returns A new array with combinations
 * @example
 * ```typescript
 * Arubyray.combination([1, 2, 3, 4], 2) // => [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
 * ```
 * @public
 */
export function combination<T>(array: readonly T[], n: number): T[][] {
  if (array.length < n || n < 0) {
    return []
  }

  if (n === 0) {
    return [[]]
  }

  const result: T[][] = []
  for (let i = 0; i < array.length; i++) {
    result.push(...combination(array.slice(i + 1), n - 1).map((sub) => [array[i], ...sub]))
  }

  return result
}

/**
 * Counts number of elements of `array` which satisfies `predicate`.
 * @param array - The target array
 * @param predicate - A function which will be called with each element in `array`
 * @returns Number of elements of `array` which satisfies `predicate`
 * @example
 * ```typescript
 * Arubyray.count([1, 2, 3, 4, 5], (x) => x % 2 === 0) // => 2
 * ```
 * @public
 */
export function count<T>(array: readonly T[], predicate: (x: T) => boolean): number {
  let satisfied = 0
  array.filter
  for (const x of array) {
    if (predicate(x)) {
      satisfied++
    }
  }

  return satisfied
}

/**
 * Returns a new array with elements which is contained in 'array' and is not contained in `other`.
 * @param array - The target array
 * @param other - Filtering targets
 * @returns A new array
 */
export function deference<T>(array: readonly T[], other: readonly T[]): T[] {
  return array.filter((x) => !other.includes(x))
}

/**
 * Returns a new array with same elemenets of `array` except first `n` elements.
 * @param array - The target array
 * @param n - non-negative integer
 * @returns A new array
 * @example
 * ```typescript
 * Arubyray.drop([1, 2, 3, 4, 5], 2) // => [3, 4, 5]
 * ```
 * @public
 */
export function drop<T>(array: readonly T[], n: number): T[] {
  return array.slice(n)
}

/**
 * Call `predicate` in order from the begining of `array`, and when it returns `false`, returns a new array which contains the remaining.
 * @param array - The target array
 * @param predicate - A function which will be called with each element in `array`
 * @returns A new array
 * @example
 * ```typescript
 * Arubyray.dropWhile([1, 2, 3, 1, 2, 3], (x) => x < 3) // => [3, 1, 2, 3]
 * ```
 * @public
 */
export function dropWhile<T>(array: readonly T[], predicate: (x: T) => boolean): T[] {
  let i: number
  for (i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      break
    }
  }

  return array.slice(i)
}

/**
 * Like `Array.prototype.map`, but `null` and `undefined` are omitted from the result.
 * @param array - The target array
 * @param callbackfn - Same as callback of `Array.prototype.map`
 * @returns Same as `Array.prototype.map`, except `null` and `undefined` are omitted
 * @example
 * ```typescript
 * Arubyray.filterMap([{ v: 1 }, { v: null }, { v: undefined }, { v: 2 }], (x) => x.v) // => [1, 2]
 * ```
 */
export function filterMap<T, U>(array: T[], callbackfn: (x: T, index: number, array: T[]) => U): U[] {
  const result: U[] = []
  array.forEach((x, i) => {
    const r = callbackfn(x, i, array)
    if (r !== null && r !== undefined) {
      result.push(r)
    }
  })

  return result
}

/**
 * Like `Array.prototype.forEach`, but `callbackfn` called with both the element of `array` and `obj` and returns `obj`.
 * @param array - The target array
 * @param obj - An arbitrary object
 * @param callbackfn - A function which will be called with each element in `array` and `obj`
 * @returns `obj`
 * @example
 * ```typescript
 * Arubyray.forEachWith([1, 2, 3], { sum: 0 }, (x, r) => (r.sum += x)) // => { sum: 6 }
 * ```
 */
export function forEachWith<T, U>(array: readonly T[], obj: U, callbackfn: (x: T, obj: U) => void): U {
  array.forEach((x) => {
    callbackfn(x, obj)
  })
  return obj
}

/**
 * Returns a new array which contains `n`-permutations of elemenets of `array`.
 * @param array - The target array
 * @param n - Size of permutation
 * @returns A new array with permutations
 * @example
 * ```typescript
 * Arubyray.permutation([1, 2, 3], 2) // => [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
 * ```
 * @public
 */
export function permutation<T>(array: readonly T[], n: number): T[][] {
  if (n > array.length) {
    return []
  }

  const result = new Array<T[]>()

  const buildPermutation = (buf: number[]) => {
    if (buf.length === n) {
      result.push(buf.map((i) => array[i]))
      return
    }

    for (let i = 0; i < array.length; i++) {
      if (!buf.includes(i)) {
        buildPermutation(buf.concat(i))
      }
    }
  }

  buildPermutation([])

  return result
}

/**
 * Returns all combinations of elements of arrays in `list`.
 * @param list - 2D-array for combinations
 * @returns A new array which contains all combinations of elements of arrays in `list`
 * @example
 * ```typescript
 * Arubyray.product([1, 2, 3], ['a', 'b']) // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b'], [3, 'a'], [3, 'b']]
 * ```
 * @public
 */
export function product<T extends unknown[]>(...list: { [I in keyof T]: readonly T[I][] }): T[] {
  if (list.length === 0) {
    return []
  }

  const [head, ...rest] = list

  if (rest.length === 0) {
    return head.map((x) => [x] as T)
  }

  const sub = product(...rest)

  const result: T[] = []
  head.forEach((x) => {
    sub.forEach((y) => {
      result.push([x, ...y] as T)
    })
  })

  return result
}

/**
 * Returns a new array which contains `n`-combinations with repeatation of elemenets of `array`.
 * @param array - The target array
 * @param n - Size of combination
 * @returns A new array with combinations with repeatation
 * @example
 * ```typescript
 * Arubyray.repeatedCombination([1, 2, 3], 2) // => [[1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3]]
 * ```
 * @public
 */
export function repeatedCombination<T>(array: readonly T[], n: number): T[][] {
  if (n < 0) {
    return []
  }

  if (n === 0) {
    return [[]]
  }

  const result: T[][] = []
  for (let i = 0; i < array.length; i++) {
    result.push(...repeatedCombination(array.slice(i), n - 1).map((sub) => [array[i], ...sub]))
  }

  return result
}

/**
 * Returns a new array which contains `n`-permutations with repeatation of elemenets of `array`.
 * @param array - The target array
 * @param n - Size of permutation
 * @returns A new array with permutations with repeatation
 * @example
 * ```typescript
 * Arubyray.repeatedPermutation([1, 2]) // => [[1, 1], [1, 2], [2, 1], [2, 2]]
 * ```
 * @public
 */
export function repeatedPermutation<T>(array: readonly T[], n: number): T[][] {
  if (n < 0) {
    return []
  }

  if (n === 0) {
    return [[]]
  }

  const result: T[][] = []
  for (let i = 0; i < array.length; i++) {
    result.push(...repeatedPermutation(array, n - 1).map((sub) => [array[i], ...sub]))
  }

  return result
}

/**
 * Returns a new array with first `n` elemenets of `array`
 * @param array - The target array
 * @param n - non-negative integer
 * @returns A new array
 * @example
 * ```typescript
 * Arubyray.take([1, 2, 3, 4, 5], 3) // => [1, 2, 3]
 * ```
 * @public
 */
export function take<T>(array: readonly T[], n: number): T[] {
  if (n < 0) {
    throw new Error('attempt to take negative size')
  }

  return array.slice(0, n)
}

/**
 * Call `predicate` in order from the begining of `array`, and when it returns `false`, returns a new array which contains the elements up to that point.
 * @param array - The target array
 * @param predicate - A function which will be called with each element in `array`
 * @returns A new array
 * @example
 * ```typescript
 * Arubyray.takeWhile([1, 2, 3, 1, 2, 3], (x) => x < 3) // => [1, 2]
 * ```
 * @public
 */
export function takeWhile<T>(array: readonly T[], predicate: (x: T) => boolean): T[] {
  let i: number
  for (i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      break
    }
  }

  return array.slice(0, i)
}

/**
 * Returns 2-tuple of array. The first contains the elements of `array` which returned `true` by `predicate`. The second contains the remainings.
 * @param array - The target array
 * @param predicate - A function which will be called with each element in `array`
 * @returns 2-tuple
 * @example
 * ```typescript
 * Arubyray.partition([1, 2, 3, 4, 5], (x) => x % 2 === 0) // => [[2, 4], [1, 3, 5]]
 * ```
 * @public
 */
export function partition<T>(array: readonly T[], predicate: (x: T) => boolean): [T[], T[]] {
  const satisfied: T[] = []
  const notSatisfied: T[] = []

  for (const x of array) {
    ;(predicate(x) ? satisfied : notSatisfied).push(x)
  }

  return [satisfied, notSatisfied]
}
