// @ts-check
const { NSort } = require('../../lib')
const { bigUnsortedArray } = require('./constants')
const { updateResult } = require('./update_readme')
const { benchmark_args, bubbleSort } = require('./utils')

/** iterations */
const iterations = 1000

/** Sort Benchmark Test */
async function sort_benchmark_test() {
  console.log('\nSort Benchmark Test ==> ')

  /** Prepare the results array for table @type { any } */
  const results = []

  // ----------- Bubble Sort
  const nApiBubbleSortTime = benchmark_args(() => NSort.bubbleSort(bigUnsortedArray), [], iterations)
  const jsBubbleSortTime = benchmark_args(() => bubbleSort(bigUnsortedArray), [], iterations)
  results.push({ Method: 'Nexium Bubble Sort Number', Time: nApiBubbleSortTime.toFixed(3) })
  results.push({ Method: 'JavaScript Bubble Sort Number', Time: jsBubbleSortTime.toFixed(3) })
  results.push({})

  await updateResult(results, './results/sort.md', 'Sort Benchmark')
}

module.exports = { sort_benchmark_test }
