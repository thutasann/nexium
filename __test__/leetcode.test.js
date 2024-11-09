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

describe('Longest substring', () => {
  test('finds longest substring without repeating characters', () => {
    expect(NLeet.longestSubstring('abcabcbb')).toBe(3) // "abc"
  })

  test('handles single character string', () => {
    expect(NLeet.longestSubstring('a')).toBe(1)
  })

  test('handles empty string', () => {
    expect(NLeet.longestSubstring('')).toBe(0)
  })

  test('handles string with all unique characters', () => {
    expect(NLeet.longestSubstring('abcdef')).toBe(6)
  })

  test('handles string with all identical characters', () => {
    expect(NLeet.longestSubstring('aaaa')).toBe(1)
  })

  test('handles special characters and spaces', () => {
    expect(NLeet.longestSubstring('a b c a b c')).toBe(3) // "a b"
  })
})

describe('isValidParentheses', () => {
  test('valid parentheses', () => {
    expect(NLeet.isValidParentheses('()')).toBe(true)
    expect(NLeet.isValidParentheses('()[]{}')).toBe(true)
    expect(NLeet.isValidParentheses('{[]}')).toBe(true)
  })

  test('invalid parentheses', () => {
    expect(NLeet.isValidParentheses('(]')).toBe(false)
    expect(NLeet.isValidParentheses('([)]')).toBe(false)
    expect(NLeet.isValidParentheses('{[}')).toBe(false)
    expect(NLeet.isValidParentheses('(')).toBe(false)
  })

  test('empty string', () => {
    expect(NLeet.isValidParentheses('')).toBe(true)
  })
})
