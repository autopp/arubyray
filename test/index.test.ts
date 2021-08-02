import * as arubyray from "../src"

describe('clear()', () => {
  it('clears the given array and returns it', () => {
    const arr = [1, 2, 3]

    expect(arubyray.clear(arr)).toBe(arr)
    expect(arr).toEqual([])
  })
})
