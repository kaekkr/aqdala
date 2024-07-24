"use client"

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header
            className='bg-white flex flex-col lg:flex-row justify-between items-center px-11 rounded-b-2xl shadow-sm'>
            <div className='flex justify-between w-full lg:w-auto'>
                <Link href='/'>
                    <Image src='/logo.svg' alt='logo' width={105} height={50}/>
                </Link>
                <div className='lg:hidden'>
                    <button onClick={() => setIsNavOpen(!isNavOpen)} className='text-gray-700'>
                        <Image
                            src={isNavOpen ? '/icons/cross-icon.svg' : '/icons/hamburger-icon.svg'}
                            alt='menu icon'
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
            <div className={`lg:hidden mt-4 ${isNavOpen ? 'block' : 'hidden'}`}>
                <Navbar className='text-xl'/>
            </div>
            <div className='hidden lg:flex'>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;
