import { SlideProps } from 'lib/types';
import React, { FC } from 'react';

const Slide4: FC<SlideProps> = ({ isValid, props, slideInfo }) => {
  return (
    <div>
      <form action='' className='flex flex-col gap-2'>
        <label htmlFor=''>Goal</label>
        <span className='flex'>
          <p>$</p>
          <input
            type='number'
            className='block w-3/4 border border-[#638495] text-sm rounded-md'
          />
        </span>
        <span className='flex gap-2 p-2'>
          <input className='' type='checkbox' id='allowAfter' />
          <label htmlFor='allowAfter'>Allow donations after goal?</label>
        </span>

        <span className='flex flex-col'>
          <label htmlFor='startDate'>Start Date:</label>
          <input type='date' id='startDate' />
          <label htmlFor='endDate'>End Date:</label>
          <input type='date' id='endDate' />
        </span>

        <div className='flex flex-col'>
          <label htmlFor=''>Fund Usage Options</label>
          <input type='checkbox' className='border border-[#638495]' />
        </div>
      </form>
    </div>
  );
};

export default Slide4;
