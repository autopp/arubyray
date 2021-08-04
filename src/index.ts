export function clear<T>(array: Array<T>): Array<T> {
  array.length = 0
  return array
}

export function assoc<K, R extends unknown[]>(array: [K, ...R][], key: K): [K, ...R] | undefined {
  return array.find(([k]) => k === key)
}
