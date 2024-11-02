// @ts-check
const { NArray } = require('../../lib')
const { chunkArrayJs, random_users, benchmark_args } = require('./utils')

/** Array Benchmark Test */
function array_benchmark_test() {
  console.log('\nArray Benchmark Test ==> ')

  // Prepare the data for the table
  const results = []

  // ----------- Chunk Array Benchmarks
  const nApiTime = benchmark_args(() => NArray.chunkArray(random_users, 100), [], 100)
  const jsTime = benchmark_args(() => chunkArrayJs(random_users, 100), [], 100)
  results.push({ Method: 'N-API chunkArray', Time: nApiTime.toFixed(3) })
  results.push({ Method: 'JavaScript chunkArray', Time: jsTime.toFixed(3) })
  results.push([])

  // Display the results in a table format
  console.table(results)
}

module.exports = { array_benchmark_test }
