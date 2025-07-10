// import Image from 'next/image';
import { Users } from '../lib/types';
import Navbar from './components/Navbar';
import { signoutUser } from './helpers/actions';
import { getCurrentUser } from './helpers/currentUser';

export default async function Home() {
  const user: Users | null = await getCurrentUser();
  return (
    <div>
      <main className='flex flex-col gap-[32px] row-start-2 items-center'>
        <Navbar />

        {user && (
          <h1 className='text-4xl font-bold'>
            Welcome to GreenValley {user.name}
          </h1>
        )}
        {/* <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        /> */}
      </main>

      {user != null && <button onClick={signoutUser}>LOGOUT</button>}
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        Copyright © 2025 GreenValley
      </footer>
    </div>
  );
}
