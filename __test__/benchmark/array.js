// @ts-check
const { NArray } = require('../../lib')
const { benchmark_args } = require('./benchmark_fn')

// Generate an array of 800 user objects
const users = Array.from({ length: 800 }, (_, i) => ({
  id: i + 1,
  name: `User${i + 1}`,
}))
const chunkSize = 100

/** Array Benchmark Test */
function array_benchmark_test() {
  console.log('\nArray Benchmark Test ==> ')

  // N-API chunkArray benchmark
  const nApiTime = benchmark_args(() => NArray.chunkArray(users, chunkSize), [], 100)
  console.log(`N-API chunkArray: ${nApiTime.toFixed(3)} ms`)

  // JavaScript chunkArray benchmark
  function chunkArrayJs(arr, chunkSize) {
    const result = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize))
    }
    return result
  }

  const jsTime = benchmark_args(() => chunkArrayJs(users, chunkSize), [], 100)
  console.log(`JavaScript chunkArray: ${jsTime.toFixed(3)} ms`)

  // Ensure all methods produce identical results
  const nApiResult = NArray.chunkArray(users, chunkSize)
  const jsResult = chunkArrayJs(users, chunkSize)
  console.log('Results match:', JSON.stringify(nApiResult) === JSON.stringify(jsResult))
}

module.exports = { array_benchmark_test }
