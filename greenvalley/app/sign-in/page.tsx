import Link from 'next/link';
import React from 'react';
import Credentials from '../components/credentials';
const page = () => {
  return (
    <div className='overflow-hidden h-screen p-1'>
      <Link href='/' className='text-xl'>{`<`}</Link>
      <div className='flex flex-col justify-center items-center p-2 h-full'>
        <div className='flex flex-col w-full items-center'>
          <h1 className='text-3xl'>Welcome</h1>
          <p className='w-1/2 py-3 mb-12'>
            Sign in to GreenValley or sign up to continue.
          </p>
        </div>
        <Credentials />
      </div>
    </div>
  );
};

export default page;
