'use client';
import React, { use } from 'react';
import { motion } from 'motion/react';

const Start = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-4rem)] items-center justify-center'>
      <div className='flex flex-col md:w-1/3 justify-center items-center gap-8'>
        <h1 className='flex text-3xl text-center text-[#1e3f4b]'>
          Start raising under one of our many causes
        </h1>
        <motion.button className='p-4 bg-[#9fe3d2] rounded-4xl'>
          {' '}
          Start a Campaign{' '}
        </motion.button>
      </div>
    </div>
  );
};

export default Start;
