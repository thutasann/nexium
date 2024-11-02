// @ts-check
const { NNumber } = require('../lib')

describe('Number functions', () => {
  test('returns min if number is lower than min', () => {
    expect(NNumber.clamp(-5, 0, 10)).toBe(0)
  })

  test('returns max if number is higher than max', () => {
    expect(NNumber.clamp(15, 0, 10)).toBe(10)
  })

  test('returns the number if it is within range', () => {
    expect(NNumber.clamp(5, 0, 10)).toBe(5)
  })

  test('handles edge cases where number equals min or max', () => {
    expect(NNumber.clamp(0, 0, 10)).toBe(0)
    expect(NNumber.clamp(10, 0, 10)).toBe(10)
  })
})
