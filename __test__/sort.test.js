// @ts-check
const { NSort } = require('../lib')

describe('Bubble Sort', () => {
  test('Bubble Sort - Sorts array correctly', () => {
    const arr = [5, 2, 9, 1, 5, 6]
    const sortedArr = NSort.bubbleSort([...arr]) // Clone to avoid mutation in the test
    expect(sortedArr).toEqual([1, 2, 5, 5, 6, 9])
  })

  test('Bubble Sort - Sorts already sorted array', () => {
    const arr = [1, 2, 3, 4, 5]
    const sortedArr = NSort.bubbleSort([...arr])
    expect(sortedArr).toEqual([1, 2, 3, 4, 5])
  })

  test('Bubble Sort - Handles empty array', () => {
    const arr = []
    const sortedArr = NSort.bubbleSort([...arr])
    expect(sortedArr).toEqual([])
  })

  test('Bubble Sort - Handles single element array', () => {
    const arr = [1]
    const sortedArr = NSort.bubbleSort([...arr])
    expect(sortedArr).toEqual([1])
  })
})
