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

  test('rounds to 2 decimal places', () => {
    expect(NNumber.roundTo(3.14159, 2)).toBeCloseTo(3.14, 2)
  })

  test('rounds to 0 decimal places', () => {
    expect(NNumber.roundTo(2.71828, 0)).toBe(3)
  })

  test('rounds negative numbers', () => {
    expect(NNumber.roundTo(-2.71828, 2)).toBeCloseTo(-2.72, 2)
  })

  test('rounds up correctly', () => {
    expect(NNumber.roundTo(1.005, 2)).toBeCloseTo(1.01, 2)
  })
})

describe('generateRandomNumber', () => {
  test('generates a random number within the specified range', () => {
    const min = 10
    const max = 20
    const result = NNumber.generateRandom(min, max)

    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
  })

  test('generates a number within a single-value range', () => {
    const min = 15
    const max = 15
    const result = NNumber.generateRandom(min, max)

    expect(result).toBe(min)
  })

  test('benchmark test for generating 1000 random numbers', () => {
    const min = 1
    const max = 100
    const result = NNumber.generateRandom(min, max)
    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
  })
})

describe('NNumber.toOrdinal', () => {
  test('converts numbers to ordinal form correctly', () => {
    expect(NNumber.toOrdinal(1)).toBe('1st')
    expect(NNumber.toOrdinal(2)).toBe('2nd')
    expect(NNumber.toOrdinal(3)).toBe('3rd')
    expect(NNumber.toOrdinal(4)).toBe('4th')
    expect(NNumber.toOrdinal(11)).toBe('11th')
    expect(NNumber.toOrdinal(12)).toBe('12th')
    expect(NNumber.toOrdinal(13)).toBe('13th')
    expect(NNumber.toOrdinal(21)).toBe('21st')
    expect(NNumber.toOrdinal(22)).toBe('22nd')
    expect(NNumber.toOrdinal(23)).toBe('23rd')
    expect(NNumber.toOrdinal(100)).toBe('100th')
  })

  test('converts large numbers to ordinal form correctly', () => {
    expect(NNumber.toOrdinal(101)).toBe('101st')
    expect(NNumber.toOrdinal(111)).toBe('111th')
    expect(NNumber.toOrdinal(222)).toBe('222nd')
    expect(NNumber.toOrdinal(303)).toBe('303rd')
  })
})
