'use client'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white w-full">
      <div className="text-2xl font-bold">
        GreenValley
      </div>
      <div className="flex gap-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Start a Campaign
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          Login/Signup
        </button>
      </div>
    </nav>
  )
}