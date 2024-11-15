import {
  twoSum as twoSumFn,
  longestSubstring as longestSubstringFn,
  isValidParentheses as isValidParenthesesFn,
  isValidAnagram as isValidAnagramFn,
  reverseInteger as reverseIntegerFn,
  isIntegerPalindrome as isIntegerPalindromeFn,
  kMostFrequent as kMostFrequentFn,
} from '../../build/Release/nexium.node'

/** Leetcode Solutions */
export class NLeet {
  /** Two Sum LeetCode Solution */
  static twoSum(nums: number[], target: number): number[] {
    return twoSumFn(nums, target)
  }

  /** Longest Substring Without Repeating Characters  */
  static longestSubstring(str: string): number {
    return longestSubstringFn(str)
  }

  /** Is Valid  Parentheses  */
  static isValidParentheses(str: string): boolean {
    return isValidParenthesesFn(str)
  }

  /**
   * is valid anagram
   * @param s1 - given string 1
   * @param s2 - given string 2
   * @returns { boolean }
   * @example
   * isValidAnagram("anagram", "nagaram") // true
   */
  static isValidAnagram(s1: string, s2: string): boolean {
    return isValidAnagramFn(s1, s2)
  }

  /**
   * reverse integer
   * @param num - given number
   * @example
   * reverseInteger(123) // 321
   * reverseInteger(-123) // -321
   */
  static reverseInteger(num: number): number {
    return reverseIntegerFn(num)
  }

  /**
   * check if number is palindrome
   * @param num - given numer
   * isPalindrome(121) // true
   */
  static isIntegerPalindrome(num: number): boolean {
    return isIntegerPalindromeFn(num)
  }

  /**
   * function to find the k most frequent elements
   * @param nums - give nums array
   * @param k - k
   * @example
   * kMostFrequent([1, 1, 1, 2, 2, 3], 2) // [1,2]
   */
  static kMostFrequent(nums: number[], k: number): number[] {
    return kMostFrequentFn(nums, k)
  }
}
