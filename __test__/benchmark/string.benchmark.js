// @ts-check
const { NUUId, NString } = require('../../lib')
const { updateResult } = require('./utils/update_readme')
const {
  generateUUIDVanilla,
  slugify,
  reverseString,
  benchmark,
  benchmark_args,
  isPalindrome,
  generatePassword,
} = require('./utils/index')

/** iterations */
const iterations = 100000

/** String Benchmark Test */
async function string_benchmark_test() {
  console.log('\nString Benchmark Test ==> ')

  /** Prepare the results array for table @type { any } */
  const results = []

  // ----------- NUUID Benchmarks
  const nUUIDTime = benchmark(NUUId.generate, iterations)
  const jsUUIDTime = benchmark(generateUUIDVanilla, iterations)
  results.push({ Method: 'Nexium UUID generation', Time: nUUIDTime.toFixed(6) })
  results.push({ Method: 'JavaScript UUID generation', Time: jsUUIDTime.toFixed(6) })
  results.push({})

  // ----------- Slugify Benchmarks
  const nSlugifyTime = benchmark_args(() => NString.slugify('Hello World', true), [], iterations)
  const jsSlugifyTime = benchmark_args(() => slugify('Hello World'), [], iterations)
  results.push({ Method: 'Nexium Slugify', Time: nSlugifyTime.toFixed(6) })
  results.push({ Method: 'JavaScript Slugify', Time: jsSlugifyTime.toFixed(6) })
  results.push({})

  // ----------- Reverse String Benchmarks
  const nReverseStringTime = benchmark_args(() => NString.reverse('Hello World'), [], iterations)
  const jsReverseStringTime = benchmark_args(() => reverseString('Hello World'), [], iterations)
  results.push({ Method: 'Nexium Reverse', Time: nReverseStringTime.toFixed(6) })
  results.push({ Method: 'JavaScript Reverse', Time: jsReverseStringTime.toFixed(6) })
  results.push({})

  // ----------- Palindrome String Benchmarks
  const nPalindromTime = benchmark_args(() => NString.isPalindrome('madam'), [], iterations)
  const jsPalindromeTime = benchmark_args(() => isPalindrome('madam'), [], iterations)
  results.push({ Method: 'Nexium Palindrome', Time: nPalindromTime.toFixed(6) })
  results.push({ Method: 'JavaScript Palindrome', Time: jsPalindromeTime.toFixed(6) })
  results.push({})

  // ----------- Palindrome String Benchmarks
  const nPasswordTime = benchmark_args(() => NString.generatePassword(12), [], iterations)
  const jsPasswordTime = benchmark_args(() => generatePassword(12), [], iterations)
  results.push({ Method: 'Nexium Password Time', Time: nPasswordTime.toFixed(6) })
  results.push({ Method: 'JavaScript Password Time', Time: jsPasswordTime.toFixed(6) })
  results.push({})

  await updateResult(results, './results/string.md', 'String Benchmark')
}

module.exports = { string_benchmark_test }
