'use client'

import NavbarMobile from '@/components/NavbarMobile'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	
	return (
		<header
			className='bg-white flex justify-between items-center md:px-[50px] lg:px-11 rounded-b-2xl shadow-sm'>
			<Link href='/'>
				<Image src='/logo.svg' alt='logo' width={105} height={50} className='hidden lg:block' />
				<Image src='/logo.svg' alt='logo' width={137.21} height={53} className='hidden md:block lg:hidden' />
			</Link>
			<Navbar />
			<NavbarMobile />
		</header>
	)
}

export default Header
