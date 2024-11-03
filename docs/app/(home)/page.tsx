import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl md:text-3xl font-bold">Welcome to Nexium Docs</h1>
      <p className="text-fd-muted-foreground">
        Dive into our full documentation! Start by exploring{' '}
        <Link href="/docs" className="text-fd-foreground font-semibold underline">
          /docs
        </Link>{' '}
        and unlock everything Nexium has to offer.
      </p>
    </main>
  )
}
