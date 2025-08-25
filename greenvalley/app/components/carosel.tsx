'use client';
import { CaroselComponent } from 'lib/types';
import React, { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carosel: FC<CaroselComponent> = ({ slides }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? 0 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? curr : curr + 1));
  return (
    <div className='w-screen h-[calc(100vh-4rem)] flex justify-center '>
      <div className='p-4 flex flex-col w-full items-center md:w-3/4'>
        <div className=' h-3/4 w-full'>
          <AnimatePresence mode='popLayout'>
            <motion.div
              key={curr}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='h-full'
            >
              {slides[curr]}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='p-2 w-full flex justify-between'>
          {curr != 0 ? (
            <motion.button className='flex justify-start' onClick={prev}>
              Back
            </motion.button>
          ) : (
            <div></div>
          )}
          <motion.button
            className='flex justify-end items-end bg-[#1d3e4e] text-white p-2 rounded-md shadow-md'
            onClick={next}
          >
            Continue
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
