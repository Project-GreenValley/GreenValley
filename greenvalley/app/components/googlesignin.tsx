'use client';
import { signIn } from 'next-auth/react';
import React from 'react';

const googlesignin = () => {
  const handleClick = () => {
    //console.log('signing in with google');
    signIn('google', { callbackUrl: '/' });
  };
  return (
    <button
      //this is needed because the button is within a form. so its treated as a submission.
      //with type here it won't try and refresh the page
      type='button'
      onClick={handleClick}
      className=' block p-3 rounded-sm  border-solid border-2 hover:bg-[#A4DE02]'
    >
      <span>Continue with Google</span>
    </button>
  );
};

export default googlesignin;
