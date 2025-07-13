import React from 'react';
import Credentials from '../components/credentials';
import Image from 'next/image';
import Link from 'next/link';
const page = () => {
  return (
    <div className=' md:flex flex-col justify-center items-center overflow-hidden h-screen w-screen p-1'>
      <div className='flex flex-col justify-center items-center p-12 h-full md:h-3/4 md:rounded-xl md:w-1/3 md:shadow-2xl'>
        <Link href='/'>
          <Image
            width={65}
            height={30}
            src='/GreenValleyLogo.png'
            alt='GreenValley Logo'
            className='mb-4'
          ></Image>
        </Link>
        <div className='flex flex-col w-full items-center'>
          <h1 className='text-3xl'>Welcome</h1>
          <p className='w-1/2 py-3 mb-12 text-center'>
            Sign in to GreenValley or sign up to continue.
          </p>
        </div>
        <Credentials />
      </div>
    </div>
  );
};

export default page;
