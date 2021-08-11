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
    product<U extends unknown[]>(...list: TupleToTupleOfArray<U>): [T, ...U][]
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

Array.prototype.drop = function <T>(this: T[], n: number): T[] {
  return Arubyray.drop(this, n)
}

Array.prototype.dropWhile = function <T>(this: T[], callbackfn: (x: T) => boolean): T[] {
  return Arubyray.dropWhile(this, callbackfn)
}

Array.prototype.permutation = function <T>(this: T[], n: number): T[][] {
  return Arubyray.permutation(this, n)
}

Array.prototype.product = function <T, U extends unknown[]>(this: T[], ...list: TupleToTupleOfArray<U>): [T, ...U][] {
  return Arubyray.product<[T, ...U]>(this, ...list)
}

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
