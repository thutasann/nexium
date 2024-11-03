import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-3xl space-y-6">
        {/* Hero section */}
        <div className="space-y-4">
          <h1 className="text-4xl text-center md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to Nexium Docs
          </h1>
          <p className="text-lg text-center text-fd-muted-foreground">
            Your gateway to building amazing nodejs applications with Nexium
          </p>
        </div>

        {/* CTA section */}
        <div className="text-center">
          <Link
            href="/docs"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  )
}
