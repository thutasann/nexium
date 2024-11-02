// @ts-check
const { NArray } = require('../lib')

// Generate an array of 800 user objects
const users = Array.from({ length: 800 }, (_, i) => ({
  id: i + 1,
  name: `User${i + 1}`,
}))
const chunkSize = 100

// N-API function benchmark
console.time('N-API chunkArray')
const nApiResult = NArray.chunkArray(users, chunkSize)
console.timeEnd('N-API chunkArray')

// JavaScript function benchmark
function chunkArrayJs(arr, chunkSize) {
  const result = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize))
  }
  return result
}

console.time('JavaScript chunkArray')
const jsResult = chunkArrayJs(users, chunkSize)
console.timeEnd('JavaScript chunkArray')

// Ensure all methods produce identical results
console.log('Results match:', JSON.stringify(nApiResult) === JSON.stringify(jsResult))
