import { TupleToTupleOfArray } from './util'

export function clear<T>(array: Array<T>): Array<T> {
  array.length = 0
  return array
}

export function assoc<K, R extends unknown[]>(array: [K, ...R][], key: K): [K, ...R] | undefined {
  return array.find(([k]) => k === key)
}

export function compact<T>(array: readonly T[]): T[] {
  const result: T[] = []
  for (const x of array) {
    if (x !== null && x !== undefined) {
      result.push(x)
    }
  }

  return result
}

export function combination<T>(array: readonly T[], n: number): T[][] {
  if (array.length < n || n < 0) {
    return []
  }

  if (n === 0) {
    return [[]]
  }

  const [head, ...rest] = array
  const appended = combination(rest, n - 1).map((sub) => [head, ...sub])

  appended.push(...combination(rest, n))
  return appended
}

export function count<T>(array: readonly T[], callackfn: (x: T) => boolean): number {
  let satisfied = 0
  for (const x of array) {
    if (callackfn(x)) {
      satisfied++
    }
  }

  return satisfied
}

export function drop<T>(array: readonly T[], n: number): T[] {
  return array.slice(n)
}

export function dropWhile<T>(array: readonly T[], callbackfn: (x: T) => boolean): T[] {
  let i: number
  for (i = 0; i < array.length; i++) {
    if (!callbackfn(array[i])) {
      break
    }
  }

  return array.slice(i)
}

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

export function product<T>(array: readonly T[]): T[][]
export function product<T, U, W extends readonly unknown[]>(
  array: readonly T[],
  other: readonly U[],
  ...list: TupleToTupleOfArray<W>
): [T, U, ...W][]

export function product<T, U, W extends readonly unknown[]>(
  array: readonly T[],
  other?: readonly U[],
  ...list: TupleToTupleOfArray<W>
): T[][] | [T, U, ...W][] {
  const doProduct = <T, U, W extends readonly unknown[]>(
    array: readonly T[],
    other: readonly U[] | undefined,
    list: TupleToTupleOfArray<W>
  ): T[][] | [T, U, ...W][] => {
    if (other === undefined) {
      return array.map((x) => [x])
    }

    const [head, ...rest] = list
    const sub = doProduct(other, head, rest) as unknown as [U, ...W][]

    const result: [T, U, ...W][] = []
    array.forEach((x) => {
      sub.forEach((y) => {
        result.push([x, ...y])
      })
    })

    return result
  }

  return doProduct(array, other, list)
}

export function repeatedCombination<T>(array: readonly T[], n: number): T[][] {
  if (n < 0) {
    return []
  }

  if (n === 0) {
    return [[]]
  }

  const result: T[][] = []
  for (let i = 0; i < array.length; i++) {
    const head = array[i]
    result.push(...repeatedCombination(array.slice(i), n - 1).map((sub) => [head, ...sub]))
  }

  return result
}
