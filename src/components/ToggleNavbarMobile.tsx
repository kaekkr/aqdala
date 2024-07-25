'use client'

import Image from 'next/image'
import useNavbarStore from '@/lib/store'

const ToggleNavbarMobile = () => {
	const { isNavOpen, toggleNav } = useNavbarStore()
	
	return (
		<>
			{!isNavOpen && (
				<Image
					src='/icons/hamburger-icon.svg'
					alt='menu icon'
					width={24}
					height={24}
					className='md:hidden py-[29px]'
					onClick={toggleNav}
				/>
			)}
			{isNavOpen && (
				<Image
					src='/icons/cross-icon.svg'
					alt='close icon'
					width={24}
					height={24}
					className='md:hidden py-[29px]'
					onClick={toggleNav}
				/>
			)}
		</>
	)
}

export default ToggleNavbarMobile
