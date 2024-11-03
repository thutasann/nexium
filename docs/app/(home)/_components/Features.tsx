import React from 'react'

function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
      <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">High-Performance Utilities</h3>
        <p className="text-muted-foreground">
          Leverage fast utility functions built in C, ensuring your applications run smoother and faster.
        </p>
      </div>

      <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Seamless TypeScript Support</h3>
        <p className="text-muted-foreground">
          Enjoy full TypeScript support, allowing for type-safe code and improved developer experience.
        </p>
      </div>

      <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="font-semibold mb-2 text-cyan-700 dark:text-cyan-300">Advanced Data Structures</h3>
        <p className="text-muted-foreground">
          Experience data structures that JavaScript doesn't natively provide, enhancing your coding capabilities.
        </p>
      </div>
    </div>
  )
}

export default Features
