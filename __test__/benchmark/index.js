const { array_benchmark_test } = require('./array')
const { number_benchmark_test } = require('./number')
const { string_benchmark_test } = require('./string')

/** benchmark main fn */
;(async function main() {
  await string_benchmark_test()
  await array_benchmark_test()
  await number_benchmark_test()
})()
