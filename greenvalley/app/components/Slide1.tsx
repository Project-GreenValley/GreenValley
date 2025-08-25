'use client';
import React from 'react';

const Slide1 = () => {
  return (
    <div className='flex flex-col w-full h-full items-center justify-center gap-6'>
      <p className='text-lg text-center'>We like to know a few things first.</p>
      <div className='flex items-center justify-center flex-col text-center'>
        <h2 className='text-xl md:text-2xl'>Where are you located?</h2>
        <p className='text-sm'>
          This information helps us connect you with local donors and resources.
        </p>
      </div>

      <div className='flex w-full justify-center'>
        <select className=' p-3 border-1 w-full' name='Country' id=''>
          <option value='United States'>United States</option>
        </select>
      </div>
    </div>
  );
};

export default Slide1;
