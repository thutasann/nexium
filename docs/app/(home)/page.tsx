import Link from 'next/link'
import Hero from './_components/Hero'
import Cta from './_components/Cta'
import Features from './_components/Features'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-3xl space-y-6">
        <Hero />
        <Cta />
        <Features />
      </div>
    </main>
  )
}
