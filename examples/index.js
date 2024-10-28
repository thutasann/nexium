// @ts-check
const { addTwoNumbers, subtractTwoNumbers, calculateNthRoot, trimStart, numberFunctions } = require('nexium')

const result = addTwoNumbers(4, 3)
console.log(`The sum is: ${result}`)

const subtract = subtractTwoNumbers(5, 4)
console.log('subtract', subtract)

const squareRootOf4 = calculateNthRoot(4, 2)
console.log('squareRootOf4', squareRootOf4)

const trimedStart = trimStart('    Hello World')
console.log(trimedStart)

numberFunctions()
