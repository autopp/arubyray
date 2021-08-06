import 'jest-extended'
import * as Arubyray from '../src'

describe('clear()', () => {
  it('clears the given array and returns it', () => {
    const array = [1, 2, 3]

    expect(Arubyray.clear(array)).toBe(array)
    expect(array).toEqual([])
  })
})

describe('assoc()', () => {
  const array = [
    [1, 'a'],
    [2, 'b', 'c'],
    [3, 'd', 'e', 'f'],
  ] as [number, ...string[]][]

  it.each([
    ['when matching tupple is found, returns it', 2, [2, 'b', 'c']],
    ['when matching tuple is not found, returns undefined', 4, undefined],
  ])('%s', (_, key, expected) => {
    expect(Arubyray.assoc(array, key)).toEqual(expected)
  })
})

describe('compact()', () => {
  it('returns array excludes null and undefined', () => {
    expect(Arubyray.compact([1, undefined, 2, null])).toEqual([1, 2])
  })
})

describe('combination()', () => {
  const array = [1, 2, 3]
  it.each([
    [0, [[]]],
    [1, [[1], [2], [3]]],
    [
      2,
      [
        [1, 2],
        [1, 3],
        [2, 3],
      ],
    ],
    [3, [[1, 2, 3]]],
    [4, []],
  ])('with [1, 2, 3] and %d, returns %j', (n, expected) => {
    const actual = Arubyray.combination(array, n)
    expect(actual).toIncludeAllMembers(expected)
    expect(actual.length).toEqual(expected.length)
  })
})

describe('count()', () => {
  it('returns count of satisfied callback', () => {
    expect(Arubyray.count([0, 1, 2, 3, 4], (x) => x % 2 === 0)).toEqual(3)
  })
})
