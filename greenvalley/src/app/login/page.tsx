import Link from "next/link";
import Image from "next/image";

export default function Login() {
    return(
        <div className='flex flex-col items-center justify-center'>
            <nav className='flex items-center p-4 bg-gray-800 text-white w-full'>
                <Link href='/' passHref>
                    <Image
                        src='/favicon.ico'
                        alt='Back'
                        width={32}
                        height={32}
                        className='cursor-pointer'
                    />
                </Link>
                <div className='hidden md:block text-2xl font-bold ml-3'>
                    <h1>GreenValley</h1>
                </div>
            </nav>
            <div className='w-full flex justify-center'>
                <h2 className='hidden md:block text-2xl font-bold m-2'>Login</h2>
            </div>
            <div>
                <form method='post' className='flex flex-col items-center space-y-4'>
                    <p>
                        <label htmlFor='username'>Username:</label>
                        <input id='username' type='text' name='username' className='border border-gray-700 outline-gray-700 rounded-sm ml-2'></input>
                    </p>
                    <p>
                        <label htmlFor='password'>Password:</label>
                        <input id='password' type='password' name='password' className='border border-gray-700 outline-gray-700 rounded-sm ml-3'></input>
                    </p>
                    <button type='submit' className='bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded transition-colors duration-300 cursor-pointer'>Log into GreenValley</button>
                </form>
            </div>
            <div className="flex items-center w-1/4 my-8">
                <hr className="flex-grow border-t border-gray-300" />
                <p className="mx-4 text-gray-500 font-medium">or</p>
                <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div>
                <div className='w-full flex justify-center'>
                    <h2 className='hidden md:block text-2xl font-bold m-2'>Sign Up</h2>
                </div>
                    <form method='post' className='flex flex-col items-center space-y-4'>
                    <p>
                        <label htmlFor='newUsername'>New Username:</label>
                        <input id='newUsername' type='text' name='username' className='border border-gray-700 outline-gray-700 rounded-sm ml-2'></input>
                    </p>
                    <p>
                        <label htmlFor='newPassword'>New Password:</label>
                        <input id='newPassword' type='password' name='password' className='border border-gray-700 outline-gray-700 rounded-sm ml-3'></input>
                    </p>
                    <button type='submit' className='bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded transition-colors duration-300 cursor-pointer'>Create New Account</button>
                </form>
            </div>
        </div>
    );
}