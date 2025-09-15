'use client';
// import { CaroselComponent } from 'lib/types';
import React, { FC, JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';

const Carosel: FC /*<CaroselComponent>*/ = () => {
  const [curr, setCurr] = useState(0);
  const [isValid, setIsValid] = useState<{ [key: string]: boolean }>({
    slide1: false,
    slide2: false,
    slide3: false,
    slide4: false,
  });
  const [slideInfo, setSlideInfo] = useState<object>({
    slide1Info: {
      zipcode: '',
      state: '',
      country: '',
    },
    slide2Info: {
      category: '',
      subcategories: {},
    },
    slide3info: {
      campaignName: '',
      tagline: '',
      description: '',
      website: '',
    },
    slide4info: {},
  });

  const slidesArray = [Slide1, Slide2, Slide3, Slide4];
  function createSlide(
    index: number,
    props: any
  ): {
    slide: number;
    content: any;
    isValid: boolean;
    props: any;
    slideInfo: object;
    slides: number;
  } {
    return {
      slide: index,
      content: slidesArray[index],
      isValid: isValid[`slide${index + 1}`],
      props,
      slideInfo: { slideInfo, setSlideInfo },
      slides: slidesArray.length,
    };
  }

  const slides = [
    createSlide(0, { setIsValid }),
    createSlide(1, { setIsValid }),
    createSlide(2, { setIsValid }),
    createSlide(3, { setIsValid }),
  ];
  const slideComponents = slides[curr];
  const SlideContent = slideComponents.content;

  // console.log('This is slides truthy', slides[curr].isValid);

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
              <SlideContent
                isValid={slides[curr].isValid}
                props={slides[curr].props}
                slideInfo={slides[curr].slideInfo}
              />
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
            className={`flex justify-end items-end ${
              slides[curr].isValid ? 'bg-[#1d3e4e]' : 'bg-[#8bb1c4]'
            } text-white p-2 rounded-md shadow-md`}
            onClick={() => {
              if (slides[curr].isValid === true) next();
            }}
          >
            Continue
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
