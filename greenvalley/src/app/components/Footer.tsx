'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          <div>
            <h3 className="font-bold mb-2 text-lg">About</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">How it works</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-lg">Support</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-lg">More</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline"></a>Blog</li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-4 text-center text-sm text-gray-400">
          Copyright © 2025 GreenValley
        </div>

      </div>
    </footer>
  )
}