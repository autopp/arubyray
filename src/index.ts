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

export function count<T>(array: readonly T[], callackfn: (x: T) => boolean): number {
  let satisfied = 0
  for (const x of array) {
    if (callackfn(x)) {
      satisfied++
    }
  }

  return satisfied
}
