'use client';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4 text-[#1F2933] w-full'>
      <div className='md:block text-2xl font-bold'>
        <h1>GREENVALLEY</h1>
      </div>
      <div className='flex w-full md:w-auto justify-between md:justify-end items-center gap-0 md:gap-4'>
        <button className=' x-4 p-2 rounded border-2 hover:text-[#A4DE02]'>
          Start a Campaign
        </button>
        <button className='  px-4 py-2 rounded hover:text-[#A4DE02]'>
          Login/Signup
        </button>
      </div>
    </nav>
  );
}
