'use client';

import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';

export default function Navbar() {
  // const user =

  return (
    <nav className='flex justify-between items-start text-[#1F2933] w-screen h-20 p-4 shadow-sm'>
      <div className=''>
        <button className='hidden'>Start a Campaign</button>

        <Link href='/sign-in' className=' '>
          <Image
            width={40}
            height={40}
            alt={'user icon'}
            src={'/user.png'}
          ></Image>
        </Link>
      </div>
      <div className=''>
        <Image
          width={65}
          height={30}
          alt={'Green Valley Logo'}
          src={'/GreenValleyLogo.png'}
        ></Image>
      </div>

      <div className='md:hidden'>
        <Menu />
      </div>

      <div className='max-md:hidden'>
        <Link href='/sign-in' className='p-2 text-lg'>
          Login
        </Link>
      </div>
    </nav>
  );
}
