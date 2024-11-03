// @ts-check
const { NNumber } = require('nexium')

/** Numbers Examples */
function numberExamples() {
  console.log('\nNumbers Examples ==> ')

  const clampResult = NNumber.clamp(15, 0, 10)
  console.log('clampResult', clampResult)

  const inRageResult = NNumber.inRange(5, 1, 10)
  console.log('inRageResult', inRageResult)

  const fibonacci = NNumber.fibonacci(50)
  console.log('fibonacci', fibonacci)

  const sum_result = NNumber.sum([-1, -2, 3, 4, 5])
  console.log('sum_result', sum_result)

  const ordinal_result = NNumber.toOrdinal(111)
  console.log('ordinal_result', ordinal_result)

  const random = NNumber.generateRandom(1, 100)
  console.log('random', random)

  const roundTo = NNumber.roundTo(3.14159, 2)
  console.log('roundTo', roundTo)

  const inRange = NNumber.inRange(10, 1, 10)
  console.log('inRange', inRange)
}

module.exports = { numberExamples }
