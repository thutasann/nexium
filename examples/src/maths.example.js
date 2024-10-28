// @ts-check
const { addTwoNumbers, subtractTwoNumbers, calculateNthRoot, numberFunctions } = require('nexium')

/** Maths Examples */
function mathsExamples() {
  console.log('Maths Examples ==> ')

  const result = addTwoNumbers(4, 3)
  console.log(`The sum is: ${result}`)

  const subtract = subtractTwoNumbers(5, 4)
  console.log('subtract', subtract)

  const squareRootOf4 = calculateNthRoot(4, 2)
  console.log('squareRootOf4', squareRootOf4)

  numberFunctions()
}

module.exports = { mathsExamples }
