// @ts-check
const { NString } = require('../lib')

describe('String Functions', () => {
  test('trims whitespace from the start', () => {
    expect(NString.trimStart('   Hello')).toBe('Hello')
  })

  test('trims whitespace from the end', () => {
    expect(NString.trimEnd('Hello    ')).toBe('Hello')
  })

  test('check if a string is empty or not', () => {
    expect(NString.isEmpty('')).toBe(true)
    expect(NString.isEmpty('not empty')).toBe(false)
  })
})
