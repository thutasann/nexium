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

  test('returns true if number is within range', () => {
    expect(NNumber.inRange(5, 1, 10)).toBe(true)
  })

  test('returns false if number is below range', () => {
    expect(NNumber.inRange(0, 1, 10)).toBe(false)
  })

  test('returns false if number is above range', () => {
    expect(NNumber.inRange(15, 1, 10)).toBe(false)
  })

  test('handles inverted start and end values', () => {
    expect(NNumber.inRange(5, 10, 1)).toBe(true)
  })

  test('handles edge cases where number equals start or end', () => {
    expect(NNumber.inRange(1, 1, 10)).toBe(true)
    expect(NNumber.inRange(10, 1, 10)).toBe(true)
  })
})