'use client';
import { SlideProps } from 'lib/types';
import React, { FC } from 'react';

const slide3: FC<SlideProps> = ({ isValid, props, slideInfo }) => {
  return (
    <div className='flex flex-col p-2 gap-5'>
      <div className='flex flex-col gap-1'>
        <label>Campaign Name:</label>
        <input
          className='block w-full border-b border-[#638495] text-sm'
          name='campaignName'
          type='text'
          maxLength={50}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label>Tagline: </label>
        <input
          className='appearance-none block w-full border-b border-[#638495] text-sm '
          name='tagline'
          type='text'
          maxLength={100}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label>Description: </label>
        <textarea
          className={`block w-full text-sm p-2.5 text-gray-900 border border-[#638495] rounded-lg`}
          name='description'
          rows={4}
          maxLength={500}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label>Website {`(optional)`}</label>
        <input
          name='website'
          type='text'
          className='appearance-none block w-full border-b border-[#638495] text-sm'
        />
      </div>
    </div>
  );
};

export default slide3;
