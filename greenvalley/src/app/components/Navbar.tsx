'use client';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4 bg-gray-800 text-white w-full'>
      <div className='hidden md:block text-2xl font-bold'>
        <h1>GreenValley</h1>
      </div>
      <div className='flex w-full md:w-auto justify-between md:justify-end items-center gap-0 md:gap-4'>
        <button className='bg-green-500 text-white px-4 py-2 rounded'>
          Start a Campaign
        </button>
        <button className='bg-gray-700 text-white px-4 py-2 rounded'>
          Login/Signup
        </button>
      </div>
    </nav>
  );
}
