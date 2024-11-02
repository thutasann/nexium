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
})