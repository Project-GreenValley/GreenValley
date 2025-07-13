'use client';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
// import Link from 'next/link';
import Image from 'next/image';
import Link from 'next/link';
const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <button onClick={handleOpen}>
          {isOpen === false && (
            <Image
              width={40}
              height={30}
              alt={'Menu Icon'}
              src={'/menuGV.png'}
            ></Image>
          )}
        </button>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen === true && (
          <>
            <motion.div
              transition={{ type: 'tween' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className='w-screen h-screen absolute left-0 top-0 overflow-hidden bg-black/30'
            ></motion.div>
            <div className='flex justify-end  w-screen h-screen absolute left-0 top-0 overflow-hidden'>
              <motion.div
                transition={{ type: 'tween' }}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className=' flex flex-col p-4 items-end h-screen w-3/4 absolute z-2 bg-white shadow-xl/90 '
              >
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className='pb-4'
                  onClick={handleOpen}
                >
                  <Image
                    width={40}
                    height={30}
                    alt={'Menu Icon'}
                    src={'/closeGV.png'}
                  ></Image>
                </motion.button>
                <motion.div className='flex w-full justify-center'>
                  <Link
                    href={'/sign-in'}
                    className='text-xl p-2 px-16 font-bold bg-green-500 text-white rounded-lg'
                  >
                    Log In
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
