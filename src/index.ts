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
