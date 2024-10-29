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

  const matrixA = [
    [1, 2, 3],
    [4, 5, 6],
  ]
  const matrixB = [
    [7, 8],
    [9, 10],
    [11, 12],
  ]
  const matrixResult = NMaths.matrixMultiply(matrixA, matrixB)
  console.log('matrixResult', matrixResult)
}

module.exports = { mathsExamples }
