// @ts-check
const { NNumber } = require('../../lib')
const { updateResult } = require('./update_readme')
const { benchmark_args, clamp, getRandomInt, toOrdinal, sumArray } = require('./utils/index')

/** iterations */
const iterations = 1000

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

  // ---------- Random Number Generate Benchmark
  const nApiRandomGenerateTime = benchmark_args(() => NNumber.generateRandom(1, 10), [], iterations)
  const jsRandomGenerateTime = benchmark_args(() => getRandomInt(1, 10), [], iterations)
  results.push({ Method: 'Nexium Random Genrate Number', Time: nApiRandomGenerateTime.toFixed(3) })
  results.push({ Method: 'JavaScript Random Genrate Number', Time: jsRandomGenerateTime.toFixed(3) })
  results.push({})

  // ---------- Convert to Ordinal String Benchmark
  const nApiOrdinalTime = benchmark_args(() => NNumber.toOrdinal(101), [], iterations)
  const jsOrdinalTime = benchmark_args(() => toOrdinal(101), [], iterations)
  results.push({ Method: 'Nexium Ordinal String', Time: nApiOrdinalTime.toFixed(3) })
  results.push({ Method: 'JavaScript Ordinal String', Time: jsOrdinalTime.toFixed(3) })
  results.push({})

  // ---------- Fibonacci Benchmark
  const nApiFiboTime = benchmark_args(() => NNumber.fibonacci(50), [], iterations)
  const jsFiboTime = benchmark_args(() => toOrdinal(50), [], iterations)
  results.push({ Method: 'Nexium Fibonacci', Time: nApiFiboTime.toFixed(3) })
  results.push({ Method: 'JavaScript Fibonacci', Time: jsFiboTime.toFixed(3) })
  results.push({})

  // ---------- Sum Num arrays Benchmark
  const nApiSumNumsTime = benchmark_args(() => NNumber.sum([1, 2, 3, 4, 5]), [], iterations)
  const jsSumNumsTime = benchmark_args(() => sumArray([1, 2, 3, 4, 5]), [], iterations)
  results.push({ Method: 'Nexium Sum Nums Array', Time: nApiSumNumsTime.toFixed(3) })
  results.push({ Method: 'JavaScript Sum Nums Array', Time: jsSumNumsTime.toFixed(3) })
  results.push({})

  await updateResult(results, './results/number.md', 'Number Benchmark')
}

module.exports = { number_benchmark_test }
