// @ts-check
const { NArray } = require('../../lib')
const { chunkArrayJs, random_users, benchmark_args, uniqueArray, countNonRepeatingElements } = require('./utils')
const { updateResult } = require('./update_readme')
const { bigNestedArray } = require('./constants')

/** iterations */
const iterations = 100
const num_arr = [1, 2, 3, 4, 3, 2, 1]
const obj_arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
]

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
  results.push({ Method: 'Nexium uniqueArray Number', Time: nApiUniqueArrNumberTime.toFixed(3) })
  results.push({ Method: 'JavaScript uniqueArray Number', Time: jsUniqueArrayNumberTime.toFixed(3) })
  results.push({})

  // ----------- Unique Array (Arr Object) Benchmarks
  const nApiUniqueArrObjTime = benchmark_args(() => NArray.uniqueArray(bigNestedArray), [], iterations)
  const jsUniqueArrayObjTime = benchmark_args(() => uniqueArray(bigNestedArray), [], iterations)
  results.push({ Method: 'Nexium uniqueArray ArrObj', Time: nApiUniqueArrObjTime.toFixed(3) })
  results.push({ Method: 'JavaScript uniqueArray ArrObj', Time: jsUniqueArrayObjTime.toFixed(3) })
  results.push({})

  // ----------- Count Non Repeating (str, number) Benchmarks
  const nApiCountNonRepeatingTime = benchmark_args(
    () => NArray.countNonRepeating(['a', 'b', 'b', 'c', 'd', 'd', 'e'], 'string'),
    [],
    iterations,
  )
  const jsCountNonRepeatingTime = benchmark_args(
    () => countNonRepeatingElements(['a', 'b', 'b', 'c', 'd', 'd', 'e']),
    [],
    iterations,
  )
  results.push({ Method: 'Nexium countNonRepeating Number', Time: nApiCountNonRepeatingTime.toFixed(3) })
  results.push({ Method: 'JavaScript countNonRepeating Number', Time: jsCountNonRepeatingTime.toFixed(3) })
  results.push({})

  await updateResult(results, './results/array.md', 'Array Benchmark')
}

module.exports = { array_benchmark_test }
