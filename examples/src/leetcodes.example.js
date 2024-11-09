// @ts-check
const { NLeet } = require('nexium')

/** Leetcodes Examples */
function leetcodeExamples() {
  console.log('\nLeetcode Examples ==> ')

  const twoSumResult = NLeet.twoSum([2, 7, 11, 15], 9) // [0, 1]
  console.log('twoSumResult', twoSumResult)

  const longestSubString = NLeet.longestSubstring('abcabcbb') // 3
  console.log('longestSubString', longestSubString)

  const isvalidParentheses = NLeet.isValidParentheses('()[]{}') // true
  console.log('isvalidParentheses', isvalidParentheses)

  const isValidAnagram = NLeet.isValidAnagram('anagram', 'nagaram') // true
  console.log('isValidAnagram', isValidAnagram)
}

module.exports = { leetcodeExamples }
