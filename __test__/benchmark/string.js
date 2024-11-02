// @ts-check
const { NUUId } = require('../../lib')
const { benchmark } = require('./benchmark_fn')

/** @private Vanilla JavaScript UUID generator using `crypto.randomUUID` */
function generateUUIDVanilla() {
  return crypto.randomUUID()
}

/** String Benchmark Test */
function string_benchmark_test() {
  console.log('\nString Benchmark Test ==> ')

  // Run Benchmarks
  const iterations = 100000
  const nApiTime = benchmark(NUUId.generate, iterations)
  const vanillaTime = benchmark(generateUUIDVanilla, iterations)

  console.log(`N-API UUID generation time: ${nApiTime.toFixed(6)} ms`)
  console.log(`Javascript UUID generation time: ${vanillaTime.toFixed(6)} ms\n`)
}

module.exports = { string_benchmark_test }
