// @ts-check
const { NString } = require('nexium')

/** String Examples */
function stringExamples() {
  console.log('\nString Examples ==> ')

  const trimedStart = NString.trimStart('    Hello World')
  console.log(trimedStart)

  const trimedEnd = NString.trimEnd('Hello World    ')
  console.log(trimedEnd)
}

module.exports = { stringExamples }
