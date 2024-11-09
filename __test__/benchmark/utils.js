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

/**
 * Benchmarks a function by executing it multiple times and calculating the average execution time.
 * @param {Function} fn - The function to benchmark.
 * @param {Array<any>} args - The arguments to pass to the function.
 * @param {number} [runs=1000] - The number of times to execute the function for the benchmark.
 * @returns {number | any} - The average execution time in milliseconds.
 */
function benchmark_args(fn, args, runs = 1000, logResult = false) {
  // Warm-up runs to stabilize any JIT effects
  for (let i = 0; i < Math.min(10, runs); i++) {
    try {
      fn(...args)
    } catch (error) {
      console.error('Error during warm-up:', error)
      return null
    }
  }

  let totalDuration = 0n

  for (let i = 0; i < runs; i++) {
    const start = process.hrtime.bigint()
    try {
      fn(...args)
    } catch (error) {
      console.error('Error during benchmarking:', error)
      return null
    }
    const end = process.hrtime.bigint()
    totalDuration += end - start
  }

  const averageDuration = Number(totalDuration / BigInt(runs)) / 1e6 // Convert to milliseconds

  if (logResult) {
    console.log(`Average execution time for ${fn.toString()} over ${runs} runs: ${averageDuration.toFixed(4)} ms`)
  }

  return averageDuration
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

/** function to create unique array @param{ any[] } arr */
function uniqueArray(arr) {
  return arr.filter((item, index, self) => index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(item)))
}

/**
 * Clamps a number within the inclusive range [min, max].
 * @param {number} value - The number to be clamped.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The clamped number.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Generates a random integer between min and max, inclusive.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer between min and max.
 */
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Converts a number to its ordinal form (e.g., 1 to 1st, 2 to 2nd, etc.)
 * @param {number} number - The number to convert.
 * @returns {string} - The ordinal form of the number.
 */
function toOrdinal(number) {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const value = number % 100
  return number + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0])
}

/**
 * Converts a number to a currency string in a specified locale.
 * @param {number} amount - The amount to format.
 * @param {string} locale - The locale string (e.g., 'en-US', 'fr-FR').
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR').
 * @returns {string} - The formatted currency string.
 */
function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount)
}

/**
 * Fibonacci
 * @param {number} n - number
 * @returns {number} - fibonacci number
 */
function fibonacci(n) {
  if (n <= 1) return n

  let a = 0,
    b = 1,
    result = 0

  for (let i = 2; i <= n; i++) {
    result = a + b
    a = b
    b = result
  }

  return result
}

/**
 * Calculate the sum of array of numbers
 * @param {number[]} numbers - the array of nubmers to sum
 * @returns { number } the sum of numbers in the array
 */
function sumArray(numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

/**
 * Count non-repeating elements in an array
 * @param {any[]} arr - The array to count non-repeating elements from
 * @returns {number} - The number of non-repeating elements in the array
 */
function countNonRepeatingElements(arr) {
  const elementCount = new Map()

  for (const item of arr) {
    elementCount.set(item, (elementCount.get(item) || 0) + 1)
  }

  let uniqueCount = 0
  for (const count of elementCount.values()) {
    if (count === 1) {
      uniqueCount++
    }
  }

  return uniqueCount
}

/**
 * bubble sort
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  const n = arr.length
  let swapped

  do {
    swapped = false
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while (swapped)

  return arr
}

/**
 * Quick Sort (Not Optimized one)
 * @param {number[]} array
 */
function quickSort(array) {
  if (array.length <= 1) return array

  const pivot = array[array.length - 1]
  const left = []
  const right = []

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
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
  uniqueArray,
  clamp,
  getRandomInt,
  toOrdinal,
  formatCurrency,
  fibonacci,
  sumArray,
  countNonRepeatingElements,
  bubbleSort,
  quickSort,
}
