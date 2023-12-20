import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover background-animation">
      <div className="space-y-4">
        <Link href="/theme-1/index.html" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Theme 1
        </Link>
        <Link href="/theme-2/index.html" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Theme 2
        </Link>
        <Link href="/theme-3/index.html" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Theme 3
        </Link>
        <Link href="/theme-4/index.html" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Theme 4
        </Link>
        <Link href="/theme-5/index.html" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Theme 5
        </Link>
        <Link href="/theme-6/index.html" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Theme 6
        </Link>
        <Link href="/theme-7/index.html" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Theme 7
        </Link>
        <Link href="/theme-8/index.html" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
          Theme 8
        </Link>
      </div>
    </div>
  )
}
