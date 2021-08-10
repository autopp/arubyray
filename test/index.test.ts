import 'jest-extended'
import * as Arubyray from '../src'

describe('clear()', () => {
  it('clears the given array and returns it', () => {
    const array = [1, 2, 3]

    expect(Arubyray.clear(array)).toBe(array)
    expect(array).toEqual([])
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

describe('drop()', () => {
  it('returns array dropped first n items', () => {
    expect(Arubyray.drop([1, 2, 3, 4, 5], 3)).toEqual([4, 5])
  })
})

describe('dropWhile()', () => {
  it('returns array dropped while callback is satisfied', () => {
    expect(Arubyray.dropWhile([1, 2, 3, 1, 2, 3], (x) => x < 3)).toEqual([3, 1, 2, 3])
  })
})

describe('permutation()', () => {
  const array = [1, 2, 3]
  it.each([
    [0, [[]]],
    [1, [[1], [2], [3]]],
    [
      2,
      [
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 3],
        [3, 1],
        [3, 2],
      ],
    ],
    [
      3,
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    ],
    [4, []],
  ])('with [1, 2, 3] and %d, returns %j', (n, expected) => {
    const actual = Arubyray.permutation(array, n)
    expect(actual).toIncludeAllMembers(expected)
    expect(actual.length).toEqual(expected.length)
  })
})

describe('product()', () => {
  it('with [1, 2], returns [[1], [2]]', () => {
    expect(Arubyray.product([1, 2])).toEqual([[1], [2]])
  })

  it('with [1, 2] and ["a", "b", "c"], returns [[1, "a"], [1, "b"], [1, "c"], [2, "a"], [2, "b"], [2, "c"]]', () => {
    expect(Arubyray.product([1, 2], ['a', 'b', 'c'])).toEqual([
      [1, 'a'],
      [1, 'b'],
      [1, 'c'],
      [2, 'a'],
      [2, 'b'],
      [2, 'c'],
    ])
  })

  it('with [1, 2], ["a", "b"] and [true, false], returns [[1, "a", true], [1, "a", false], [1, "b", true], [1, "b", false], [2, "a", true], [2, "a", false], [2, "b", true], [2, "b", false]]', () => {
    expect(Arubyray.product([1, 2], ['a', 'b'], [true, false])).toEqual([
      [1, 'a', true],
      [1, 'a', false],
      [1, 'b', true],
      [1, 'b', false],
      [2, 'a', true],
      [2, 'a', false],
      [2, 'b', true],
      [2, 'b', false],
    ])
  })

  it('with [1, 2], [] and ["a", "b"], returns []', () => {
    expect(Arubyray.product([1, 2], [], ['a', 'b'])).toEqual([])
  })
})

describe('repeatedCombination()', () => {
  const array = [1, 2, 3]
  it.each([
    [0, [[]]],
    [1, [[1], [2], [3]]],
    [
      2,
      [
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 2],
        [2, 3],
        [3, 3],
      ],
    ],
    [
      3,
      [
        [1, 1, 1],
        [1, 1, 2],
        [1, 1, 3],
        [1, 2, 2],
        [1, 2, 3],
        [1, 3, 3],
        [2, 2, 2],
        [2, 2, 3],
        [2, 3, 3],
        [3, 3, 3],
      ],
    ],
    [
      4,
      [
        [1, 1, 1, 1],
        [1, 1, 1, 2],
        [1, 1, 1, 3],
        [1, 1, 2, 2],
        [1, 1, 2, 3],
        [1, 1, 3, 3],
        [1, 2, 2, 2],
        [1, 2, 2, 3],
        [1, 2, 3, 3],
        [1, 3, 3, 3],
        [2, 2, 2, 2],
        [2, 2, 2, 3],
        [2, 2, 3, 3],
        [2, 3, 3, 3],
        [3, 3, 3, 3],
      ],
    ],
  ])('with [1, 2, 3] and %d, returns %j', (n, expected) => {
    const actual = Arubyray.repeatedCombination(array, n)
    expect(actual).toIncludeAllMembers(expected)
    expect(actual.length).toEqual(expected.length)
  })
})

describe('repeatedPermutation()', () => {
  it.each([
    [[1, 2, 3], 0, [[]]],
    [[1, 2, 3], 1, [[1], [2], [3]]],
    [
      [1, 2, 3],
      2,
      [
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 2],
        [2, 3],
        [3, 1],
        [3, 2],
        [3, 3],
      ],
    ],
    [
      [1, 2, 3],
      3,
      [
        [1, 1, 1],
        [1, 1, 2],
        [1, 1, 3],
        [1, 2, 1],
        [1, 2, 2],
        [1, 2, 3],
        [1, 3, 1],
        [1, 3, 2],
        [1, 3, 3],
        [2, 1, 1],
        [2, 1, 2],
        [2, 1, 3],
        [2, 2, 1],
        [2, 2, 2],
        [2, 2, 3],
        [2, 3, 1],
        [2, 3, 2],
        [2, 3, 3],
        [3, 1, 1],
        [3, 1, 2],
        [3, 1, 3],
        [3, 2, 1],
        [3, 2, 2],
        [3, 2, 3],
        [3, 3, 1],
        [3, 3, 2],
        [3, 3, 3],
      ],
    ],
    [
      [1, 2],
      3,
      [
        [1, 1, 1],
        [1, 1, 2],
        [1, 2, 1],
        [1, 2, 2],
        [2, 1, 1],
        [2, 1, 2],
        [2, 2, 1],
        [2, 2, 2],
      ],
    ],
  ])('with %j and %d, returns %j', (array, n, expected) => {
    const actual = Arubyray.repeatedPermutation(array, n)
    expect(actual).toIncludeAllMembers(expected)
    expect(actual.length).toEqual(expected.length)
  })
})

describe('take()', () => {
  it('with negative value, throws error', () => {
    expect(() => Arubyray.take([1, 2, 3, 4, 5], -1)).toThrow()
  })

  it.each([
    [0, []],
    [1, [1]],
    [2, [1, 2]],
    [3, [1, 2, 3]],
    [4, [1, 2, 3]],
  ])('with [1, 2, 3] and %j, returns %j', (n, expected) => {
    expect(Arubyray.take([1, 2, 3], n)).toEqual(expected)
  })
})

describe('takeWhile()', () => {
  it('returns array taked while callback is satisfied', () => {
    expect(Arubyray.takeWhile([1, 2, 3, 1, 2, 3], (x) => x < 3)).toEqual([1, 2])
  })
})

describe('partition()', () => {
  it('returns partitioned tuple by given predicate', () => {
    expect(Arubyray.partition([0, 1, 2, 3, 4, 5, 6], (x) => x % 3 === 0)).toEqual([
      [0, 3, 6],
      [1, 2, 4, 5],
    ])
  })
})
