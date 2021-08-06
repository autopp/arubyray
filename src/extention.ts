import * as Arubyray from '.'

declare global {
  interface Array<T> {
    clear(): this
    compact(): T[]
    count(callbackfn: (x: T) => boolean): number
  }
}

Array.prototype.clear = function <T>(): T[] {
  return Arubyray.clear(this as T[])
}

Array.prototype.compact = function <T>(): T[] {
  return Arubyray.compact(this as T[])
}

Array.prototype.count = function <T>(callbackfn: (x: T) => boolean): number {
  return Arubyray.count(this as T[], callbackfn)
}
