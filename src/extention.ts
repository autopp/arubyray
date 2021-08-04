import * as Arubyray from '.'

declare global {
  interface Array<T> {
    clear(): this
  }
}

Array.prototype.clear = function <T>() {
  return Arubyray.clear(this as T[])
}
