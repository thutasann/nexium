// @ts-check
const { NArray } = require('../lib')

// Math functions
describe('Array Functions', () => {
  test('splits array into chunks of specified length', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const chunkLength = 3
    const expected = [[1, 2, 3], [4, 5, 6], [7]]

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
})
