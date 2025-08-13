'use client';

import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';
import { AnimatePresence, motion } from 'motion/react';
import { IoIosLeaf } from 'react-icons/io';
export default function Navbar() {
  // const user =

  return (
    <nav className=' flex items-center bg-[#1d3e4e] w-full p-4 h-16 justify-between'>
      <div className='flex items-center justify-end'>
        <IoIosLeaf className='text-[#9fe3d2] text-3xl' />
        <h1 className='font-bold text-white text-xl'>GreenValley</h1>
        <span className='p-4 flex max-md:hidden gap-4 text-white text-lg'>
          <motion.button>Donate</motion.button>
          <motion.button>About</motion.button>
          <motion.button>Our Stories</motion.button>
          <motion.button>Contact</motion.button>
        </span>
      </div>

      <div className='md:hidden'>
        <Menu />
      </div>
      <div className='flex max-md:hidden text-white gap-3'>
        <Link href='/sign-in' className='p-2 text-lg'>
          Login
        </Link>
        <motion.button className='p-2 bg-white text-[#1e3f4b] rounded-sm shadow-md'>
          Start a Campaign
        </motion.button>
      </div>
    </nav>
    // <nav className='flex justify-between items-start text-[#1F2933] w-screen h-20 p-4 shadow-sm'>
    //   <div className=''>
    //     <button className='hidden'>Start a Campaign</button>

    //     <Link href='/sign-in' className=' '>
    //       <Image
    //         width={40}
    //         height={40}
    //         alt={'user icon'}
    //         src={'/user.png'}
    //       ></Image>
    //     </Link>
    //   </div>
    //   <div className=''>
    //     <Image
    //       width={65}
    //       height={30}
    //       alt={'Green Valley Logo'}
    //       src={'/GreenValleyLogo.png'}
    //     ></Image>
    //   </div>

    //   <div className='md:hidden'>
    //     <Menu />
    //   </div>

    //   <div className='max-md:hidden'>
    //     <Link href='/sign-in' className='p-2 text-lg'>
    //       Login
    //     </Link>
    //   </div>
    // </nav>
  );
}
