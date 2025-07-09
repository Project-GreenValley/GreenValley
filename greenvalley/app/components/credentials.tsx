'use client';
import React from 'react';
import GoogleSignIn from './googlesignin';
const credentials = () => {
  return (
    <form action='' className='flex flex-col gap-2 w-full h-1/4 justify-center'>
      <GoogleSignIn />
      <hr className='m-2' />
      <input
        type='username'
        name='username'
        placeholder='Username/email'
        className='px-4 py-3 rounded-sm border-solid border-2'
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        className='px-4 py-3 rounded-sm border-solid border-2'
      />
      <button className=' p-3 rounded-sm text-white bg-[#1F2933] hover:bg-black'>
        Continue
      </button>
    </form>
  );
};

export default credentials;
