// @ts-check
const Benchmark = require('benchmark')
const { addTwoNumbers, subtractTwoNumbers, calculateNthRoot } = require('nexium')

const suite = new Benchmark.Suite()

suite
  .add('Add two numbers', () => {
    addTwoNumbers(10, 20)
  })
  .add('Subtract two numbers', () => {
    subtractTwoNumbers(20, 10)
  })
  .add('Calculate nth root', () => {
    calculateNthRoot(27, 3)
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run()
