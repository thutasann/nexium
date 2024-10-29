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

  test('converts string to title case', () => {
    expect(NString.toTitleCase('hello world')).toBe('Hello World')
  })

  test('returns true for a palindrome string', () => {
    expect(NString.isPalindrome('madam')).toBe(true)
  })

  test('returns false for a non-palindrome string', () => {
    expect(NString.isPalindrome('hello')).toBe(false)
  })

  test('returns true for a single character string', () => {
    expect(NString.isPalindrome('a')).toBe(true)
  })

  test('returns true for an empty string', () => {
    expect(NString.isPalindrome('')).toBe(true)
  })

  test('returns false for a string with different cases', () => {
    expect(NString.isPalindrome('Madam')).toBe(false)
  })
})
