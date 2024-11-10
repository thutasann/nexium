// @ts-check
const { array_benchmark_test } = require('./array.benchmark')
const { leetcode_benchmark_test } = require('./leetcode.benchmark')
const { number_benchmark_test } = require('./number.benchmark')
const { sort_benchmark_test } = require('./sort.benchmark')
const { string_benchmark_test } = require('./string.benchmark')

/** benchmark main fn */
;(async function main() {
  await string_benchmark_test()
  await array_benchmark_test()
  await number_benchmark_test()
  await sort_benchmark_test()
  await leetcode_benchmark_test()
})()
