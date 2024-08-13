'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavbarMobile from '@/components/NavbarMobile'
import useNavbarStore from '@/lib/store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Manrope } from 'next/font/google'
import { useEffect } from 'react'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500'] })

export default function RootLayoutClient({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { isNavOpen } = useNavbarStore()

	useEffect(() => {
		AOS.init({ duration: 1000 })
	}, [])

	return (
		<>
			<Header />
			{isNavOpen ? (
				<NavbarMobile />
			) : (
				<div className={`pt-11 pb-[122px] ${manrope.className}`}>
					{children}
				</div>
			)}
			<Footer />
		</>
	)
}
