// @ts-check
const { NString } = require('nexium')

/** String Examples */
function stringExamples() {
  console.log('\nString Examples ==> ')

  const trimedStart = NString.trimStart('    Hello World')
  console.log(trimedStart)

  const trimedEnd = NString.trimEnd('Hello World    ')
  console.log(trimedEnd)

  console.log('isPalindrome true -> ', NString.isPalindrome('madam')) // true
  console.log('isPalindrome false ->', NString.isPalindrome('hello')) // false
}

module.exports = { stringExamples }
