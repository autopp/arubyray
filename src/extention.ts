import * as Arubyray from '.'

declare global {
  interface Array<T> {
    clear(): this
    compact(): T[]
  }
}

Array.prototype.clear = function <T>(): T[] {
  return Arubyray.clear(this as T[])
}

Array.prototype.compact = function <T>(): T[] {
  return Arubyray.compact(this as T[])
}
