// @ts-check
const { addTwoNumbers, subtractTwoNumbers, calculateNthRoot } = require('../lib/index')

describe('mathFunctions', () => {
  it('should add two positive numbers correctly', () => {
    expect(addTwoNumbers(1, 2)).toBe(3)
  })

  it('should subtract two positive numbers correctly', () => {
    expect(subtractTwoNumbers(4, 3)).toBe(1)
  })

  it('should calculate the square root of 4', () => {
    expect(calculateNthRoot(4, 2)).toBe(2)
  })

  it('should calculate the cube root of 27', () => {
    expect(calculateNthRoot(27, 3)).toBe(3)
  })

  it('should calculate the fourth root of 16', () => {
    expect(calculateNthRoot(16, 4)).toBe(2)
  })

  it('should calculate the fifth root of 32', () => {
    expect(calculateNthRoot(32, 5)).toBe(2)
  })
})
