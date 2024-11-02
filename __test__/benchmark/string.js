// @ts-check
const { NUUId, NString } = require('../../lib')
const { generateUUIDVanilla, slugify, endLog, reverseString, benchmark, benchmark_args } = require('./utils')

/** iterations */
const iterations = 100000

/** String Benchmark Test */
function string_benchmark_test() {
  console.log('\nString Benchmark Test ==> ')

  // Prepare the results array for table
  const results = []

  // ----------- NUUID Benchmarks
  const nUUIDTime = benchmark(NUUId.generate, iterations)
  const jsUUIDTime = benchmark(generateUUIDVanilla, iterations)
  results.push({ Method: 'N-API UUID generation', Time: nUUIDTime.toFixed(6) })
  results.push({ Method: 'JavaScript UUID generation', Time: jsUUIDTime.toFixed(6) })
  results.push([])

  // ----------- Slugify Benchmarks
  const nSlugifyTime = benchmark_args(() => NString.slugify('Hello World', true), [], iterations)
  const jsSlugifyTime = benchmark_args(() => slugify('Hello World'), [], iterations)
  results.push({ Method: 'N-API Slugify', Time: nSlugifyTime.toFixed(6) })
  results.push({ Method: 'JavaScript Slugify', Time: jsSlugifyTime.toFixed(6) })
  results.push([])

  // ----------- Reverse String Benchmarks
  const nReverseStringTime = benchmark_args(() => NString.reverse('Hello World'), [], iterations)
  const jsReverseStringTime = benchmark_args(() => reverseString('Hello World'), [], iterations)
  results.push({ Method: 'N-API Reverse', Time: nReverseStringTime.toFixed(6) })
  results.push({ Method: 'JavaScript Reverse', Time: jsReverseStringTime.toFixed(6) })
  results.push([])

  console.table(results)
}

module.exports = { string_benchmark_test }