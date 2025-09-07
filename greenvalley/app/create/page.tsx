import React from 'react';
import { IoIosLeaf } from 'react-icons/io';
import Carosel from '@/components/carosel';
import Link from 'next/link';
import Slide1 from '@/components/Slide1';
import Slide2 from '@/components/slide2';
import Slide3 from '@/components/slide3';
const page = () => {
  const slides = [
    <Slide1 key='location&cat' />,
    <Slide2 key='Amount' />,
    <Slide3 key='unsure' />,
  ];

  function createSlide(index: number, props: any) {
    return {
      slide: index,
      content: slides[index],
      isValid: false,
      props: props,
      slides: slides.length,
    };
  }
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
