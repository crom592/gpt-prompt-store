import { Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">PromptMarket</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/browse" className="text-gray-600 hover:text-gray-900">Browse</Link>
            <Link href="/sell" className="text-gray-600 hover:text-gray-900">Sell</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </nav>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Discover and Share GPT Prompts
        </h1>
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search prompts..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Writing Assistant</h3>
                <p className="text-gray-600 mb-4">Boost your creative writing with AI-powered suggestions and plot ideas.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-600">$4.99</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">&copy; 2023 PromptMarket. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-gray-500 hover:text-gray-900">Terms</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900">Privacy</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

