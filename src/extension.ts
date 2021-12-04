import * as Arubyray from '.'

declare global {
  interface Array<T> {
    clear(): this
    compact(): T[]
    combination(n: number): T[][]
    count(callbackfn: (x: T) => boolean): number
    difference(array: readonly T[], ...others: readonly T[][]): T[]
    drop(n: number): T[]
    dropWhile(callbackfn: (x: T) => boolean): T[]
    filterMap<U>(callbackfn: (x: T, index: number, array: T[]) => U): U[]
    forEachWith<U>(obj: U, callbackfn: (x: T, obj: U) => void): U
    permutation(n: number): T[][]
    product<U extends unknown[]>(...list: { [I in keyof U]: readonly U[I][] }): [T, ...U][]
    repeatedCombination(n: number): T[][]
    repeatedPermutation(n: number): T[][]
    take(n: number): T[]
    takeWhile(callbackfn: (x: T) => boolean): T[]
    partition(callbackfn: (x: T) => boolean): [T[], T[]]
  }
}

Array.prototype.clear = function <T>(this: T[]): T[] {
  return Arubyray.clear(this)
}

Array.prototype.compact = function <T>(this: T[]): T[] {
  return Arubyray.compact(this)
}

Array.prototype.combination = function <T>(this: T[], n: number): T[][] {
  return Arubyray.combination(this, n)
}

Array.prototype.count = function <T>(this: T[], callbackfn: (x: T) => boolean): number {
  return Arubyray.count(this, callbackfn)
}

Array.prototype.difference = function <T>(this: T[], ...others: T[][]): T[] {
  return Arubyray.difference(this, ...others)
}

Array.prototype.drop = function <T>(this: T[], n: number): T[] {
  return Arubyray.drop(this, n)
}

Array.prototype.dropWhile = function <T>(this: T[], callbackfn: (x: T) => boolean): T[] {
  return Arubyray.dropWhile(this, callbackfn)
}

Array.prototype.filterMap = function <T, U>(this: T[], callbackfn: (x: T, index: number, array: T[]) => U): U[] {
  return Arubyray.filterMap(this, callbackfn)
}

Array.prototype.forEachWith = function <T, U>(this: T[], obj: U, callbackfn: (x: T, obj: U) => void): U {
  return Arubyray.forEachWith(this, obj, callbackfn)
}

Array.prototype.permutation = function <T>(this: T[], n: number): T[][] {
  return Arubyray.permutation(this, n)
}

Array.prototype.product = function <T, U extends unknown[]>(
  this: T[],
  ...list: { [I in keyof U]: readonly U[I][] }
): [T, ...U][] {
  return Arubyray.product<[T, ...U]>(this, ...list)
} as typeof Array.prototype.product // FIXME

Array.prototype.repeatedCombination = function <T>(this: T[], n: number): T[][] {
  return Arubyray.repeatedCombination(this, n)
}

Array.prototype.repeatedPermutation = function <T>(this: T[], n: number): T[][] {
  return Arubyray.repeatedPermutation(this, n)
}

Array.prototype.take = function <T>(this: T[], n: number): T[] {
  return Arubyray.take(this, n)
}

Array.prototype.takeWhile = function <T>(this: T[], callbackfn: (x: T) => boolean): T[] {
  return Arubyray.takeWhile(this, callbackfn)
}

Array.prototype.partition = function <T>(this: T[], callbackfn: (x: T) => boolean): [T[], T[]] {
  return Arubyray.partition(this, callbackfn)
}
