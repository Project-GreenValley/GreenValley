'use client';
import React, { useState } from 'react';
import GoogleSignIn from './googlesignin';
import { createUser, findUser, signInUser } from '../helpers/userActions';
import { Users } from '../../lib/types';

const Credentials = () => {
  const [existing, setExisting] = useState('null');
  const handleFindUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (existing === 'null') {
      e.preventDefault(); //this prevents the form from submitting
    }
    const form = e.currentTarget.form; //grabs the info from parent form
    const formData = new FormData(form!);
    const email = formData.get('email') as string;

    const user: Users | null = await findUser(email);
    if (!user) {
      setExisting('false');
    } else if (user.google_id) {
      setExisting('google');
    } else {
      setExisting('true');
    }
  };

  return (
    <form
      action={existing === 'true' ? signInUser : createUser}
      className='flex flex-col gap-2 w-full h-1/4 justify-center'
    >
      {existing != 'google' && (
        <>
          <GoogleSignIn />
          <div className='flex items-center'>
            <hr className='flex-grow border-t border-gray-300' />
            <p className='mx-4 text-gray-500 font-medium'>or</p>
            <hr className='flex-grow border-t border-gray-300' />
          </div>
        </>
      )}
      {existing === 'false' && (
        <input
          type='name'
          name='name'
          placeholder='Name'
          className='px-4 py-3 rounded-sm border-solid border-2'
        />
      )}
      <input
        type='text'
        name='email'
        placeholder='email'
        className='px-4 py-3 rounded-sm border-solid border-2'
      />
      {existing === 'true' && (
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='px-4 py-3 rounded-sm border-solid border-2'
        />
      )}
      {existing === 'false' && (
        <input
          type='password'
          name='password'
          placeholder='Set Password'
          className='px-4 py-3 rounded-sm border-solid border-2'
        />
      )}

      {existing != 'google' && (
        <button
          onClick={(e) => handleFindUser(e)}
          className=' p-3 rounded-sm text-white bg-[#1F2933] hover:bg-black'
        >
          {existing === 'true' ? 'Sign In' : 'Continue'}
        </button>
      )}

      {existing === 'google' && <GoogleSignIn />}
    </form>
  );
};

export default Credentials;
