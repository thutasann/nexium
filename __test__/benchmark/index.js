const { array_benchmark_test } = require('./array')
const { leetcode_benchmark_test } = require('./leetcode')
const { number_benchmark_test } = require('./number')
const { sort_benchmark_test } = require('./sort')
const { string_benchmark_test } = require('./string')

/** benchmark main fn */
;(async function main() {
  await string_benchmark_test()
  await array_benchmark_test()
  await number_benchmark_test()
  await sort_benchmark_test()
  await leetcode_benchmark_test()
})()
