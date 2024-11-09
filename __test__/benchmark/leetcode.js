// @ts-check
const { NLeet } = require('../../lib')
const { updateResult } = require('./utils/update_readme')
const { benchmark_args } = require('./utils/index')
const { twoSum, lengthOfLongestSubstring, isValidParentheses, isValidAnagram } = require('./utils/leetcodes_utils')

/** iterations */
const iterations = 1000

/** Leetcode Benchmark Test */
async function leetcode_benchmark_test() {
  console.log('\nLeetcode Benchmark Test ==> ')

  /** Prepare the results array for table @type { any } */
  const results = []

  // ----------- Two Sum
  const nTwoSumTime = benchmark_args(() => NLeet.twoSum([2, 7, 11, 15], 9), [], iterations)
  const jsTwoSumTime = benchmark_args(() => twoSum([2, 7, 11, 15], 9), [], iterations)
  results.push({ Method: 'Nexium Two Sum Number', Time: nTwoSumTime.toFixed(3) })
  results.push({ Method: 'JavaScript Two Sum Number', Time: jsTwoSumTime.toFixed(3) })
  results.push({})

  // ----------- Longest substring without repeating characters
  const nLongestSubstringTime = benchmark_args(() => NLeet.longestSubstring('abcabcbb'), [], iterations)
  const jsLongestSubstringTime = benchmark_args(() => lengthOfLongestSubstring('abcabcbb'), [], iterations)
  results.push({ Method: 'Nexium Longest Substring', Time: nLongestSubstringTime.toFixed(3) })
  results.push({ Method: 'JavaScript Longest Substring', Time: jsLongestSubstringTime.toFixed(3) })
  results.push({})

  // ----------- Valid Parentheses
  const nValidParenthesesTime = benchmark_args(() => NLeet.isValidParentheses('()[]{}'), [], iterations)
  const jsValidParenthesesTime = benchmark_args(() => isValidParentheses('()[]{}'), [], iterations)
  results.push({ Method: 'Nexium Valid Parentheses', Time: nValidParenthesesTime.toFixed(3) })
  results.push({ Method: 'JavaScript Valid Parentheses', Time: jsValidParenthesesTime.toFixed(3) })
  results.push({})

  // ----------- Valid Anagram
  const nValidAnagramTime = benchmark_args(() => NLeet.isValidAnagram('anagram', 'nagaram'), [], iterations)
  const jsValidAnagramTime = benchmark_args(() => isValidAnagram('anagram', 'nagaram'), [], iterations)
  results.push({ Method: 'Nexium Valid Anagram', Time: nValidAnagramTime.toFixed(3) })
  results.push({ Method: 'JavaScript Valid Anagram', Time: jsValidAnagramTime.toFixed(3) })
  results.push({})

  await updateResult(results, './results/leetcodes.md', 'Leetcode Benchmark')
}

module.exports = { leetcode_benchmark_test }
