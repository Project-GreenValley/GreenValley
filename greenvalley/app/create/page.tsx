import React from 'react';
import { IoIosLeaf } from 'react-icons/io';
import Carosel from '@/components/carosel';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-center'>
        <div className='w-full md:w-3/4'>
          <div className='flex p-6 h-20 justify-center items-center '>
            <IoIosLeaf className='text-[#9fe3d2] text-3xl' />
            <Link className='flex' href='/'>
              <h1 className='font-bold text- text-3xl text-[#9fe3d2]'>
                GreenValley
              </h1>
            </Link>
          </div>
          <div className='relative flex items-center'>
            <div className='flex-grow border-t border-[#a2bece]'></div>
          </div>
        </div>
      </div>
      <Carosel />
    </div>
  );
};

export default page;
