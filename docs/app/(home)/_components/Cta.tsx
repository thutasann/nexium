'use client'

import Link from 'next/link'
import { FiCopy, FiCheck } from 'react-icons/fi'
import React, { useCallback, useState } from 'react'

function Cta() {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText('npm install nexium@latest')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <div className="text-center flex flex-col md:flex-row items-center gap-2 justify-center">
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/20 text-purple-700 dark:text-purple-300 font-semibold hover:bg-purple-500/10 transition-colors"
      >
        npm install nexium@latest
        {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
      </button>
      <Link
        href="/docs"
        className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
      >
        Get Started
      </Link>
    </div>
  )
}

export default Cta
