// @ts-check

/** benchmark util */
function benchmark(fn, iterations = 100000) {
  const start = performance.now()
  for (let i = 0; i < iterations; i++) {
    fn()
  }
  const end = performance.now()
  return (end - start) / iterations
}

/** benchmark with args util */
function benchmark_args(fn, args, runs = 1000) {
  const times = []
  for (let i = 0; i < runs; i++) {
    const start = process.hrtime.bigint()
    fn(...args)
    const end = process.hrtime.bigint()
    times.push(Number(end - start) / 1e6) // convert to milliseconds
  }
  return times.reduce((acc, curr) => acc + curr, 0) / runs
}

/** Vanilla JavaScript UUID generator */
function generateUUIDVanilla() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/** Generate an array of 800 user objects */
const random_users = Array.from({ length: 800 }, (_, i) => ({
  id: i + 1,
  name: `User${i + 1}`,
}))

/** JavaScript chunkArray benchmark */
function chunkArrayJs(arr, chunkSize) {
  const result = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize))
  }
  return result
}

/** slugify function */
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

/** end log */
function endLog() {
  console.log('---------------------------------')
}

/** reverse string  */
function reverseString(str) {
  return str.split('').reverse().join('')
}

/**
 * check if string is palindrome
 * @param {string} str
 */
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const reversedStr = cleanedStr.split('').reverse().join('')
  return cleanedStr === reversedStr
}

module.exports = {
  generateUUIDVanilla,
  random_users,
  chunkArrayJs,
  slugify,
  endLog,
  reverseString,
  benchmark,
  benchmark_args,
  isPalindrome,
}
