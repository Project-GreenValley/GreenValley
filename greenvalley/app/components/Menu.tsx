'use client';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
// import Link from 'next/link';
import Link from 'next/link';
import { TfiAngleDoubleLeft } from 'react-icons/tfi';
import { TfiClose } from 'react-icons/tfi';

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
            <TfiAngleDoubleLeft className='text-2xl text-white' />
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
                  className='pb-5'
                  onClick={handleOpen}
                >
                  <TfiClose className='text-xl' />
                </motion.button>
                <motion.div className='h-full flex flex-col w-full items-start text-2xl justify-between'>
                  <motion.div>
                    <motion.button>Donate</motion.button>
                    <p className='text-xs'>Find a cause that matters to you</p>
                  </motion.div>
                  <motion.div>
                    <motion.button>About</motion.button>
                    <p className='text-xs'>
                      Learn more about us and what we do
                    </p>
                  </motion.div>
                  <motion.div>
                    <motion.button>Our Stories</motion.button>
                    <p className='text-xs'>
                      Read about succesful campaigns and your impact
                    </p>
                  </motion.div>
                  <motion.div>
                    <motion.button>Contact</motion.button>
                    <p className='text-xs'>
                      Get in touch with us for any questions or concerns
                    </p>
                  </motion.div>
                  <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <Link
                      href={'/create'}
                      className='text-xl p-2 w-full font-bold bg-[#9fe3d2] text-white rounded-3xl text-center'
                    >
                      Start a campaign
                    </Link>
                    <Link
                      href={'/sign-in'}
                      className='text-xl p-2 w-full font-bold bg-[#1d3e4e] text-white rounded-3xl text-center'
                    >
                      Log In
                    </Link>
                  </div>
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
