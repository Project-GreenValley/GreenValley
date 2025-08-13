// import Image from 'next/image';
import { Users } from '../lib/types';
import Navbar from './components/Navbar';
import Showcase from './components/showcase';
import Featured from './components/featured';
import { signoutUser } from './helpers/actions';
import { getCurrentUser } from './helpers/currentUser';
import Start from './components/Start';
import { FaRegEye } from 'react-icons/fa';
export default async function Home() {
  const user: Users | null = await getCurrentUser();
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <div>
        <Showcase />
        <Start />
        <div className=' p-2 flex text-center w-screen h-20 bg-blue-100 items-center font-bold'>
          <FaRegEye className='text-6xl' />
          Campaigns are monitored using different methods to ensure authenticity
        </div>
        <Featured />
      </div>

      {user != null && <button onClick={signoutUser}>LOGOUT</button>}
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        Copyright © 2025 GreenValley
      </footer>
    </div>
  );
}
