/**
 * Deletes all elements from `array`.
 * @param array - The target array
 * @returns `array`
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
 * Returns a new array with same elemenets of `array` except first `n` elements.
 * @param array - The target array
 * @param n - non-negative integer
 * @returns A new array
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
 * Returns a new array which contains `n`-permutations of elemenets of `array`.
 * @param array - The target array
 * @param n - Size of permutation
 * @returns A new array with permutations
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
 * @returns 2-tuple
 * @public
 */
export function partition<T>(array: readonly T[], callbackfn: (x: T) => boolean): [T[], T[]] {
  const satisfied: T[] = []
  const notSatisfied: T[] = []

  for (const x of array) {
    ;(callbackfn(x) ? satisfied : notSatisfied).push(x)
  }

  return [satisfied, notSatisfied]
}
