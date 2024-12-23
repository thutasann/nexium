// @ts-check

/**
 * two sum problem
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum(nums, target) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (map[complement] !== undefined) {
      return [map[complement], i]
    }

    map[nums[i]] = i
  }

  return null
}

/**
 * Longest Substring without repeating characters
 * @param {string} s - given strign
 * @returns { number } maxLength
 */
function lengthOfLongestSubstring(s) {
  let maxLength = 0
  let left = 0
  const charSet = new Set()

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[right])
      left++
    }

    charSet.add(s[right])

    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

/**
 * Is Valid Parentheses
 * @param { string } s - given string
 */
function isValidParentheses(s) {
  /** @type { string[] } */
  const stack = []

  const matchingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
    } else if (matchingBrackets[char]) {
      if (stack.pop() !== matchingBrackets[char]) {
        return false
      }
    }
  }
}

/**
 * is anagram
 * @param {string} s1 - given string 1
 * @param {string} s2 - give string 2
 * @returns { boolean }
 */
function isValidAnagram(s1, s2) {
  if (s1.length !== s2.length) return false

  const charCount = {}

  for (const char of s1) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (const char of s2) {
    // character not found or mismatched frequency
    if (!charCount[char]) return false
    charCount[char]--
  }

  // all character frequencies should be zero if they are anagrams
  return true
}

/**
 * reverse integer
 * @param {number} x - given number
 */
function reverseInteger(x) {
  const limit = 2 ** 31 // 32-bit signed integer limit
  let reversed = 0

  while (x !== 0) {
    const digit = x % 10
    // @ts-ignore
    x = parseInt(x / 10)

    if (reversed > (limit - 1) / 10 || reversed < -limit / 10) return 0
    reversed = reversed * 10 + digit
  }

  return reversed
}

/**
 * check if given number is palindrome or not
 * @param {number} num
 * @returns { boolean }
 */
function isIntegerPalindrome(num) {
  if (num < 0) return false

  const str = num.toString()
  const reversed = str.split(' ').reverse().join('')
  return str === reversed
}

/**
 *  K most frequent elements in an array,
 * @param {Array<number>} nums
 * @param {number} k
 * @returns { number[] }
 */
function topKFrequent(nums, k) {
  const freqMap = new Map()
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }

  const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1])

  return sorted.slice(0, k).map(([num]) => num)
}

module.exports = {
  twoSum,
  lengthOfLongestSubstring,
  isValidParentheses,
  isValidAnagram,
  reverseInteger,
  isIntegerPalindrome,
  topKFrequent,
}
