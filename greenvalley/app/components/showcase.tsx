'use client';
import React from 'react';
import { motion } from 'motion/react';
import { FaGlobeAfrica } from 'react-icons/fa';
const showcase = () => {
  return (
    <main className='flex max-md:flex-col w-screen h-[calc(100vh-4rem)] bg-linear-to-t from-[#47a498] to-[#1d3e4e] p-3 items-center'>
      <div className='gap-3 flex flex-col h-full justify-center items-center md:w-1/2 md:p-4 md:justify-center md:items-start'>
        <h1 className='text-white text-3xl font-bold'>
          Crowdfunding with Transparency and Trust
        </h1>
        <p className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blah blah blah our goal meh meh meh and mission meh mah mah...
        </p>
        <motion.button className='p-2 rounded-md text-black bg-white shadow-lg/10'>
          Learn about us and how we achieve our mission of{' '}
          <span className='text-[#9fe3d2] font-bold'>transparency</span>
        </motion.button>
      </div>
      <div className='w-2/4 h-full flex items-center justify-center'>
        <FaGlobeAfrica className='text-white text-9xl opacity-50' />
      </div>
    </main>
  );
};

export default showcase;
