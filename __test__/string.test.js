// @ts-check
const { NString } = require('../lib')

describe('String Functions', () => {
  test('trims whitespace from the start', () => {
    expect(NString.trimStart('   Hello')).toBe('Hello')
  })

  test('trims whitespace from the end', () => {
    expect(NString.trimEnd('Hello    ')).toBe('Hello')
  })
})
