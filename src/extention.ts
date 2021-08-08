import * as Arubyray from '.'
import { TupleToTupleOfArray } from './util'

declare global {
  interface Array<T> {
    clear(): this
    compact(): T[]
    combination(n: number): T[][]
    count(callbackfn: (x: T) => boolean): number
    drop(n: number): T[]
    dropWhile(callbackfn: (x: T) => boolean): T[]
    permutation(n: number): T[][]
    product<U, W extends readonly unknown[]>(
      other?: readonly U[],
      ...list: TupleToTupleOfArray<W>
    ): T[][] | [T, U, ...W][]
  }
}

Array.prototype.clear = function <T>(): T[] {
  return Arubyray.clear(this as T[])
}

Array.prototype.compact = function <T>(): T[] {
  return Arubyray.compact(this as T[])
}

Array.prototype.combination = function <T>(n: number): T[][] {
  return Arubyray.combination(this as T[], n)
}

Array.prototype.count = function <T>(callbackfn: (x: T) => boolean): number {
  return Arubyray.count(this as T[], callbackfn)
}

Array.prototype.drop = function <T>(n: number): T[] {
  return Arubyray.drop(this as T[], n)
}

Array.prototype.dropWhile = function <T>(callbackfn: (x: T) => boolean): T[] {
  return Arubyray.dropWhile(this as T[], callbackfn)
}

Array.prototype.permutation = function <T>(n: number): T[][] {
  return Arubyray.permutation(this as T[], n)
}

Array.prototype.product = function <T, U, W extends readonly unknown[]>(
  other?: readonly U[],
  ...list: TupleToTupleOfArray<W>
): T[][] | [T, U, ...W][] {
  if (other === undefined) {
    return Arubyray.product(this as T[])
  }

  return Arubyray.product<T, U, W>(this as T[], other, ...list)
}
