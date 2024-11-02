// @ts-check
const { NArray } = require('../../lib')
const { chunkArrayJs, random_users, benchmark_args } = require('./utils')
const { updateReadme } = require('./update_readme')

/** Array Benchmark Test */
function array_benchmark_test() {
  console.log('\nArray Benchmark Test ==> ')

  /** Prepare the results array for table @type { any } */
  const results = []

  // ----------- Chunk Array Benchmarks
  const nApiTime = benchmark_args(() => NArray.chunkArray(random_users, 100), [], 100)
  const jsTime = benchmark_args(() => chunkArrayJs(random_users, 100), [], 100)
  results.push({ Method: 'Nexium chunkArray', Time: nApiTime.toFixed(3) })
  results.push({ Method: 'JavaScript chunkArray', Time: jsTime.toFixed(3) })
  results.push([])

  console.table(results)
  updateReadme(results, './results/array.md')
    .then(() => {})
    .catch(() => {})
}

module.exports = { array_benchmark_test }
