// @ts-check
const { NMaths } = require('nexium')

/** Maths Examples */
function mathsExamples() {
  console.log('Maths Examples ==> ')

  const result = NMaths.addTwoNumbers(4, 3)
  console.log(`The sum is: ${result}`)

  const subtract = NMaths.subtractTwoNumbers(5, 4)
  console.log('subtract', subtract)

  const squareRootOf4 = NMaths.calculateNthRoot(4, 2)
  console.log('squareRootOf4', squareRootOf4)
}

module.exports = { mathsExamples }
