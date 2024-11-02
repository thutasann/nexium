// @ts-check
const fs = require('fs').promises
const path = require('path')

/** update readme whenever there are changes in the result */
async function updateReadme(results, readmePath) {
  try {
    const directory = path.dirname(readmePath)
    await fs.mkdir(directory, { recursive: true })

    await unlinkFilePath(readmePath)

    // Prepare the table header and rows
    const header = `# Benchmark Results\n\n| Method                | Time (seconds) |\n| --------------------- | -------------- |\n`
    const rows = results.map((result) => `| ${result.Method} | ${result.Time} |`).join('\n')

    const content = `${header}${rows}\n`

    // Write the new content to README
    await fs.writeFile(readmePath, content)
    console.log('README updated successfully with new benchmark results. ✅')
  } catch (error) {
    console.error('Error updating README:', error)
  }
}

/** unlink file path */
async function unlinkFilePath(readmePath) {
  try {
    await fs.unlink(readmePath)
    console.log('Existing README deleted.')
  } catch (err) {
    if (err.code !== 'ENOENT') throw err // Ignore the error if the file doesn't exist
  }
}

module.exports = { updateReadme }
