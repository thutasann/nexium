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

describe('isValidAnagram', () => {
  test('valid anagrams', () => {
    expect(NLeet.isValidAnagram('listen', 'silent')).toBe(true)
    expect(NLeet.isValidAnagram('anagram', 'nagaram')).toBe(true)
    expect(NLeet.isValidAnagram('rat', 'tar')).toBe(true)
  })

  test('invalid anagrams', () => {
    expect(NLeet.isValidAnagram('hello', 'world')).toBe(false)
    expect(NLeet.isValidAnagram('rat', 'car')).toBe(false)
    expect(NLeet.isValidAnagram('night', 'thingy')).toBe(false)
  })

  test('different lengths', () => {
    expect(NLeet.isValidAnagram('abc', 'abcd')).toBe(false)
  })

  test('empty strings', () => {
    expect(NLeet.isValidAnagram('', '')).toBe(true)
  })
})

describe('Reverse Integer', () => {
  test('reverses a positive integer', () => {
    expect(NLeet.reverseInteger(123)).toBe(321)
  })

  test('reverses a negative integer', () => {
    expect(NLeet.reverseInteger(-123)).toBe(-321)
  })

  test('handles overflow for positive integer', () => {
    expect(NLeet.reverseInteger(1534236469)).toBe(0) // Overflow case
  })

  test('handles overflow for negative integer', () => {
    expect(NLeet.reverseInteger(-1534236469)).toBe(0) // Underflow case
  })

  test('reverses an integer ending with zero', () => {
    expect(NLeet.reverseInteger(120)).toBe(21) // Removes trailing zero
  })

  test('returns 0 for input 0', () => {
    expect(NLeet.reverseInteger(0)).toBe(0) // Edge case for zero
  })
})

describe('Palindrome Integer', () => {
  test('returns true for positive palindrome number', () => {
    expect(NLeet.isIntegerPalindrome(121)).toBe(true)
  })

  test('returns false for positive non-palindrome number', () => {
    expect(NLeet.isIntegerPalindrome(123)).toBe(false)
  })

  test('returns false for negative number', () => {
    expect(NLeet.isIntegerPalindrome(-121)).toBe(false)
  })

  test('returns true for single-digit number', () => {
    expect(NLeet.isIntegerPalindrome(7)).toBe(true) // Single-digit numbers are palindromes
  })

  test('returns false for numbers ending in zero', () => {
    expect(NLeet.isIntegerPalindrome(10)).toBe(false) // 10 is not a palindrome
  })

  test('returns true for zero', () => {
    expect(NLeet.isIntegerPalindrome(0)).toBe(true) // Edge case for zero
  })
})

describe('K Most Frequent Elements', () => {
  test('returns top 2 most frequent elements', () => {
    const result = NLeet.kMostFrequent([1, 1, 1, 2, 2, 3], 2)
    expect(result).toEqual([1, 2])
  })

  test('returns top 3 most frequent elements', () => {
    const result = NLeet.kMostFrequent([4, 4, 4, 5, 5, 6, 6, 6, 7], 3)
    expect(result).toEqual([4, 6, 5])
  })

  test('handles single element array', () => {
    const result = NLeet.kMostFrequent([10], 1)
    expect(result).toEqual([10])
  })
})
