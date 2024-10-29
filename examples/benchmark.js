// @ts-check
const Benchmark = require('benchmark')
const { NMaths, NString } = require('nexium')

const suite = new Benchmark.Suite()

suite
  .add('Add two numbers', () => {
    NMaths.addTwoNumbers(10, 20)
  })
  .add('Subtract two numbers', () => {
    NMaths.subtractTwoNumbers(20, 10)
  })
  .add('Calculate nth root', () => {
    NMaths.calculateNthRoot(27, 3)
  })
  .add('Trim start', () => {
    NString.trimStart('      Hello world')
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run()
