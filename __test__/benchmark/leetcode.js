// @ts-check
const { NLeet } = require('../../lib')
const { bigUnsortedArray } = require('./utils/constants')
const { updateResult } = require('./utils/update_readme')
const { benchmark_args, bubbleSort, quickSort } = require('./utils/index')
const { twoSum, lengthOfLongestSubstring } = require('./utils/leetcodes')

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

  await updateResult(results, './results/leetcodes.md', 'Leetcode Benchmark')
}

module.exports = { leetcode_benchmark_test }
