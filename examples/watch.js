const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

const directoryToWatch = path.join(__dirname, 'src')
let childProcess

// Function to start the child process
function startScript() {
  if (childProcess) {
    childProcess.kill()
  }

  childProcess = spawn('node', ['index.js'], { stdio: 'inherit' }) // Change "app.js" to your main file
}

// Watch the entire src directory for changes
fs.watch(directoryToWatch, { recursive: true }, (event, filename) => {
  if (filename && event === 'change') {
    console.log(`File ${filename} changed, restarting...`)
    startScript()
  }
})

// Start the script initially
startScript()
