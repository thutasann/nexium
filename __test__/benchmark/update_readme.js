// @ts-check
const fs = require('fs').promises
const path = require('path')
const prettier = require('prettier')

/**
 * @typedef {Object} BenchmarkResult
 * @property {string} [Method] - The name of the benchmarked method (optional).
 * @property {string} [Time] - The time taken by the method in seconds (optional).
 */

/**
 * @typedef {Array<BenchmarkResult>} BenchmarkResultsArray
 */

/**
 * Updates the README.md file with the given benchmark results.
 * This function appends to existing benchmark results without duplicating the header.
 * @param {Array<{ Method?: string, Time?: string }>} results - The benchmark results array.
 * @param {string} readmePath - The path to the README file (default: './README.md').
 * @param {string} topic - The benchmark topic to be updated
 */
async function updateResult(results = [], readmePath, topic = 'Benchmark') {
  console.table(results)

  try {
    const directory = path.dirname(readmePath)
    await fs.mkdir(directory, { recursive: true }) // Create the directory if it doesn't exist

    await unlinkFilePath(readmePath)

    // Prepare the table header
    const header = `# ${topic} Results\n\n| Method                | Time (seconds) |\n| --------------------- | -------------- |\n`

    // Prepare the rows based on results
    const rows = results
      .map((result) => {
        // Check if 'Method' and 'Time' properties are present
        if (!result.Method || !result.Time) {
          return '| -                     | -              |' // Empty row
        }
        return `| ${result.Method}      | ${result.Time}      |`
      })
      .join('\n')

    const content = `${header}${rows}\n`

    // Write the new content to README
    await fs.writeFile(readmePath, content, 'utf8') // Specify encoding

    // Format the file with Prettier
    const formatted = await prettier.format(content, { parser: 'markdown' })
    await fs.writeFile(readmePath, formatted, 'utf8')
    console.log(`README updated and formatted with Prettier successfully with new ${topic} results. ✅\n`)
  } catch (error) {
    console.error('Error updating README:', error)
  }
}

/** Unlink file path
 * @param { string } readmePath - markdown result file path
 */
async function unlinkFilePath(readmePath) {
  try {
    await fs.unlink(readmePath)
    console.log('Existing README unlinked 🗑️.\n')
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
}

module.exports = { updateResult }
