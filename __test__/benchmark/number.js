// @ts-check
const { NNumber } = require('../../lib')
const { updateResult } = require('./update_readme')
const { benchmark_args, clamp } = require('./utils')

/** iterations */
const iterations = 100

/** Number Benchmark Test */
async function number_benchmark_test() {
  console.log('\nNumber Benchmark Test ==> ')

  /** Prepare the results array for table @type { any } */
  const results = []

  // ----------- Number Clamp Benchmark
  const nApiClampTime = benchmark_args(() => NNumber.clamp(15, 0, 10), [], iterations)
  const jsClampTime = benchmark_args(() => clamp(15, 0, 10), [], iterations)
  results.push({ Method: 'Nexium clampNumber', Time: nApiClampTime.toFixed(3) })
  results.push({ Method: 'JavaScript clampNumber', Time: jsClampTime.toFixed(3) })
  results.push({})

  await updateResult(results, './results/array.md', 'Array Benchmark')
}

module.exports = { number_benchmark_test }
