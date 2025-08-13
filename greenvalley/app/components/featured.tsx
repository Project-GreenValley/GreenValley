'use client';
import React from 'react';
import { FaRegImage } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
const featured = () => {
  return (
    <main className='w-screen h-screen p-4 '>
      <div className='w-full h-full'>
        <h1 className='font-bold text-2xl text-[#1e3f4b]'>
          Support causes that matter to you
        </h1>
        <div className='flex my-3 gap-1 items-center w-full h-8'>
          <motion.button className='w-1/3 p-1 border-1 rounded-lg'>
            Near you
          </motion.button>
          <div className='flex w-2/3 h-full items-center justify-center'>
            <MdKeyboardArrowLeft className='text-3xl' />
            <motion.span className='flex w-full p-1 overflow-x-auto gap-2 overscroll-contain no-scrollbar'>
              <button> tag </button>
              <button> tag </button>
              <button> tag </button>
              <button> tag </button>
              <button> tag </button>
              <button> tag </button>
            </motion.span>
            <MdKeyboardArrowRight className='text-3xl' />
          </div>
        </div>
        <div className=' gap-4 flex flex-col'>
          {/* Example featured project cards */}
          <div className='flex h-32 bg-white shadow-md rounded-lg p-4 w-full text-[#1e3f4b] gap-2 items-center'>
            <FaRegImage className='text-7xl' />
            <div className=''>
              <h2 className='font-semibold text-md'>Save me</h2>
              <p className='text-sm text-[#8693ab]'>Dummy data</p>
            </div>
          </div>
          <div className='flex h-32 bg-white shadow-md rounded-lg p-4 w-full text-[#1e3f4b] gap-2 items-center'>
            <FaRegImage className='text-7xl' />
            <div className=''>
              <h2 className='font-semibold text-md'>Save me</h2>
              <p className='text-sm text-[#8693ab]'>Dummy data</p>
            </div>
          </div>
          <div className='flex h-32 bg-white shadow-md rounded-lg p-4 w-full text-[#1e3f4b] gap-2 items-center'>
            <FaRegImage className='text-7xl' />
            <div className=''>
              <h2 className='font-semibold text-md'>Save me</h2>
              <p className='text-sm text-[#8693ab]'>Dummy data</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <motion.button className=''>Show More</motion.button>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </main>
  );
};

export default featured;
