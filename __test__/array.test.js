// @ts-check
const { NArray } = require('../lib')

// Array functions
describe('Array Functions', () => {
  test('splits num array into chunks of specified length', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const chunkLength = 3
    const expected = [[1, 2, 3], [4, 5, 6], [7]]

    expect(NArray.chunkArray(arr, chunkLength)).toEqual(expected)
  })

  test('splits string array into chunks of specified length', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    const chunkLength = 3
    const expected = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]

    expect(NArray.chunkArray(arr, chunkLength)).toEqual(expected)
  })

  test('handles array length less than chunk size', () => {
    const arr = [1, 2]
    const chunkLength = 5
    const expected = [[1, 2]]

    expect(NArray.chunkArray(arr, chunkLength)).toEqual(expected)
  })

  test('returns empty array when input array is empty', () => {
    const arr = []
    const chunkLength = 3
    const expected = []

    expect(NArray.chunkArray(arr, chunkLength)).toEqual(expected)
  })

  test('chunkArrayGeneric correctly chunks an array of objects', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    const chunkLength = 2
    const result = NArray.chunkArray(array, chunkLength)

    expect(result).toEqual([[{ id: 1 }, { id: 2 }], [{ id: 3 }, { id: 4 }], [{ id: 5 }]])
  })

  test('removes duplicates from integer array', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5]
    const result = NArray.uniqueArray(arr)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  test('removes duplicates from string array', () => {
    const arr = ['apple', 'banana', 'apple', 'orange', 'banana']
    const result = NArray.uniqueArray(arr)
    expect(result).toEqual(['apple', 'banana', 'orange'])
  })

  test('removes duplicates from an array of objects', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 1 }]
    const result = NArray.uniqueArray(array)
    expect(result).toEqual([{ id: 1 }, { id: 2 }])
  })

  test('counts non-repeating integers in an array', () => {
    expect(NArray.countNonRepeating([1, 2, 2, 3, 4, 4, 5], 'number')).toBe(3) // [1, 3, 5]
    expect(NArray.countNonRepeating([10, 20, 30, 40, 50], 'number')).toBe(5) // All unique
  })

  test('counts non-repeating strings in an array', () => {
    expect(NArray.countNonRepeating(['a', 'b', 'b', 'c', 'd', 'd', 'e'], 'string')).toBe(3) // ['a', 'c', 'e']
    expect(NArray.countNonRepeating(['apple', 'banana', 'cherry'], 'string')).toBe(3) // All unique
  })
})
