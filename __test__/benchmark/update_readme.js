// @ts-check
const fs = require('fs').promises
const path = require('path')

/** update readme whenever there are changes in the result */
async function updateResult(results, readmePath, topic = 'Benchmark') {
  console.table(results) // Log results to the console

  try {
    const directory = path.dirname(readmePath)
    await fs.mkdir(directory, { recursive: true }) // Create the directory if it doesn't exist

    await unlinkFilePath(readmePath) // Delete existing file if it exists

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
    console.log(`README updated successfully with new ${topic} results. ✅\n`)
  } catch (error) {
    console.error('Error updating README:', error)
  }
}

/** Unlink file path @private */
async function unlinkFilePath(readmePath) {
  try {
    await fs.unlink(readmePath)
    console.log('Existing README unlinked 🗑️.\n')
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
}

module.exports = { updateResult }
