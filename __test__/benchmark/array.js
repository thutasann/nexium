// @ts-check
const { NArray } = require('../../lib')
const { chunkArrayJs, random_users, benchmark_args, uniqueArray } = require('./utils')
const { updateResult } = require('./update_readme')

/** iterations */
const iterations = 100
const num_arr = [1, 2, 3, 4, 3, 2, 1]

/** Array Benchmark Test */
async function array_benchmark_test() {
  console.log('\nArray Benchmark Test ==> ')

  /** Prepare the results array for table @type { any } */
  const results = []

  // ----------- Chunk Array Benchmarks
  const nApiChunkTime = benchmark_args(() => NArray.chunkArray(random_users, 100), [], iterations)
  const jsChunkTime = benchmark_args(() => chunkArrayJs(random_users, 100), [], iterations)
  results.push({ Method: 'Nexium chunkArray', Time: nApiChunkTime.toFixed(3) })
  results.push({ Method: 'JavaScript chunkArray', Time: jsChunkTime.toFixed(3) })
  results.push({})

  // ----------- Unique Array (Number) Benchmarks
  const nApiUniqueArrNumberTime = benchmark_args(() => NArray.uniqueArray(num_arr), [], iterations)
  const jsUniqueArrayNumberTime = benchmark_args(() => uniqueArray(num_arr), [], iterations)
  results.push({ Method: 'Nexium uniqueArray', Time: nApiUniqueArrNumberTime.toFixed(3) })
  results.push({ Method: 'JavaScript uniqueArray', Time: jsUniqueArrayNumberTime.toFixed(3) })
  results.push({})

  await updateResult(results, './results/array.md', 'Array Benchmark')
}

module.exports = { array_benchmark_test }
