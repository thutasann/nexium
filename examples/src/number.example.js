// @ts-check
const { NNumber } = require('nexium')

/** Numbers Examples */
function numberExamples() {
  console.log('\nNumbers Examples ==> ')

  const clampResult = NNumber.clamp(15, 0, 10)
  console.log('clampResult', clampResult)

  const inRageResult = NNumber.inRange(5, 1, 10)
  console.log('inRageResult', inRageResult)
}

module.exports = { numberExamples }
