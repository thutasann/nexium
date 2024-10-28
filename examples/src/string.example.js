// @ts-check
const { trimStart } = require('nexium')

/** String Examples */
function stringExamples() {
  console.log('\nString Examples ==> ')

  const trimedStart = trimStart('    Hello World')
  console.log(trimedStart)
}

module.exports = { stringExamples }
