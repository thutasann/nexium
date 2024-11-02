// @ts-check
function benchmark(fn, iterations = 100000) {
  const start = performance.now()
  for (let i = 0; i < iterations; i++) {
    fn()
  }
  const end = performance.now()
  return (end - start) / iterations
}

function benchmark_args(fn, args, runs = 1000) {
  const times = []
  for (let i = 0; i < runs; i++) {
    const start = process.hrtime.bigint()
    fn(...args)
    const end = process.hrtime.bigint()
    times.push(Number(end - start) / 1e6) // convert to milliseconds
  }
  return times.reduce((acc, curr) => acc + curr, 0) / runs
}

module.exports = { benchmark, benchmark_args }
