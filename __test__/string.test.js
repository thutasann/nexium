// @ts-check
const { trimStart } = require('../lib')

describe('String Functions', () => {
  test('trims whitespace from the start', () => {
    expect(trimStart('   Hello')).toBe('Hello')
  })
})
