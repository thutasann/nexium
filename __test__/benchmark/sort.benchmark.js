// @ts-check
const { NSort } = require('../../lib')
const { bigUnsortedArray } = require('./utils/constants')
const { updateResult } = require('./utils/update_readme')
const { benchmark_args, bubbleSort, quickSort } = require('./utils/index')

/** iterations */
const iterations = 100

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

  // ----------- Quick Sort
  const nApiQuickSortTime = benchmark_args(() => NSort.quickSort(bigUnsortedArray), [], iterations)
  const jsQuickSortTime = benchmark_args(() => quickSort(bigUnsortedArray), [], iterations)
  results.push({ Method: 'Nexium Quick Sort Number', Time: nApiQuickSortTime.toFixed(3) })
  results.push({ Method: 'JavaScript Quick Sort Number', Time: jsQuickSortTime.toFixed(3) })

  await updateResult(results, './results/sort.md', 'Sort Benchmark')
}

module.exports = { sort_benchmark_test }
