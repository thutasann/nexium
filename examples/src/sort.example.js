// @ts-check
const { NSort } = require('nexium')

const arr = [5, 2, 9, 1, 5, 6]

/** Sort Examples */
function sortExamples() {
  console.log('\nSort Examples ==> ')

  const bubbleResult = NSort.bubbleSort(arr)
  console.log('bubbleResult', bubbleResult)

  const quickResult = NSort.quickSort(arr) // [1, 2, 5, 5, 6, 9]
  console.log('quickResult', quickResult)
}

module.exports = { sortExamples }
