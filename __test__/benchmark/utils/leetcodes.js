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

module.exports = { twoSum, lengthOfLongestSubstring }
