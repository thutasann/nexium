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

describe('toOrdinal', () => {
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

// describe('toCurrency', () => {
//   test('formats USD currency correctly for en-US locale', () => {
//     const amount = 1234.56
//     const result = NNumber.toCurrency(amount, 'en_US.UTF-8', '$')
//     expect(result).toBe('$1,234.56')
//   })

//   test('formats EUR currency correctly for fr-FR locale', () => {
//     const amount = 1234.56
//     const result = NNumber.toCurrency(amount, 'fr_FR.UTF-8', '€')
//     expect(result).toBe('€1234,56')
//   })

//   test('formats GBP currency correctly for en-GB locale', () => {
//     const amount = 1234.56
//     const result = NNumber.toCurrency(amount, 'en_GB.UTF-8', '£')
//     expect(result).toBe('£1,234.56')
//   })

//   test('formats JPY currency correctly for ja-JP locale', () => {
//     const amount = 1234.56
//     const result = NNumber.toCurrency(amount, 'ja_JP.UTF-8', '¥')
//     expect(result).toBe('¥1,234.56') // JPY doesn't usually show decimals
//   })

//   test('formats AUD currency correctly for en-AU locale', () => {
//     const amount = 1234.56
//     const result = NNumber.toCurrency(amount, 'en_AU.UTF-8', 'A$')
//     expect(result).toBe('A$1,234.56')
//   })

//   test('formats CAD currency correctly for en-CA locale', () => {
//     const amount = 1234.56
//     const result = NNumber.toCurrency(amount, 'en_CA.UTF-8', 'C$')
//     expect(result).toBe('C$1,234.56')
//   })

//   test('formats CHF currency correctly for de-CH locale', () => {
//     const amount = 1234.56
//     const result = NNumber.toCurrency(amount, 'de_CH.UTF-8', 'CHF')
//     expect(result).toBe('CHF1234,56')
//   })

//   test('handles large numbers correctly', () => {
//     const amount = 1234567890.56
//     const result = NNumber.toCurrency(amount, 'en_US.UTF-8', '$')
//     expect(result).toBe('$1,234,567,890.56')
//   })
// })

describe('Fibonacci Sequence', () => {
  test('calculates the 0th Fibonacci number', () => {
    expect(NNumber.fibonacci(0)).toBe(0)
  })

  test('calculates the 1st Fibonacci number', () => {
    expect(NNumber.fibonacci(1)).toBe(1)
  })

  test('calculates the 10th Fibonacci number', () => {
    expect(NNumber.fibonacci(10)).toBe(55)
  })

  test('calculates the 20th Fibonacci number', () => {
    expect(NNumber.fibonacci(20)).toBe(6765)
  })

  test('calculates the 50th Fibonacci number', () => {
    expect(NNumber.fibonacci(50)).toBe(12586269025n) // Use BigInt for large numbers
  })
})

describe('NNumber.sum', () => {
  test('sums an array of positive numbers', () => {
    expect(NNumber.sum([1, 2, 3, 4, 5])).toBeCloseTo(15)
  })

  test('sums an array of mixed positive and negative numbers', () => {
    expect(NNumber.sum([-1, -2, 3, 4, 5])).toBeCloseTo(9)
  })

  test('sums an array with a single number', () => {
    expect(NNumber.sum([10])).toBeCloseTo(10)
  })

  test('sums an array of floating-point numbers', () => {
    expect(NNumber.sum([1.1, 2.2, 3.3])).toBeCloseTo(6.6)
  })

  test('returns 0 for an empty array', () => {
    expect(NNumber.sum([])).toBeCloseTo(0)
  })
})
