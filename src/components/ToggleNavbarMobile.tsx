'use client'

import useNavbarStore from '@/lib/store'
import Image from 'next/image'
import ChangeLanguage from './ChangeLanguage'

const ToggleNavbarMobile = () => {
	const { isNavOpen, toggleNav } = useNavbarStore()

	return (
		<div className='md:hidden flex space-x-4 items-center'>
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
			<ChangeLanguage />
		</div>
	)
}

export default ToggleNavbarMobile
