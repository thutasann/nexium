// @ts-check
const { NMaths } = require('../lib')

// Math functions
describe('mathFunctions', () => {
  it('should add two positive numbers correctly', () => {
    expect(NMaths.addTwoNumbers(1, 2)).toBe(3)
  })

  it('should subtract two positive numbers correctly', () => {
    expect(NMaths.subtractTwoNumbers(4, 3)).toBe(1)
  })

  it('should calculate the square root of 4', () => {
    expect(NMaths.calculateNthRoot(4, 2)).toBe(2)
  })

  it('should calculate the cube root of 27', () => {
    expect(NMaths.calculateNthRoot(27, 3)).toBe(3)
  })

  it('should calculate the fourth root of 16', () => {
    expect(NMaths.calculateNthRoot(16, 4)).toBe(2)
  })

  it('should calculate the fifth root of 32', () => {
    expect(NMaths.calculateNthRoot(32, 5)).toBe(2)
  })
})

// Matrix Multiply
describe('matrixMultiply', () => {
  test('multiplies two matrices correctly', () => {
    const matrixA = [
      [1, 2, 3],
      [4, 5, 6],
    ]

    const matrixB = [
      [7, 8],
      [9, 10],
      [11, 12],
    ]

    const result = NMaths.matrixMultiply(matrixA, matrixB)

    expect(result).toEqual([
      [58, 64],
      [139, 154],
    ])
  })

  test('throws an error if the matrices cannot be multiplied', () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ]

    const matrixB = [[5, 6]]

    expect(() => NMaths.matrixMultiply(matrixA, matrixB)).toThrow()
  })
})
