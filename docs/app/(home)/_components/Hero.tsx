import React from 'react'

function Hero() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl text-center md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Welcome to Nexium Docs
      </h1>

      {/* Banner paragraph */}
      <div className="max-w-3xl mx-auto">
        <div className="text-base text-center text-muted-foregroundrounded-lg p-6">
          <strong>Nexium</strong> is a cutting-edge Node.js package that brings advanced data structures and powerful
          utility functions to your Nodejs applications, all powered by native C for optimal performance. <br />
          <em className="block mt-3 text-sm italic">
            "Your gateway to building amazing nodejs applications with Nexium"
          </em>
        </div>
      </div>
    </div>
  )
}

export default Hero
