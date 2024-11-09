// @ts-check
const { NLeet } = require('../lib')

describe('Two Sum', () => {
  test('finds indices for two sum solution', () => {
    const numbers = [2, 7, 11, 15]
    const target = 9
    expect(NLeet.twoSum(numbers, target)).toEqual([0, 1])
  })

  test('handles no solution case', () => {
    const numbers = [1, 2, 3]
    const target = 7
    expect(() => NLeet.twoSum(numbers, target)).toThrow('No two sum solution found')
  })
})
